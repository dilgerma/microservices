#/bin/bash
sudo ./tools/hypriot-docker-machine create -d hypriot --swarm --swarm-discovery token://$TOKEN --hypriot-ip-address $1 $2
