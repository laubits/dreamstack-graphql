import { Observable, Subscriber } from 'rxjs'
import { Client as RPCClient } from 'jsonrpc2-ws'

const client = new RPCClient('wss://api.light.xeos.me/wsapi')

export type LightBalance = {
  contract: string
  currency: string
  amount: string
}

export type AccountBalance = {
  account: string
  balances: Array<LightBalance>
}

export default new Observable<AccountBalance>((subscriber: Subscriber<{}>) => {
  client.methods.set('reqdata', (_socket, { data }) => {
    if (!data) return
    subscriber.next(data || 'nothing')
  })

  client.on('connected', async () => {
    try {
      console.log('\n ==> connected to light api!!\n')
      const networks = await client.call('get_networks')
      console.log(JSON.stringify(networks))

      if (Object.keys(networks).indexOf('telos') === -1) {
        console.log('TELOS not support by light api endpoint')
        return
      }

      setInterval(() => {
        const reqid = Math.random()
        client.call('get_balances', {
          reqid,
          network: 'telos',
          accounts: ['gaboesquivel', 'godreamstack'],
        })
      }, 500)
    } catch (error) {
      console.log(error)
    }
  })

  client.on('error', (err: Error) => {
    console.error(err)
    subscriber.complete()
  })
})
