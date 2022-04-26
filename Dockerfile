FROM ubuntu:latest
EXPOSE 3000

RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN node -v && npm -v

WORKDIR /usr/src/
RUN git clone https://github.com/Teemukoivumaa/colory.git
WORKDIR /usr/src/colory

RUN npm install

CMD npm start
