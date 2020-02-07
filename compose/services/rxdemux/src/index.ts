import ligtapi from './light-api'
import getMassive from './massive-db'
import { Database } from 'massive'
import { map } from 'rxjs/operators'

const init = async (db: Database) => {
  ligtapi
    .pipe(
      map(({ balances, account }) => {
        console.log('=================================')
        console.log(JSON.stringify({ balances, account }))
        return balances.map(balance => {
          return {
            ...balance,
            account_name: account,
            decimals: balance.amount.split('.')[1].length,
          }
        })
      }),
    )
    .subscribe({
      async next(data) {
        try {
          data.map(async balance => {
            // it seems massive doesn't support bulk save / upsert anymore ?
            if ((await db.balances.save(balance)) === null) {
              await db.balances.insert(balance)
            }
          })
        } catch (error) {
          console.log(error)
        }
      },
      error(err) {
        console.error(`something wrong occurred: ${err}`)
      },
      complete() {
        console.log(' ligtapi done')
      },
    })
}

// get db instance and initialize
;(async function start() {
  const db = await getMassive()
  init(db)
})()
