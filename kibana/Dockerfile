FROM nginx:1.9.2
WORKDIR /tmp
#does work with docker but not with fig?
#ADD https://download.elasticsearch.org/kibana/kibana/kibana-3.1.0.tar.gz /tmp/kibana.tar.gz
RUN apt-get update
RUN apt-get install wget -y
WORKDIR /tmp
RUN wget https://download.elasticsearch.org/kibana/kibana/kibana-3.1.0.tar.gz --no-check-certificate
RUN tar zxf /tmp/kibana-3.1.0.tar.gz && mv kibana-3.1.0/* /usr/share/nginx/html/
ADD config.js /usr/share/nginx/html/config.js
ADD dashboard/logstash-dash.json /usr/share/nginx/html/app/dashboards/default.json
ADD nginx.conf /etc/nginx/nginx.conf

