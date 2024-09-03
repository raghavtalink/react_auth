FROM node:20
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i express mongoose cors dotenv
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]