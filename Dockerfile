FROM node:16.5.0-alpine3.13

WORKDIR /home/node/app
COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "npm", "run", "prod" ]