FROM node:alpine
MAINTAINER Lab for BIG-IP CIS
ENV NODE_ENV=production
COPY /files /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm"]
CMD ["start"]
EXPOSE 8080
