#!/bin/bash
TAG=$1
if [ -z $TAG]; then
  TAG="latest"
fi
docker build --rm -f Dockerfile-rpi -t dilgerm/rpi-grafana-build .

container_id=$(docker run -d --name grafana-build -v /gopath1.5/src/github.com/dilgerma/grafana/ dilgerm/rpi-grafana-build)
docker build -f Dockerfile --volumes-from $container_id -t dilgerm/rpi-grafana:$TAG



