#/bin/bash
./tools/hypriot-docker-machine create -d hypriot --swarm --swarm-master --swarm-discovery token://$1 --hypriot-ip-address $2 $3
