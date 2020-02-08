// import { fork$, tx$ } from './chronicle'
import hasura from './hasura'

const QUERY = `
query MyQuery {
  accounts {
    account_name
  }
}
`
const getData = async () => {
  try {
    const data = await hasura.request(QUERY)
    console.log(JSON.stringify(data, undefined, 2))
  } catch (error) {
    console.log(error)
  }
}

getData()

// tx$.subscribe((data: {}) => {
//   console.log('=== tx ===')
//   console.log(data)
// })

// fork$.subscribe((data: {}) => {
//   console.log('=== fork ===')
//   console.log(data)
// })
