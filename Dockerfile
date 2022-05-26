FROM node:16
RUN apt-get update-y \
    && apt-get clean
WORKDIR /usr/src/app
COPY ./usr/src/appENV port=8080
EXPOSE 8080
CMD ["npm", "start"]