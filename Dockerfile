FROM node:alpine
COPY . /node-app
WORKDIR /node-app
CMD node server.js