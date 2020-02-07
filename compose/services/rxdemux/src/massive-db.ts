import massive, { Database } from 'massive'

const massiveConfig = {
  host: 'postgres',
  port: 5432,
  database: 'dreamstack',
  user: 'dreamstack',
  password: 'pass',
}

// singleton
let db: Database

export default function getMassive() {
  if (!db) {
    return massive(massiveConfig).then()
  }

  return Promise.resolve(db)
}
