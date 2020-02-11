import roundTo from 'round-to'
import randomFloat from 'random-float'

export const randomAmount = () => roundTo(randomFloat(10000), 4)

export default {}
