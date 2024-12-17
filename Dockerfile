FROM node:23-alpine
WORKDIR /src
COPY . .
RUN npm i express
EXPOSE 4000
CMD node server.js