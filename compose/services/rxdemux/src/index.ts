import { interval } from 'rxjs'
import { take } from 'rxjs/operators'
import fetch from 'cross-fetch'
import { JsonRpc } from 'eosjs'

// Instantiate a new JsonRpc object, with the Network Api Uri, and a request object
const rpc = new JsonRpc('https://api.kylin.alohaeos.com', { fetch })
// Request the balance, passing in the token contract, the account name, and the token symbol
rpc.get_currency_balance('eosio.token', 'eospaceioeos', 'EOS').then(balance => console.log(balance))

const numbers = interval(1000)

const takeFourNumbers = numbers.pipe(take(4))

takeFourNumbers.subscribe(x => console.log('Next: ', x))
