FROM resin/rpi-raspbian:jessie
ADD grafana /grafana/
WORKDIR /grafana/bin
ENTRYPOINT ["/grafana/bin/grafana-server"]
EXPOSE 3000
VOLUME /grafana/conf
VOLUME /grafana/data
RUN chmod +x /grafana/bin/grafana-server

