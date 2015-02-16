#!/bin/bash
fig stop
gradle build
fig build
fig up -d
