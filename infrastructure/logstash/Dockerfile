FROM dilgerm/app-base

RUN apt-get install -y wget
RUN wget --no-check-certificate https://download.elastic.co/logstash/logstash/packages/debian/logstash_1.5.4-1_all.deb 

RUN apt-get update && \
    apt-get install -y logrotate
RUN dpkg -i logstash_1.5.4-1_all.deb

#later, keys and certs will be volumes in a production container
COPY logstash.conf.json /etc/logstash/logstash.conf

CMD /opt/logstash/bin/logstash agent -f /etc/logstash/logstash.conf
