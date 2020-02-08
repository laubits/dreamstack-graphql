#!/bin/bash
echo "Building images"
docker-compose build

echo "Initializing docker containers"
docker-compose up -d

# it's not retrying conenctions to postgres, restart required for now
sleep 5s
docker-compose restart hasura

# restart after migrations were applied
sleep 20s
docker-compose restart rxdemux
