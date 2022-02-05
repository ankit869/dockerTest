FROM node:16
RUN apt-get update
RUN apt-get install libreoffice
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "app.js"]