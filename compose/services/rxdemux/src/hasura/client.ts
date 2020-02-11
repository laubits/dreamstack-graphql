import { GraphQLClient } from 'graphql-request'
const { HASURA_ENDPOINT, HASURA_ADMIN_SECRET } = process.env

if (!HASURA_ENDPOINT) throw new Error('Missing HASURA_ENDPOINT env var')
if (!HASURA_ADMIN_SECRET) throw new Error('Missing HASURA_ADMIN_SECRET env var')

export default new GraphQLClient(HASURA_ENDPOINT, {
  headers: {
    'X-Hasura-Admin-Secret': HASURA_ADMIN_SECRET,
  },
})
