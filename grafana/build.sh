#!/bin/bash
TAG=$1
if [ -z $TAG]; then
  TAG="latest"
fi
docker rm -f grafana-build
docker build --rm -f Dockerfile-rpi -t dilgerm/rpi-grafana-build .
container_id=$(docker run -d --name grafana-build -v /gopath1.5/src/github.com/dilgerma/grafana/ dilgerm/rpi-grafana-build)
echo "removing build file"
rm -rf build && mkdir build
cp Dockerfile build
docker cp $container_id:/gopath1.5/src/github.com/dilgerma/grafana/bin/ build/grafana/bin
docker cp $container_id:/gopath1.5/src/github.com/dilgerma/grafana/public_gen build/grafana/public_gen
docker build -t dilgerm/rpi-grafana:$TAG build 
docker push dilgerm/rpi-grafana:$TAG
