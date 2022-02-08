FROM node:16
RUN apt-get update
COPY . /
WORKDIR /
RUN npm install
CMD ["node", "app.js"]