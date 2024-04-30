FROM node:20-alpine 

WORKDIR /app

COPY . .

# No need to expose the port since we are not accessing it on the web browser

