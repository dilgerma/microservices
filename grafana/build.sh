#!/bin/bash
TAG=$1
if [ -z $TAG]; then
  TAG="latest"
fi
docker rm -f grafana-build
docker build --rm -f Dockerfile-rpi -t dilgerm/rpi-grafana-build .
container_id=$(docker run -d --name grafana-build -v /gopath1.5/src/github.com/dilgerma/grafana/ dilgerm/rpi-grafana-build)
mkdir build
cp Dockerfile build
cd build
docker cp -r $container_id:/gopath1.5/src/github.com/dilgerma/grafana/bin/grafana-server/bin .
docker cp -r $container_id:/gopath1.5/src/github.com/dilgerma/grafana/public_gen .
docker build -t dilgerm/rpi-grafana:$TAG
docker push dilgerm/rpi-grafana:$TAG
