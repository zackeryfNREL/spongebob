# Use nginx alpine image for lightweight container
FROM nginx:alpine

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

# Create non-root user for nginx (already exists in nginx:alpine)
# Switch to nginx user
USER nginx

# Expose port 8080 (non-privileged port)
EXPOSE 8080

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
