FROM nginx:1.7
WORKDIR /tmp
#does work with docker but not with fig?
RUN apt-get update
RUN apt-get install wget -y
WORKDIR /tmp
RUN wget http://grafanarel.s3.amazonaws.com/grafana-1.9.1.tar.gz --no-check-certificate
RUN tar zxf /tmp/grafana-1.9.1.tar.gz && mv grafana-1.9.1/* /usr/share/nginx/html/
ADD config.js /usr/share/nginx/html/config.js
#add default dashboard
ADD dashboards/requests.json /usr/share/nginx/html/app/dashboards/default.json

