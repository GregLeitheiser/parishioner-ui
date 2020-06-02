#Dockerfile

FROM nginx:latest

MAINTAINER Greg Leitheiser <greg@servantscode.org>

COPY docker/nginx.conf /etc/nginx/conf.d/
COPY dist/parishioner-ui /usr/share/nginx/html
