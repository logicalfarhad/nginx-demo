# Use the official Nginx base image
FROM nginx:alpine

RUN rm -f /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d/