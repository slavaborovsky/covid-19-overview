#!/bin/bash

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

IMAGE_STORAGE=$1
IMAGE_TAG=$2

docker push ${IMAGE_STORAGE}:${IMAGE_TAG}