FROM node:12-alpine
WORKDIR /app-server
COPY package.json  ./
COPY package-lock.json  ./
RUN npm install
COPY ./bin ./bin
COPY ./configs ./configs
COPY ./public ./public
COPY ./routes ./routes
COPY ./app.js ./
EXPOSE 5000
CMD ["node", "./bin/www"]
