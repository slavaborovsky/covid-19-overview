#!/bin/bash

IMAGE_STORAGE=$1
IMAGE_TAG=$2

docker build . -t ${IMAGE_STORAGE}:${IMAGE_TAG}