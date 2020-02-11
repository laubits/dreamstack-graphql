import randomnItem from 'random-item'
import randomFloat from 'random-float'
import { fork$, tx$ } from './chronicle'
import { accounts } from './seeds/accounts'
import { randomAmount } from './utils'
import hasura from './hasura/client'
import { UPDATE_BALANCE } from './hasura/queries'

const updateBalance = async (variables: {}) => {
  try {
    console.log('===> updating balance', variables)
    const response = await hasura.request(UPDATE_BALANCE, variables)
    console.log(response)
  } catch ({ response: { errors } }) {
    console.log(errors)
    process.exit()
  }
}

tx$.subscribe(async (data: {}) => {
  console.log('=== tx ===')
  console.log(data, randomFloat(10000))
  const { account_name } = randomnItem(accounts)
  await updateBalance({ account_name, currency: 'TLOS', amount: randomAmount() })
  await updateBalance({ account_name, currency: 'DREAM', amount: randomAmount() })
})

fork$.subscribe((data: {}) => {
  console.log('=== fork ===')
  console.log(data)
})

// EG. different streams by conditions

// const somethings$ = source$
//   .filter(isSomething)
//   .do(something):

// const differentThings$ = source$
//   .filter(!isSomething)
//   .do(aDifferentThing):

// // merge them together
// const onlyTheRightThings$ = somethings$
//   .merge(differentThings$)
//   .do(correctThings)
