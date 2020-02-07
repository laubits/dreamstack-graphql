// import { Observable } from 'rxjs'
import ConsumerServer from 'chronicle-consumer'

const chronicleOptions = { host: 'api.telos.eostribe.io/streaming', port: 443, ackEvery: 10, async: true }
const chronicleServer = new ConsumerServer(chronicleOptions)

chronicleServer.on('fork', (data: {}) => console.log(data))
chronicleServer.on('tx', (data: {}) => console.log(data))
chronicleServer.on('fork', (bnum: number) => console.log(bnum))
chronicleServer.on('connected', () => console.log('connected'))
chronicleServer.on('disconnected', () => console.log('disconnected'))

chronicleServer.start()

console.log('started')
