FROM node:16 as build

WORKDIR /usr/src/
RUN git clone https://github.com/Teemukoivumaa/colory.git
WORKDIR /usr/src/colory

RUN npm install

FROM node:alpine as main

COPY --from=build /usr/src/colory /

RUN adduser -D coloryUser

USER coloryUser

EXPOSE 3000

CMD npm start