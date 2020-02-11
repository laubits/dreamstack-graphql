import client from '../hasura/client'
import { INSERT_BALANCES } from '../hasura/queries'
import { BalancesInsertInput } from '../hasura/types'
import { randomAmount } from '../utils'
import { accounts } from './accounts'

const balances: Array<BalancesInsertInput> = accounts
  .map(
    ({ account_name }): Array<BalancesInsertInput> => [
      {
        account_name,
        amount: randomAmount(),
        contract: 'eosio.token',
        currency: 'TLOS',
        decimals: 4,
      },
      {
        account_name,
        amount: randomAmount(),
        contract: 'godreamtoken',
        currency: 'DREAM',
        decimals: 4,
      },
    ],
  )
  .flat()

const seed = async () => {
  try {
    console.log('===> inserting balances')
    const response = await client.request(INSERT_BALANCES, { balances })
    console.log(response)
  } catch ({ response: { errors } }) {
    console.log(errors)
    process.exit()
  }
}

seed()
