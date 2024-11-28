package hook

import (
	"sort"
	"sync"

	"github.com/pocketbase/pocketbase/tools/security"
)

// Handler defines a single Hook handler.
// Multiple handlers can share the same id.
// If Id is not explicitly set it will be autogenerated by Hook.Add and Hook.AddHandler.
type Handler[T Resolver] struct {
	// Func defines the handler function to execute.
	//
	// Note that users need to call e.Next() in order to proceed with
	// the execution of the hook chain.
	Func func(T) error

	// Id is the unique identifier of the handler.
	//
	// It could be used later to remove the handler from a hook via [Hook.Remove].
	//
	// If missing, an autogenerated value will be assigned when adding
	// the handler to a hook.
	Id string

	// Priority allows changing the default exec priority of the handler within a hook.
	//
	// If 0, the handler will be executed in the same order it was registered.
	Priority int
}

// Hook defines a generic concurrent safe structure for managing event hooks.
//
// When using custom event it must embed the base [hook.Event].
//
// Example:
//
//	type CustomEvent struct {
//		hook.Event
//		SomeField int
//	}
//
//	h := Hook[*CustomEvent]{}
//
//	h.BindFunc(func(e *CustomEvent) error {
//		println(e.SomeField)
//
//		return e.Next()
//	})
//
//	h.Trigger(&CustomEvent{ SomeField: 123 })
type Hook[T Resolver] struct {
	handlers []*Handler[T]
	mu       sync.RWMutex
}

// Bind registers the provided handler to the current hooks queue.
//
// If handler.Id is empty it is updated with autogenerated value.
//
// If a handler from the current hook list has Id matching handler.Id
// then the old handler is replaced with the new one.
func (h *Hook[T]) Bind(handler *Handler[T]) string {
	h.mu.Lock()
	defer h.mu.Unlock()

	var exists bool

	if handler.Id == "" {
		handler.Id = generateHookId()

		// ensure that it doesn't exist
	DUPLICATE_CHECK:
		for _, existing := range h.handlers {
			if existing.Id == handler.Id {
				handler.Id = generateHookId()
				goto DUPLICATE_CHECK
			}
		}
	} else {
		// replace existing
		for i, existing := range h.handlers {
			if existing.Id == handler.Id {
				h.handlers[i] = handler
				exists = true
				break
			}
		}
	}

	// append new
	if !exists {
		h.handlers = append(h.handlers, handler)
	}

	// sort handlers by Priority, preserving the original order of equal items
	sort.SliceStable(h.handlers, func(i, j int) bool {
		return h.handlers[i].Priority < h.handlers[j].Priority
	})

	return handler.Id
}

// BindFunc is similar to Bind but registers a new handler from just the provided function.
//
// The registered handler is added with a default 0 priority and the id will be autogenerated.
//
// If you want to register a handler with custom priority or id use the [Hook.Bind] method.
func (h *Hook[T]) BindFunc(fn func(e T) error) string {
	return h.Bind(&Handler[T]{Func: fn})
}

// Unbind removes one or many hook handler by their id.
func (h *Hook[T]) Unbind(idsToRemove ...string) {
	h.mu.Lock()
	defer h.mu.Unlock()

	for _, id := range idsToRemove {
		for i := len(h.handlers) - 1; i >= 0; i-- {
			if h.handlers[i].Id == id {
				h.handlers = append(h.handlers[:i], h.handlers[i+1:]...)
				break // for now stop on the first occurrence since we don't allow handlers with duplicated ids
			}
		}
	}
}

// UnbindAll removes all registered handlers.
func (h *Hook[T]) UnbindAll() {
	h.mu.Lock()
	defer h.mu.Unlock()

	h.handlers = nil
}

// Length returns to total number of registered hook handlers.
func (h *Hook[T]) Length() int {
	h.mu.RLock()
	defer h.mu.RUnlock()

	return len(h.handlers)
}

// Trigger executes all registered hook handlers one by one
// with the specified event as an argument.
//
// Optionally, this method allows also to register additional one off
// handler funcs that will be temporary appended to the handlers queue.
//
// NB! Each hook handler must call event.Next() in order the hook chain to proceed.
func (h *Hook[T]) Trigger(event T, oneOffHandlerFuncs ...func(T) error) error {
	h.mu.RLock()
	handlers := make([]func(T) error, 0, len(h.handlers)+len(oneOffHandlerFuncs))
	for _, handler := range h.handlers {
		handlers = append(handlers, handler.Func)
	}
	handlers = append(handlers, oneOffHandlerFuncs...)
	h.mu.RUnlock()

	event.setNextFunc(nil) // reset in case the event is being reused

	for i := len(handlers) - 1; i >= 0; i-- {
		i := i
		old := event.nextFunc()
		event.setNextFunc(func() error {
			event.setNextFunc(old)
			return handlers[i](event)
		})
	}

	return event.Next()
}

func generateHookId() string {
	return security.PseudorandomString(20)
}
