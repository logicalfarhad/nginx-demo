# Use the official Node.js runtime as a parent image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application source code to the container
COPY . .

# Build your React app
RUN npm run build

# Expose the port your app runs on (usually 3000 for development)
EXPOSE 3000

# Define the command to run your production-ready app
CMD ["npm", "start"]
