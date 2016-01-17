#!/bin/bash

echo "removing old containers"
docker ps -aq | xargs docker rm
echo "removing old images"
docker images -aq --filter="dangling=true" | xargs docker rmi
echo "cleanup volumes"
./docker-cleanup-volumes.sh