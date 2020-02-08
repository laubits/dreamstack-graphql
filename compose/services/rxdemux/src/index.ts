import { fork$, tx$ } from './chronicle'

tx$.subscribe((data: {}) => {
  console.log('=== tx ===')
  console.log(data)
})

fork$.subscribe((data: {}) => {
  console.log('=== fork ===')
  console.log(data)
})
