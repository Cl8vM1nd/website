#!/bin/bash

email="clevmind@gmail.com"
zone="europe-west1-b"

# Cluster
cluster_name="clevmind-website"
machine_type="f1-micro"
node_size="10"
network="faist"
nodes_number="3"

gcloud config set account $email
gcloud config set compute/zone $zone

# Create Cluster
gcloud container clusters create $cluster_name \
    --zone $zone \
    --machine-type $machine_type \
    --disk-size $node_size \
    --network $network \
    --num-nodes $nodes_number


kubectl apply -f kube/production-service.yaml
kubectl apply -f kube/production-deployment.yaml
