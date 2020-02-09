source $(dirname $0)/flush.sh

source $(dirname $0)/setup.sh

echo "Starting all containers"
docker-compose up -d nginx postgres pgweb

# it's not retrying conenctions to postgres, restart required for now
sleep 5s
docker-compose up -d hasura

# give hasura time to run migrations and become available
sleep 60s
docker-compose up -d graphiql rxdemux

sleep 5
docker-compose up -d chronicle

