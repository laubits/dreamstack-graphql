export const INSERT_ACCOUNTS = `
  mutation InsertAccounts($accounts: [accounts_insert_input!]!) {
    insert_accounts(objects: $accounts) {
      affected_rows
    }
  }
`

export const INSERT_PERMISSIONS = `
  mutation InsertPermissions($permissions: [permissions_insert_input!]!) {
    insert_permissions(objects: $permissions) {
      affected_rows
    }
  }
`

export const INSERT_BALANCES = `
  mutation InsertBalances($balances: [balances_insert_input!]!) {
    insert_balances(objects: $balances) {
      affected_rows
    }
  }
`
