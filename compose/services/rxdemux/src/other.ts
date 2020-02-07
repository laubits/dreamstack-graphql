import { interval } from 'rxjs'
import { take } from 'rxjs/operators'

import fetch from 'node-fetch'
import { JsonRpc } from 'eosjs'

// Instantiate a new JsonRpc object, with the Network Api Uri, and a request object
const rpc = new JsonRpc('https://telos.caleos.io', { fetch })
// Request the balance, passing in the token contract, the account name, and the token symbol
rpc.get_currency_balance('eosio.token', 'eospaceioeos', 'EOS').then(balance => console.log(balance))

const numbers = interval(1000)

const takeFourNumbers = numbers.pipe(take(4))

takeFourNumbers.subscribe(async x => {
  console.log('Next: ', x)

  const resp = await rpc.get_table_rows({
    json: true, // Get the response as json
    code: 'eosio.token', // Contract that we target
    scope: 'testacc', // Account that owns the data
    table: 'accounts', // Table name
    limit: 10, // Maximum number of rows that we want to get
    reverse: false, // Optional: Get reversed data
    show_payer: false, // Optional: Show ram payer
  })

  console.log(resp.rows)
})
