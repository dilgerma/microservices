FROM nginx:1.9.2
#FROM hypriot/rpi-node
WORKDIR /etc/mongo-graphite
RUN apt-get update
RUN apt-get install -y wget
RUN apt-get install -y unzip
RUN apt-get install -y npm
RUN wget –-no-check-certificate https://github.com/dilgerma/mongo-graphite/archive/master.zip
RUN unzip master.zip
ADD config.json /etc/mongo-graphite/mongo-graphite-master/
WORKDIR /etc/mongo-graphite/mongo-graphite-master
RUN npm install
RUN mkdir /var/log/mongo-graphite
ENTRYPOINT nodejs mongo-graphite.js



