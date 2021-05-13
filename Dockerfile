FROM node:alpine
MAINTAINER Lab for BIG-IP CIS
ENV NODE_ENV=lab
WORKDIR /usr/src/app
COPY /files/package*.json ./
COPY /files /usr/src/app
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]
