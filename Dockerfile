FROM node:16
RUN apt-get update
RUN apt install -y unoconv
RUN apt install -y libreoffice
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "app.js"]