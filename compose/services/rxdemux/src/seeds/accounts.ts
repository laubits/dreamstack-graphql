import client from '../hasura/client'
import { INSERT_ACCOUNTS } from '../hasura/queries'
import { AccountsInsertInput } from '../hasura/types'

export const accounts: Array<AccountsInsertInput> = [
  { account_name: 'gaboesquivel' },
  { account_name: 'godreamstack' },
  { account_name: 'eoslaubitscr' },
  { account_name: 'jeff.briceno' },
  { account_name: 'justin.casti' },
  { account_name: 'ronnyfreites' },
  { account_name: 'luisrichmond' },
  { account_name: 'kevin.rodig' },
]

const seed = async () => {
  try {
    console.log('===> inserting accounts')
    const response = await client.request(INSERT_ACCOUNTS, { accounts })
    console.log(response)
  } catch ({ response: { errors } }) {
    console.log(errors)
    process.exit()
  }
}

seed()
