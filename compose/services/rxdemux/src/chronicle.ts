import ConsumerServer from 'chronicle-consumer'
import { Observable, Subscriber } from 'rxjs'

const { CHRONICLE_CONSUMER_HOST, CHRONICLE_CONSUMER_PORT, CHRONICLE_CONSUMER_ACK, CHRONICLE_CONSUMER_ASYNC } = process.env

if (!CHRONICLE_CONSUMER_HOST) throw new Error('Missing CHRONICLE_CONSUMER_HOST env var')
if (!CHRONICLE_CONSUMER_PORT) throw new Error('Missing CHRONICLE_CONSUMER_PORT env var')
if (!CHRONICLE_CONSUMER_ACK) throw new Error('Missing CHRONICLE_CONSUMER_ACK env var')
if (!CHRONICLE_CONSUMER_ASYNC) throw new Error('Missing CHRONICLE_CONSUMER_ASYNC env var')

const chronicleOptions = {
  host: CHRONICLE_CONSUMER_HOST,
  port: CHRONICLE_CONSUMER_PORT,
  ackEvery: CHRONICLE_CONSUMER_ACK,
  async: CHRONICLE_CONSUMER_ASYNC,
}
const chronicleServer = new ConsumerServer(chronicleOptions)

export const fork$ = new Observable<{}>((subscriber: Subscriber<{}>) => {
  chronicleServer.on('fork', (data: {}) => {
    console.log(data)
    subscriber.next(data)
  })
})

export const tx$ = new Observable<{}>((subscriber: Subscriber<{}>) => {
  chronicleServer.on('tx', (data: {}) => {
    console.log(data)
    subscriber.next(data)
  })
})

chronicleServer.on('connected', () => console.log('connected'))
chronicleServer.on('disconnected', () => console.log('disconnected'))

chronicleServer.start()

console.log('Chronicle consumer started')
