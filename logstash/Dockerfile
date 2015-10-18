FROM ubuntu:14.04

RUN apt-get install -y wget
RUN wget -qO - https://packages.elasticsearch.org/GPG-KEY-elasticsearch | apt-key add -
RUN echo "deb http://packages.elasticsearch.org/logstash/1.5/debian stable main" | sudo tee -a /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y --force-yes logstash

#later, keys and certs will be volumes in a production container
COPY logstash.conf.json /etc/logstash/logstash.conf

CMD sudo /opt/logstash/bin/logstash agent -f /etc/logstash/logstash.conf
