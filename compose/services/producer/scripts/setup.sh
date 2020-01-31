#!/usr/bin/env bash

# Throws error when using unset variable
set -ux

# Import helper functions
source $(dirname $0)/helpers.sh

echo "Creating default wallet..."

create_wallet

# Import default eosio private key
import_private_key 5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3

echo "Creating testing accounts ..."

# Loop through the array in the json file, import keys and create accounts
# these pre-created accounts will be used for saving / erasing notes
# we hardcoded each account name, public and private key in the json.
# NEVER store the private key in any source code in your real life developmemnt
# This is just for demo purpose

jq -c '.[]' $(dirname $0)/accounts.json | while read i; do
  name=$(jq -r '.name' <<< "$i")
  pub=$(jq -r '.publicKey' <<< "$i")

  # to simplify, we use the same key for owner and active key of each account
  cleos create account eosio $name $pub $pub
done


