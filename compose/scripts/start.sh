#!/bin/bash

echo "Starting all containers"
docker-compose up -d nginx postgres pgweb

# it's not retrying conenctions to postgres, restart required for now
sleep 5s
docker-compose up -d hasura

sleep 5s
docker-compose up -d graphiql rxdemux

sleep 5
docker-compose up -d chronicle
