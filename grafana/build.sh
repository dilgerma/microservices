#!/bin/bash
TAG=$1
if [ -z $TAG]; then
  TAG="latest"
fi
echo "Removing old images"
docker rm -f grafana-build
docker build --rm -f Dockerfile-rpi -t dilgerm/rpi-grafana-build .
echo "Running Container"
container_id=$(docker run -d --name grafana-build -v /gopath1.5/src/github.com/dilgerma/grafana/ dilgerm/rpi-grafana-build)
echo "cleanup dist"
rm -rf dist && mkdir dist
echo "Preparing dist"
cp Dockerfile dist
echo "Getting binaries"
docker cp $container_id:/gopath1.5/src/github.com/dilgerma/grafana/dist grafana 
echo "Building grafana image"
docker build -t dilgerm/rpi-grafana:$TAG dist 
echo "Pushing image"
docker push dilgerm/rpi-grafana:$TAG
