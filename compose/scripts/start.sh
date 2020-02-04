#!/bin/bash

echo "Starting all containers"
docker-compose up -d

# it's not retrying conenctions to postgres, restart required for now
sleep 5s
docker-compose restart hasura
