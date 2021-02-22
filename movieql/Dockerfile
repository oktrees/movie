FROM ubuntu:18.04


# sudo install
RUN apt-get update && apt-get install -y sudo

#curl install
RUN apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

#node install
RUN apt-get install -y nodejs
#node npm error set
RUN apt-get install -y build-essential

# git install
RUN apt-get install git -y

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ] 