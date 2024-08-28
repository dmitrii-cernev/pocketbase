FROM alpine:3.17

ARG BUILDARCH
ARG PB_VERSION=0.22.20

RUN apk add --no-cache \
  unzip \
  ca-certificates

ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${BUILDARCH}.zip /tmp/pb.zip

RUN unzip /tmp/pb.zip -d /app/
RUN rm /tmp/pb.zip

# Expose the updated port 8191 for both IPv4 and IPv6
EXPOSE 8191

# Use "::" to bind to all available IPv4 and IPv6 addresses
ENTRYPOINT ["/app/pocketbase", "serve", "--http=[::]:8191"]
