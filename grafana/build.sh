#!/bin/bash
TAG=$1
if [ -z $TAG]; then
  TAG="latest"
fi
docker build -f Dockerfile-rpi -t dilgerm/rpi-grafana:$TAG .
docker push dilgerm/rpi-grafana:$TAG

