#!/usr/bin/env bash

# Throws error when using unset variable
set -ux

# Unlocks the default wallet and waits .5 seconds
function unlock_wallet () {
  echo "Unlocking defaault wallet..."
  cleos wallet unlock --password $(cat $CONFIG_DIR/wallet/default_password.txt)
  sleep .5
}

# Creates the default wallet and stores the password on a file
function create_wallet () {
  echo "Creating default wallet ..."
  touch $CONFIG_DIR/wallet/default_password.txt
  WALLET_PASSWORD=$(cleos wallet create --to-console | awk 'FNR > 3 { print $1 }' | tr -d '"')
  echo $WALLET_PASSWORD > $CONFIG_DIR/wallet/default_password.txt
  sleep .5
}

# Helper function to import private key into the eoslocal wallet
function import_private_key () {
  cleos wallet import --private-key $1
}

# Creates an eos account with 100 EOS
function create_eos_account () {
  # cleos system newaccount eosio --transfer $1 $2 $2 --stake-net '1 EOS' --stake-cpu '1 EOS' --buy-ram '1 EOS'
  cleos create account eosio $1 $2 $2
  cleos transfer eosio $1 '1000 EOS' -p eosio
}
