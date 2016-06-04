export WEAVE_VERSION=1.4.5
docker pull dilgerm/rpi-scope:$WEAVE_VERSION && docker pull dilgerm/rpi-weave:$WEAVE_VERSION
/usr/local/bin/weave reset
/usr/local/bin/scope stop
/usr/bin/docker pull dilgerm/rpi-weave && /usr/bin/docker pull dilgerm/rpi-weaveexec && /usr/bin/docker pull dilgerm/rpi-plugin && /usr/bin/docker pull dilgerm/rpi-scope
/usr/local/bin/weave launch-router --dns-domain billy.local. pi48 pi28 pi23 pi25 163.172.145.130
/usr/local/bin/weave launch-proxy -H 0.0.0.0:12375  --no-detect-tls
/usr/local/bin/scope launch
/usr/bin/docker -H tcp://0.0.0.0:12375 run --name swarm-agent  -d hypriot/rpi-swarm:latest join --advertise=$(hostname -I | sed 's/^ *//g' | cut -d ' ' -f 1 ):12375 token://b261e64ff089835311816d8dea56c58b
