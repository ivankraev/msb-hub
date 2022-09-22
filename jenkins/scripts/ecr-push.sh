#!/usr/bin/env sh
aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin 501107650877.dkr.ecr.eu-central-1.amazonaws.com
docker tag msb-hub-api:latest 501107650877.dkr.ecr.eu-central-1.amazonaws.com/msb-hub:latest
docker tag msb-hub-client:latest 501107650877.dkr.ecr.eu-central-1.amazonaws.com/msb-hub-client:latest
docker push 501107650877.dkr.ecr.eu-central-1.amazonaws.com/msb-hub:latest
docker push 501107650877.dkr.ecr.eu-central-1.amazonaws.com/msb-hub-client:latest