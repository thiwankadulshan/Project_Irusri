FROM node:22-alpine

COPY package*.json ./

RUN npm cache clean --force \
    && npm ci

RUN npm i

WORKDIR /app

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev", "--", "--host" ]
