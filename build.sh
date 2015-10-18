#!/bin/bash
fig stop
cd fb-web
grunt build
cd ..
gradle build
fig build
fig up -d
