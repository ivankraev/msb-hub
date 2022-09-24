#!/usr/bin/env sh
curl -o kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.22.6/2022-03-09/bin/linux/amd64/kubectl
chmod u+x ./kubectl
./kubectl apply -f infra/k8s/client-config.yaml
./kubectl rollout restart deployment client-depl