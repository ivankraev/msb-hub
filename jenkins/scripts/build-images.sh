#!/usr/bin/env sh
cd api && docker build -t msb-hub-api -f Dockerfile.prod .
cd ../client && docker build -t msb-hub-client -f Dockerfile.prod .