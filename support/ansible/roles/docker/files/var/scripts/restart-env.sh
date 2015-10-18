export IP=$( /sbin/ifconfig eth0 | grep 'inet addr:' | cut -d: -f2 | awk '{ print $1}' )
export SEGMENT=$(echo $IP | cut -d"." -f 4)

docker rm -f swarm-agent
weave reset
weave launch-proxy -H 0.0.0.0:12375
weave launch-router --dns-domain billy.local. master-pi pi48 pi46 pi31 192.168.178.23

docker -H tcp://0.0.0.0:12375 run --name swarm-agent -d hypriot/rpi-swarm:latest join --advertise=$IP:12375 token://b261e64ff089835311816d8dea56c58b