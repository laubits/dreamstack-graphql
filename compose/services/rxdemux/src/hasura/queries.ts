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

export const UPDATE_BALANCE = `
  mutation UpdateBalances($account_name: String, $currency: String, $amount: float8) {
    update_balances(where: {account_name: {_eq: $account_name}, currency: {_eq: $currency}}, _set: {amount: $amount}) {
      affected_rows
    }
  }
`
