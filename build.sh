#!/bin/bash
gradle build
fig rm --force
fig build
fig up -d
