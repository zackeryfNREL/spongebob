# Use nginx alpine image for lightweight container
FROM docker.io/library/nginx:alpine

# Copy custom nginx configuration with security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy website files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Fix file permissions so nginx can read them
RUN chmod 644 /usr/share/nginx/html/index.html \
    /usr/share/nginx/html/styles.css \
    /usr/share/nginx/html/script.js

# Create necessary directories and set permissions for nginx user
RUN mkdir -p /var/cache/nginx/client_temp \
             /var/cache/nginx/proxy_temp \
             /var/cache/nginx/fastcgi_temp \
             /var/cache/nginx/uwsgi_temp \
             /var/cache/nginx/scgi_temp \
             /var/run \
             /var/log/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 755 /var/cache/nginx /var/run /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown nginx:nginx /var/run/nginx.pid

# Create non-root user for nginx (already exists in nginx:alpine)
# Switch to nginx user
USER nginx

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
