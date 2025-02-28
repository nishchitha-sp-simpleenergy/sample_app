
FROM node:18-alpine
WORKDIR /src/app
COPY json ./
RUN npm 
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
