FROM node:alpine
RUN apt-get install libreoffice
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "app.js"]