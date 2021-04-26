FROM node:dubnium-alpine

RUN mkdir -p /usr/appointments
WORKDIR /usr/appointments

COPY package*.json /usr/appointments
RUN npm install

COPY . /usr/appointments

EXPOSE 3000

CMD ["npm", "start"]