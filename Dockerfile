FROM node:ubuntu
RUN apt-get update
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "app.js"]