#  Step 1 - Build container
FROM node:12-alpine as build
WORKDIR /app-client
COPY package.json ./
RUN npm install
RUN npm install react-scripts -g
COPY ./public ./public
COPY ./src ./src
RUN npm run build

#  Step 2 - Run container on nginx
FROM nginx:1.19-alpine 
COPY --from=build /app-client/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80

#  Step 3 - Start nginx server
CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]