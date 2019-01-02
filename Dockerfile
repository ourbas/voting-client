FROM node:8.15.0-alpine as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.15.8-alpine
COPY --from=node /usr/src/app/dist/voting-client /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


