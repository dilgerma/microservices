#!/bin/bash
fig stop
gradle build
fig rm --force
fig build
fig up -d
