# Step 1: Use Node.js to build the app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Step 2: Use Nginx to serve the app
FROM nginx:alpine

# Copy the build directory to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]