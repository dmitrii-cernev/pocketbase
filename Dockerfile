# Use the official Golang image as a build stage
FROM golang:1.23.3 as builder

# Set the working directory inside the container
WORKDIR /app

# Copy the Go module files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the rest of the application code
COPY . .

# Build the Go application
RUN CGO_ENABLED=0 go build -o base ./examples/base/main.go

# Use a minimal base image for the final stage
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/base .

# Copy the pb_migrations folder
COPY --from=builder /app/examples/base/pb_migrations /app/pb_migrations

# Expose the application port
EXPOSE 8191

# Run the migration commands during the build process
RUN ./base migrate up
RUN ./base migrate history-sync

# Run the application
CMD ["./base", "serve", "--http=[::]:8191"]
