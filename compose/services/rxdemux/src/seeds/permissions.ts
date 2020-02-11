import client from '../hasura/client'
import { INSERT_PERMISSIONS } from '../hasura/queries'
import { PermissionsInsertInput } from '../hasura/types'

const permissions: Array<PermissionsInsertInput> = [
  {
    account_name: 'gaboesquivel',
    perm_name: 'owner',
    threshold: 2,
    keys: {
      data: [
        {
          key: 'EOS5KtQ2xLm1JShSJvUgG4y6qpYKvQvhT7dAykBigAXrEYxoLBrJm',
          weight: 1,
        },
        {
          key: 'EOS8fPFXbPcJJkmw6wfL5GwcDy6VhKbACrWUzCaszPJ9EXUdsKzBT',
          weight: 1,
        },
      ],
    },
  },
  {
    account_name: 'gaboesquivel',
    perm_name: 'active',
    threshold: 1,
    keys: {
      data: [
        {
          key: 'EOS52jQfjcZAP7GfeiWoyBDViHGiuUvG9rEGQdLo2vNyabRBn5Lwv',
          weight: 1,
        },
      ],
    },
  },
  {
    account_name: 'godreamstack',
    perm_name: 'owner',
    threshold: 5,
    keys: {
      data: [
        {
          key: 'gaboesquivel@active',
          weight: 1,
        },
        {
          key: 'eoslaubitscr@active',
          weight: 1,
        },
        {
          key: 'jeff.briceno@active',
          weight: 1,
        },
        {
          key: 'justin.casti@active',
          weight: 1,
        },
        {
          key: 'ronnyfreites@active',
          weight: 1,
        },
        {
          key: 'luisrichmond@active',
          weight: 1,
        },
        {
          key: 'kevin.rodig@active',
          weight: 1,
        },
      ],
    },
  },
  {
    account_name: 'godreamstack',
    perm_name: 'active',
    threshold: 3,
    keys: {
      data: [
        {
          key: 'gaboesquivel@active',
          weight: 1,
        },
        {
          key: 'eoslaubitscr@active',
          weight: 1,
        },
        {
          key: 'jeff.briceno@active',
          weight: 1,
        },
        {
          key: 'justin.casti@active',
          weight: 1,
        },
        {
          key: 'ronnyfreites@active',
          weight: 1,
        },
        {
          key: 'luisrichmond@active',
          weight: 1,
        },
        {
          key: 'kevin.rodig@active',
          weight: 1,
        },
      ],
    },
  },
]

const seed = async () => {
  try {
    console.log('===> inserting permissions')
    const response = await client.request(INSERT_PERMISSIONS, { permissions })
    console.log(response)
  } catch ({ response: { errors } }) {
    console.log(errors)
    process.exit()
  }
}

seed()
