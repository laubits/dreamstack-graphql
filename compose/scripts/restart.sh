#!/bin/bash

echo "Resarting all containers"

source $(dirname $0)/stop.sh

source $(dirname $0)/start.sh



