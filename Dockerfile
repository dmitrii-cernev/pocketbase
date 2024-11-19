# Use the official Golang image as a build stage
FROM golang:1.22.0 as builder

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

# Expose the application port
EXPOSE 8191

# Run the application
CMD ["./base", "serve", "--http=[::]:8191"]