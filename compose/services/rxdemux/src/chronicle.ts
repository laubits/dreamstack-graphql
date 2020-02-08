import ConsumerServer from 'chronicle-consumer'
import { Observable, Subscriber } from 'rxjs'

const { CHRONICLE_HOST, CHRONICLE_PORT, CHRONICLE_ACK, CHRONICLE_ASYNC } = process.env

if (!CHRONICLE_HOST) throw new Error('Missing CHRONICLE_HOST env var')
if (!CHRONICLE_PORT) throw new Error('Missing CHRONICLE_PORT env var')
if (!CHRONICLE_ACK) throw new Error('Missing CHRONICLE_ACK env var')
if (!CHRONICLE_ASYNC) throw new Error('Missing CHRONICLE_ASYNC env var')

const chronicleOptions = { host: CHRONICLE_HOST, port: CHRONICLE_PORT, ackEvery: CHRONICLE_ACK, async: CHRONICLE_ASYNC }
const chronicleServer = new ConsumerServer(chronicleOptions)

export const fork$ = new Observable<{}>((subscriber: Subscriber<{}>) => {
  chronicleServer.on('fork', (data: {}) => subscriber.next(data))
})

export const tx$ = new Observable<{}>((subscriber: Subscriber<{}>) => {
  chronicleServer.on('tx', (data: {}) => subscriber.next(data))
})

chronicleServer.on('connected', () => console.log('connected'))
chronicleServer.on('disconnected', () => console.log('disconnected'))

chronicleServer.start()

console.log('Chronicle consumer started')
