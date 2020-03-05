// import hasura from './hasura/client'
// import { UPDATE_BALANCE } from './hasura/queries'
import eosio$ from './eosio'

// const updateBalance = async (variables: {}) => {
//   try {
//     console.log('===> updating balance', variables)
//     const response = await hasura.request(UPDATE_BALANCE, variables)
//     console.log(response)
//   } catch ({ response: { errors } }) {
//     console.log(errors)
//     process.exit()
//   }
// }

eosio$.subscribe(
  msg => console.log(`message received: ${ msg}`), // Called whenever there is a message from the server.
  err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
  () => console.log('complete'), // Called when connection is closed (for whatever reason).
)
