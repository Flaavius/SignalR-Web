FROM nginx:1.17.10-alpine

LABEL Application="SignalR"

WORKDIR /usr/share/nginx/html

RUN echo "Install bash" \
  && apk add --no-cache --update bash \
  && rm -f /var/cache/apk/* \
  && bash --version

COPY ./dist /usr/share/nginx/html

EXPOSE 80
