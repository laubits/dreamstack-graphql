#!/bin/bash

echo "Resarting all containers"
docker-compose restart

# it's not retrying conenctions to postgres, restart required for now
sleep 5s
docker-compose restart hasura
