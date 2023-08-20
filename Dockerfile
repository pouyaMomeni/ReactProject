# node install
FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i -g npm@9.4.1
RUN npm i --force or --legacy-peer-deps
COPY . .
RUN npm run build


# nginx install
FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g" , "daemon off;" ]
