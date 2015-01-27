FROM ubuntu:14.04

RUN echo "deb http://packages.elasticsearch.org/logstash/1.4/debian stable main" >> /etc/apt/sources.list
RUN apt-get update
RUN apt-get install -y --force-yes logstash

#later, keys and certs will be volumes in a production container

RUN mkdir -p /etc/pki/tls/certs
COPY logstash-forwarder.crt /etc/pki/tls/certs/
RUN chown root:root -R /etc/pki/tls/certs/logstash-forwarder.crt
RUN chmod 0400 /etc/pki/tls/certs/logstash-forwarder.crt

RUN mkdir -p /etc/pki/tls/priv
COPY logstash-forwarder.key /etc/pki/tls/priv/logstash-forwarder.key
RUN chmod 0400 /etc/pki/tls/priv/logstash-forwarder.key

COPY logstash.conf.json /etc/logstash/logstash.conf

CMD sudo /opt/logstash/bin/logstash agent -f /etc/logstash/logstash.conf