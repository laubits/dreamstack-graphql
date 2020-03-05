import WebSocket from 'ws'
import { webSocket } from 'rxjs/webSocket'

// const { EOSIO_SOCKET_ENDPOINT } = process.env

// if (!EOSIO_SOCKET_ENDPOINT) throw new Error('Missing EOSIO_SOCKET_ENDPOINT env var')

const eosio$ = webSocket({
  protocol: 'v1',
  url: 'ws://mainnet.telosusa.io:8890',
  WebSocketCtor: WebSocket,
})

export default eosio$

// const chronicleServer = new ConsumerServer(chronicleOptions)

// export const fork$ = new Observable<{}>((subscriber: Subscriber<{}>) => {
//   chronicleServer.on('fork', (data: {}) => subscriber.next(data))
//   setInterval(() => subscriber.next({ message: "I'm a fork" }), 10000)
// })

// export const tx$ = new Observable<{}>((subscriber: Subscriber<{}>) => {
//   chronicleServer.on('tx', (data: {}) => subscriber.next(Object.assign(data, { random: cryptoRandomString({ length: 100 }) })))
//   setInterval(() => subscriber.next({}), 1000)
// })

// chronicleServer.on('connected', () => console.log('connected'))
// chronicleServer.on('disconnected', () => console.log('disconnected'))

// chronicleServer.start()

// console.log('Chronicle consumer started')
