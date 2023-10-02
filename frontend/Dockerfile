# Use the official Node.js runtime as a parent image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application source code to the container
COPY . .

# Expose the port your app runs on
EXPOSE 5050

# Define the command to run your application
CMD ["npm", "start"]