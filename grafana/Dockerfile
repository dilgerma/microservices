FROM resin/rpi-raspbian:jessie
ADD grafana /grafana/
ENTRYPOINT ["/grafana/bin/grafana-server"]
EXPOSE 3000
RUN chmod +x /grafana/bin/grafana-server


