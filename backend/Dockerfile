# Use Node.js official image as base image
FROM node:16

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) to working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application code
COPY . .

# Build the TypeScript project (Assuming you have `tsconfig.json` in the root)
RUN tsc

# Expose the port your app runs on (usually port 3000 for Express)
EXPOSE 3000

# Start the compiled JavaScript file (usually in the `dist` folder)
CMD ["node", "dist/index.js"]
