FROM ubuntu:20.04
EXPOSE 3000

RUN apt-get update && apt-get install -y curl git
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs
RUN node -v && npm -v

WORKDIR /usr/src/app
COPY ./ ./

RUN npm install --save serve
RUN npm audit fix

CMD ["npm", "start"]
