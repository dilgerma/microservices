
curl -L https://raw.githubusercontent.com/dilgerma/weave/rpi-latest-release/weave -o /usr/local/bin/weave
chmod +x /usr/local/bin/weave
curl -L https://raw.githubusercontent.com/dilgerma/scope/master/scope -o /usr/local/bin/scope
chmod +x /usr/local/bin/scope

export IP=$( hostname -I | sed 's/^ *//g' | cut -d ' ' -f 1 )
docker rm -f swarm-agent
weave reset
scope stop
weave launch-proxy -H 0.0.0.0:12375  --no-detect-tls
weave launch-router --dns-domain billy.local. master-pi pi48 pi46 pi31 pi25 pi24 pi23
scope launch
docker -H tcp://0.0.0.0:12375 run --name swarm-agent  -d hypriot/rpi-swarm:latest join --advertise=$IP:12375 token://b261e64ff089835311816d8dea56c58b
