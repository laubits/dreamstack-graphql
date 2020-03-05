const runSeeds = () => {
  require('./accounts')
  require('./permissions')
  require('./balances')
}

runSeeds()

export {}
