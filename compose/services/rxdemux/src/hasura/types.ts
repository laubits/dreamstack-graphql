export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  float8: any
  smallint: any
}

export type Accounts = {
  __typename?: 'accounts'
  account_name: Scalars['String']
  balances: Array<Balances>
  balances_aggregate: BalancesAggregate
  is_proxy?: Maybe<Scalars['Boolean']>
  permissions: Array<Permissions>
  permissions_aggregate: PermissionsAggregate
}

export type AccountsBalancesArgs = {
  distinct_on?: Maybe<Array<BalancesSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<BalancesOrderBy>>
  where?: Maybe<BalancesBoolExp>
}

export type AccountsBalancesAggregateArgs = {
  distinct_on?: Maybe<Array<BalancesSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<BalancesOrderBy>>
  where?: Maybe<BalancesBoolExp>
}

export type AccountsPermissionsArgs = {
  distinct_on?: Maybe<Array<PermissionsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<PermissionsOrderBy>>
  where?: Maybe<PermissionsBoolExp>
}

export type AccountsPermissionsAggregateArgs = {
  distinct_on?: Maybe<Array<PermissionsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<PermissionsOrderBy>>
  where?: Maybe<PermissionsBoolExp>
}

export type AccountsAggregate = {
  __typename?: 'accounts_aggregate'
  aggregate?: Maybe<AccountsAggregateFields>
  nodes: Array<Accounts>
}

export type AccountsAggregateFields = {
  __typename?: 'accounts_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<AccountsMaxFields>
  min?: Maybe<AccountsMinFields>
}

export type AccountsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AccountsSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type AccountsAggregateOrderBy = {
  count?: Maybe<OrderBy>
  max?: Maybe<AccountsMaxOrderBy>
  min?: Maybe<AccountsMinOrderBy>
}

export type AccountsArrRelInsertInput = {
  data: Array<AccountsInsertInput>
  on_conflict?: Maybe<AccountsOnConflict>
}

export type AccountsBoolExp = {
  _and?: Maybe<Array<Maybe<AccountsBoolExp>>>
  _not?: Maybe<AccountsBoolExp>
  _or?: Maybe<Array<Maybe<AccountsBoolExp>>>
  account_name?: Maybe<StringComparisonExp>
  balances?: Maybe<BalancesBoolExp>
  is_proxy?: Maybe<BooleanComparisonExp>
  permissions?: Maybe<PermissionsBoolExp>
}

export enum AccountsConstraint {
  AccountsPkey = 'accounts_pkey',
}

export type AccountsInsertInput = {
  account_name?: Maybe<Scalars['String']>
  balances?: Maybe<BalancesArrRelInsertInput>
  is_proxy?: Maybe<Scalars['Boolean']>
  permissions?: Maybe<PermissionsArrRelInsertInput>
}

export type AccountsMaxFields = {
  __typename?: 'accounts_max_fields'
  account_name?: Maybe<Scalars['String']>
}

export type AccountsMaxOrderBy = {
  account_name?: Maybe<OrderBy>
}

export type AccountsMinFields = {
  __typename?: 'accounts_min_fields'
  account_name?: Maybe<Scalars['String']>
}

export type AccountsMinOrderBy = {
  account_name?: Maybe<OrderBy>
}

export type AccountsMutationResponse = {
  __typename?: 'accounts_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Accounts>
}

export type AccountsObjRelInsertInput = {
  data: AccountsInsertInput
  on_conflict?: Maybe<AccountsOnConflict>
}

export type AccountsOnConflict = {
  constraint: AccountsConstraint
  update_columns: Array<AccountsUpdateColumn>
  where?: Maybe<AccountsBoolExp>
}

export type AccountsOrderBy = {
  account_name?: Maybe<OrderBy>
  balances_aggregate?: Maybe<BalancesAggregateOrderBy>
  is_proxy?: Maybe<OrderBy>
  permissions_aggregate?: Maybe<PermissionsAggregateOrderBy>
}

export enum AccountsSelectColumn {
  AccountName = 'account_name',
  IsProxy = 'is_proxy',
}

export type AccountsSetInput = {
  account_name?: Maybe<Scalars['String']>
  is_proxy?: Maybe<Scalars['Boolean']>
}

export enum AccountsUpdateColumn {
  AccountName = 'account_name',
  IsProxy = 'is_proxy',
}

export type AuthAcc = {
  __typename?: 'auth_acc'
  account_name: Scalars['String']
  actor: Scalars['String']
  perm_name: Scalars['String']
  weight: Scalars['Int']
}

export type AuthAccAggregate = {
  __typename?: 'auth_acc_aggregate'
  aggregate?: Maybe<AuthAccAggregateFields>
  nodes: Array<AuthAcc>
}

export type AuthAccAggregateFields = {
  __typename?: 'auth_acc_aggregate_fields'
  avg?: Maybe<AuthAccAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<AuthAccMaxFields>
  min?: Maybe<AuthAccMinFields>
  stddev?: Maybe<AuthAccStddevFields>
  stddev_pop?: Maybe<AuthAccStddevPopFields>
  stddev_samp?: Maybe<AuthAccStddevSampFields>
  sum?: Maybe<AuthAccSumFields>
  var_pop?: Maybe<AuthAccVarPopFields>
  var_samp?: Maybe<AuthAccVarSampFields>
  variance?: Maybe<AuthAccVarianceFields>
}

export type AuthAccAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthAccSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type AuthAccAggregateOrderBy = {
  avg?: Maybe<AuthAccAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<AuthAccMaxOrderBy>
  min?: Maybe<AuthAccMinOrderBy>
  stddev?: Maybe<AuthAccStddevOrderBy>
  stddev_pop?: Maybe<AuthAccStddevPopOrderBy>
  stddev_samp?: Maybe<AuthAccStddevSampOrderBy>
  sum?: Maybe<AuthAccSumOrderBy>
  var_pop?: Maybe<AuthAccVarPopOrderBy>
  var_samp?: Maybe<AuthAccVarSampOrderBy>
  variance?: Maybe<AuthAccVarianceOrderBy>
}

export type AuthAccArrRelInsertInput = {
  data: Array<AuthAccInsertInput>
  on_conflict?: Maybe<AuthAccOnConflict>
}

export type AuthAccAvgFields = {
  __typename?: 'auth_acc_avg_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccAvgOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthAccBoolExp = {
  _and?: Maybe<Array<Maybe<AuthAccBoolExp>>>
  _not?: Maybe<AuthAccBoolExp>
  _or?: Maybe<Array<Maybe<AuthAccBoolExp>>>
  account_name?: Maybe<StringComparisonExp>
  actor?: Maybe<StringComparisonExp>
  perm_name?: Maybe<StringComparisonExp>
  weight?: Maybe<IntComparisonExp>
}

export enum AuthAccConstraint {
  AuthAccPkey = 'auth_acc_pkey',
}

export type AuthAccIncInput = {
  weight?: Maybe<Scalars['Int']>
}

export type AuthAccInsertInput = {
  account_name?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthAccMaxFields = {
  __typename?: 'auth_acc_max_fields'
  account_name?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthAccMaxOrderBy = {
  account_name?: Maybe<OrderBy>
  actor?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  weight?: Maybe<OrderBy>
}

export type AuthAccMinFields = {
  __typename?: 'auth_acc_min_fields'
  account_name?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthAccMinOrderBy = {
  account_name?: Maybe<OrderBy>
  actor?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  weight?: Maybe<OrderBy>
}

export type AuthAccMutationResponse = {
  __typename?: 'auth_acc_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<AuthAcc>
}

export type AuthAccObjRelInsertInput = {
  data: AuthAccInsertInput
  on_conflict?: Maybe<AuthAccOnConflict>
}

export type AuthAccOnConflict = {
  constraint: AuthAccConstraint
  update_columns: Array<AuthAccUpdateColumn>
  where?: Maybe<AuthAccBoolExp>
}

export type AuthAccOrderBy = {
  account_name?: Maybe<OrderBy>
  actor?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  weight?: Maybe<OrderBy>
}

export enum AuthAccSelectColumn {
  AccountName = 'account_name',
  Actor = 'actor',
  PermName = 'perm_name',
  Weight = 'weight',
}

export type AuthAccSetInput = {
  account_name?: Maybe<Scalars['String']>
  actor?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthAccStddevFields = {
  __typename?: 'auth_acc_stddev_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccStddevOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthAccStddevPopFields = {
  __typename?: 'auth_acc_stddev_pop_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccStddevPopOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthAccStddevSampFields = {
  __typename?: 'auth_acc_stddev_samp_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccStddevSampOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthAccSumFields = {
  __typename?: 'auth_acc_sum_fields'
  weight?: Maybe<Scalars['Int']>
}

export type AuthAccSumOrderBy = {
  weight?: Maybe<OrderBy>
}

export enum AuthAccUpdateColumn {
  AccountName = 'account_name',
  Actor = 'actor',
  PermName = 'perm_name',
  Weight = 'weight',
}

export type AuthAccVarPopFields = {
  __typename?: 'auth_acc_var_pop_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccVarPopOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthAccVarSampFields = {
  __typename?: 'auth_acc_var_samp_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccVarSampOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthAccVarianceFields = {
  __typename?: 'auth_acc_variance_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthAccVarianceOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeys = {
  __typename?: 'auth_keys'
  account_name: Scalars['String']
  key: Scalars['String']
  perm_name: Scalars['String']
  weight: Scalars['Int']
}

export type AuthKeysAggregate = {
  __typename?: 'auth_keys_aggregate'
  aggregate?: Maybe<AuthKeysAggregateFields>
  nodes: Array<AuthKeys>
}

export type AuthKeysAggregateFields = {
  __typename?: 'auth_keys_aggregate_fields'
  avg?: Maybe<AuthKeysAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<AuthKeysMaxFields>
  min?: Maybe<AuthKeysMinFields>
  stddev?: Maybe<AuthKeysStddevFields>
  stddev_pop?: Maybe<AuthKeysStddevPopFields>
  stddev_samp?: Maybe<AuthKeysStddevSampFields>
  sum?: Maybe<AuthKeysSumFields>
  var_pop?: Maybe<AuthKeysVarPopFields>
  var_samp?: Maybe<AuthKeysVarSampFields>
  variance?: Maybe<AuthKeysVarianceFields>
}

export type AuthKeysAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AuthKeysSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type AuthKeysAggregateOrderBy = {
  avg?: Maybe<AuthKeysAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<AuthKeysMaxOrderBy>
  min?: Maybe<AuthKeysMinOrderBy>
  stddev?: Maybe<AuthKeysStddevOrderBy>
  stddev_pop?: Maybe<AuthKeysStddevPopOrderBy>
  stddev_samp?: Maybe<AuthKeysStddevSampOrderBy>
  sum?: Maybe<AuthKeysSumOrderBy>
  var_pop?: Maybe<AuthKeysVarPopOrderBy>
  var_samp?: Maybe<AuthKeysVarSampOrderBy>
  variance?: Maybe<AuthKeysVarianceOrderBy>
}

export type AuthKeysArrRelInsertInput = {
  data: Array<AuthKeysInsertInput>
  on_conflict?: Maybe<AuthKeysOnConflict>
}

export type AuthKeysAvgFields = {
  __typename?: 'auth_keys_avg_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysAvgOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeysBoolExp = {
  _and?: Maybe<Array<Maybe<AuthKeysBoolExp>>>
  _not?: Maybe<AuthKeysBoolExp>
  _or?: Maybe<Array<Maybe<AuthKeysBoolExp>>>
  account_name?: Maybe<StringComparisonExp>
  key?: Maybe<StringComparisonExp>
  perm_name?: Maybe<StringComparisonExp>
  weight?: Maybe<IntComparisonExp>
}

export enum AuthKeysConstraint {
  AuthKeysPkey = 'auth_keys_pkey',
}

export type AuthKeysIncInput = {
  weight?: Maybe<Scalars['Int']>
}

export type AuthKeysInsertInput = {
  account_name?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthKeysMaxFields = {
  __typename?: 'auth_keys_max_fields'
  account_name?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthKeysMaxOrderBy = {
  account_name?: Maybe<OrderBy>
  key?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  weight?: Maybe<OrderBy>
}

export type AuthKeysMinFields = {
  __typename?: 'auth_keys_min_fields'
  account_name?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthKeysMinOrderBy = {
  account_name?: Maybe<OrderBy>
  key?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  weight?: Maybe<OrderBy>
}

export type AuthKeysMutationResponse = {
  __typename?: 'auth_keys_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<AuthKeys>
}

export type AuthKeysObjRelInsertInput = {
  data: AuthKeysInsertInput
  on_conflict?: Maybe<AuthKeysOnConflict>
}

export type AuthKeysOnConflict = {
  constraint: AuthKeysConstraint
  update_columns: Array<AuthKeysUpdateColumn>
  where?: Maybe<AuthKeysBoolExp>
}

export type AuthKeysOrderBy = {
  account_name?: Maybe<OrderBy>
  key?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  weight?: Maybe<OrderBy>
}

export enum AuthKeysSelectColumn {
  AccountName = 'account_name',
  Key = 'key',
  PermName = 'perm_name',
  Weight = 'weight',
}

export type AuthKeysSetInput = {
  account_name?: Maybe<Scalars['String']>
  key?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  weight?: Maybe<Scalars['Int']>
}

export type AuthKeysStddevFields = {
  __typename?: 'auth_keys_stddev_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysStddevOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeysStddevPopFields = {
  __typename?: 'auth_keys_stddev_pop_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysStddevPopOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeysStddevSampFields = {
  __typename?: 'auth_keys_stddev_samp_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysStddevSampOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeysSumFields = {
  __typename?: 'auth_keys_sum_fields'
  weight?: Maybe<Scalars['Int']>
}

export type AuthKeysSumOrderBy = {
  weight?: Maybe<OrderBy>
}

export enum AuthKeysUpdateColumn {
  AccountName = 'account_name',
  Key = 'key',
  PermName = 'perm_name',
  Weight = 'weight',
}

export type AuthKeysVarPopFields = {
  __typename?: 'auth_keys_var_pop_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysVarPopOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeysVarSampFields = {
  __typename?: 'auth_keys_var_samp_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysVarSampOrderBy = {
  weight?: Maybe<OrderBy>
}

export type AuthKeysVarianceFields = {
  __typename?: 'auth_keys_variance_fields'
  weight?: Maybe<Scalars['Float']>
}

export type AuthKeysVarianceOrderBy = {
  weight?: Maybe<OrderBy>
}

export type Balances = {
  __typename?: 'balances'
  account_name: Scalars['String']
  amount: Scalars['float8']
  contract: Scalars['String']
  currency: Scalars['String']
  decimals: Scalars['smallint']
}

export type BalancesAggregate = {
  __typename?: 'balances_aggregate'
  aggregate?: Maybe<BalancesAggregateFields>
  nodes: Array<Balances>
}

export type BalancesAggregateFields = {
  __typename?: 'balances_aggregate_fields'
  avg?: Maybe<BalancesAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<BalancesMaxFields>
  min?: Maybe<BalancesMinFields>
  stddev?: Maybe<BalancesStddevFields>
  stddev_pop?: Maybe<BalancesStddevPopFields>
  stddev_samp?: Maybe<BalancesStddevSampFields>
  sum?: Maybe<BalancesSumFields>
  var_pop?: Maybe<BalancesVarPopFields>
  var_samp?: Maybe<BalancesVarSampFields>
  variance?: Maybe<BalancesVarianceFields>
}

export type BalancesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<BalancesSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type BalancesAggregateOrderBy = {
  avg?: Maybe<BalancesAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<BalancesMaxOrderBy>
  min?: Maybe<BalancesMinOrderBy>
  stddev?: Maybe<BalancesStddevOrderBy>
  stddev_pop?: Maybe<BalancesStddevPopOrderBy>
  stddev_samp?: Maybe<BalancesStddevSampOrderBy>
  sum?: Maybe<BalancesSumOrderBy>
  var_pop?: Maybe<BalancesVarPopOrderBy>
  var_samp?: Maybe<BalancesVarSampOrderBy>
  variance?: Maybe<BalancesVarianceOrderBy>
}

export type BalancesArrRelInsertInput = {
  data: Array<BalancesInsertInput>
  on_conflict?: Maybe<BalancesOnConflict>
}

export type BalancesAvgFields = {
  __typename?: 'balances_avg_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesAvgOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesBoolExp = {
  _and?: Maybe<Array<Maybe<BalancesBoolExp>>>
  _not?: Maybe<BalancesBoolExp>
  _or?: Maybe<Array<Maybe<BalancesBoolExp>>>
  account_name?: Maybe<StringComparisonExp>
  amount?: Maybe<Float8ComparisonExp>
  contract?: Maybe<StringComparisonExp>
  currency?: Maybe<StringComparisonExp>
  decimals?: Maybe<SmallintComparisonExp>
}

export enum BalancesConstraint {
  BalancesPkey = 'balances_pkey',
}

export type BalancesIncInput = {
  decimals?: Maybe<Scalars['smallint']>
}

export type BalancesInsertInput = {
  account_name?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['float8']>
  contract?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  decimals?: Maybe<Scalars['smallint']>
}

export type BalancesMaxFields = {
  __typename?: 'balances_max_fields'
  account_name?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['float8']>
  contract?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  decimals?: Maybe<Scalars['smallint']>
}

export type BalancesMaxOrderBy = {
  account_name?: Maybe<OrderBy>
  amount?: Maybe<OrderBy>
  contract?: Maybe<OrderBy>
  currency?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesMinFields = {
  __typename?: 'balances_min_fields'
  account_name?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['float8']>
  contract?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  decimals?: Maybe<Scalars['smallint']>
}

export type BalancesMinOrderBy = {
  account_name?: Maybe<OrderBy>
  amount?: Maybe<OrderBy>
  contract?: Maybe<OrderBy>
  currency?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesMutationResponse = {
  __typename?: 'balances_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Balances>
}

export type BalancesObjRelInsertInput = {
  data: BalancesInsertInput
  on_conflict?: Maybe<BalancesOnConflict>
}

export type BalancesOnConflict = {
  constraint: BalancesConstraint
  update_columns: Array<BalancesUpdateColumn>
  where?: Maybe<BalancesBoolExp>
}

export type BalancesOrderBy = {
  account_name?: Maybe<OrderBy>
  amount?: Maybe<OrderBy>
  contract?: Maybe<OrderBy>
  currency?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export enum BalancesSelectColumn {
  AccountName = 'account_name',
  Amount = 'amount',
  Contract = 'contract',
  Currency = 'currency',
  Decimals = 'decimals',
}

export type BalancesSetInput = {
  account_name?: Maybe<Scalars['String']>
  amount?: Maybe<Scalars['float8']>
  contract?: Maybe<Scalars['String']>
  currency?: Maybe<Scalars['String']>
  decimals?: Maybe<Scalars['smallint']>
}

export type BalancesStddevFields = {
  __typename?: 'balances_stddev_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesStddevOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesStddevPopFields = {
  __typename?: 'balances_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesStddevPopOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesStddevSampFields = {
  __typename?: 'balances_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesStddevSampOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesSumFields = {
  __typename?: 'balances_sum_fields'
  amount?: Maybe<Scalars['float8']>
  decimals?: Maybe<Scalars['smallint']>
}

export type BalancesSumOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export enum BalancesUpdateColumn {
  AccountName = 'account_name',
  Amount = 'amount',
  Contract = 'contract',
  Currency = 'currency',
  Decimals = 'decimals',
}

export type BalancesVarPopFields = {
  __typename?: 'balances_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesVarPopOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesVarSampFields = {
  __typename?: 'balances_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesVarSampOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BalancesVarianceFields = {
  __typename?: 'balances_variance_fields'
  amount?: Maybe<Scalars['Float']>
  decimals?: Maybe<Scalars['Float']>
}

export type BalancesVarianceOrderBy = {
  amount?: Maybe<OrderBy>
  decimals?: Maybe<OrderBy>
}

export type BooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export type Float8ComparisonExp = {
  _eq?: Maybe<Scalars['float8']>
  _gt?: Maybe<Scalars['float8']>
  _gte?: Maybe<Scalars['float8']>
  _in?: Maybe<Array<Scalars['float8']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['float8']>
  _lte?: Maybe<Scalars['float8']>
  _neq?: Maybe<Scalars['float8']>
  _nin?: Maybe<Array<Scalars['float8']>>
}

export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

export type MutationRoot = {
  __typename?: 'mutation_root'
  delete_accounts?: Maybe<AccountsMutationResponse>
  delete_auth_acc?: Maybe<AuthAccMutationResponse>
  delete_auth_keys?: Maybe<AuthKeysMutationResponse>
  delete_balances?: Maybe<BalancesMutationResponse>
  delete_permissions?: Maybe<PermissionsMutationResponse>
  insert_accounts?: Maybe<AccountsMutationResponse>
  insert_auth_acc?: Maybe<AuthAccMutationResponse>
  insert_auth_keys?: Maybe<AuthKeysMutationResponse>
  insert_balances?: Maybe<BalancesMutationResponse>
  insert_permissions?: Maybe<PermissionsMutationResponse>
  update_accounts?: Maybe<AccountsMutationResponse>
  update_auth_acc?: Maybe<AuthAccMutationResponse>
  update_auth_keys?: Maybe<AuthKeysMutationResponse>
  update_balances?: Maybe<BalancesMutationResponse>
  update_permissions?: Maybe<PermissionsMutationResponse>
}

export type MutationRootDeleteAccountsArgs = {
  where: AccountsBoolExp
}

export type MutationRootDeleteAuthAccArgs = {
  where: AuthAccBoolExp
}

export type MutationRootDeleteAuthKeysArgs = {
  where: AuthKeysBoolExp
}

export type MutationRootDeleteBalancesArgs = {
  where: BalancesBoolExp
}

export type MutationRootDeletePermissionsArgs = {
  where: PermissionsBoolExp
}

export type MutationRootInsertAccountsArgs = {
  objects: Array<AccountsInsertInput>
  on_conflict?: Maybe<AccountsOnConflict>
}

export type MutationRootInsertAuthAccArgs = {
  objects: Array<AuthAccInsertInput>
  on_conflict?: Maybe<AuthAccOnConflict>
}

export type MutationRootInsertAuthKeysArgs = {
  objects: Array<AuthKeysInsertInput>
  on_conflict?: Maybe<AuthKeysOnConflict>
}

export type MutationRootInsertBalancesArgs = {
  objects: Array<BalancesInsertInput>
  on_conflict?: Maybe<BalancesOnConflict>
}

export type MutationRootInsertPermissionsArgs = {
  objects: Array<PermissionsInsertInput>
  on_conflict?: Maybe<PermissionsOnConflict>
}

export type MutationRootUpdateAccountsArgs = {
  _set?: Maybe<AccountsSetInput>
  where: AccountsBoolExp
}

export type MutationRootUpdateAuthAccArgs = {
  _inc?: Maybe<AuthAccIncInput>
  _set?: Maybe<AuthAccSetInput>
  where: AuthAccBoolExp
}

export type MutationRootUpdateAuthKeysArgs = {
  _inc?: Maybe<AuthKeysIncInput>
  _set?: Maybe<AuthKeysSetInput>
  where: AuthKeysBoolExp
}

export type MutationRootUpdateBalancesArgs = {
  _inc?: Maybe<BalancesIncInput>
  _set?: Maybe<BalancesSetInput>
  where: BalancesBoolExp
}

export type MutationRootUpdatePermissionsArgs = {
  _inc?: Maybe<PermissionsIncInput>
  _set?: Maybe<PermissionsSetInput>
  where: PermissionsBoolExp
}

export enum OrderBy {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last',
}

export type Permissions = {
  __typename?: 'permissions'
  account_name: Scalars['String']
  accounts: Array<AuthAcc>
  accounts_aggregate: AuthAccAggregate
  keys: Array<AuthKeys>
  keys_aggregate: AuthKeysAggregate
  parent?: Maybe<Scalars['String']>
  perm_name: Scalars['String']
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsAccountsArgs = {
  distinct_on?: Maybe<Array<AuthAccSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthAccOrderBy>>
  where?: Maybe<AuthAccBoolExp>
}

export type PermissionsAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthAccOrderBy>>
  where?: Maybe<AuthAccBoolExp>
}

export type PermissionsKeysArgs = {
  distinct_on?: Maybe<Array<AuthKeysSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthKeysOrderBy>>
  where?: Maybe<AuthKeysBoolExp>
}

export type PermissionsKeysAggregateArgs = {
  distinct_on?: Maybe<Array<AuthKeysSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthKeysOrderBy>>
  where?: Maybe<AuthKeysBoolExp>
}

export type PermissionsAggregate = {
  __typename?: 'permissions_aggregate'
  aggregate?: Maybe<PermissionsAggregateFields>
  nodes: Array<Permissions>
}

export type PermissionsAggregateFields = {
  __typename?: 'permissions_aggregate_fields'
  avg?: Maybe<PermissionsAvgFields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<PermissionsMaxFields>
  min?: Maybe<PermissionsMinFields>
  stddev?: Maybe<PermissionsStddevFields>
  stddev_pop?: Maybe<PermissionsStddevPopFields>
  stddev_samp?: Maybe<PermissionsStddevSampFields>
  sum?: Maybe<PermissionsSumFields>
  var_pop?: Maybe<PermissionsVarPopFields>
  var_samp?: Maybe<PermissionsVarSampFields>
  variance?: Maybe<PermissionsVarianceFields>
}

export type PermissionsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PermissionsSelectColumn>>
  distinct?: Maybe<Scalars['Boolean']>
}

export type PermissionsAggregateOrderBy = {
  avg?: Maybe<PermissionsAvgOrderBy>
  count?: Maybe<OrderBy>
  max?: Maybe<PermissionsMaxOrderBy>
  min?: Maybe<PermissionsMinOrderBy>
  stddev?: Maybe<PermissionsStddevOrderBy>
  stddev_pop?: Maybe<PermissionsStddevPopOrderBy>
  stddev_samp?: Maybe<PermissionsStddevSampOrderBy>
  sum?: Maybe<PermissionsSumOrderBy>
  var_pop?: Maybe<PermissionsVarPopOrderBy>
  var_samp?: Maybe<PermissionsVarSampOrderBy>
  variance?: Maybe<PermissionsVarianceOrderBy>
}

export type PermissionsArrRelInsertInput = {
  data: Array<PermissionsInsertInput>
  on_conflict?: Maybe<PermissionsOnConflict>
}

export type PermissionsAvgFields = {
  __typename?: 'permissions_avg_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsAvgOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type PermissionsBoolExp = {
  _and?: Maybe<Array<Maybe<PermissionsBoolExp>>>
  _not?: Maybe<PermissionsBoolExp>
  _or?: Maybe<Array<Maybe<PermissionsBoolExp>>>
  account_name?: Maybe<StringComparisonExp>
  accounts?: Maybe<AuthAccBoolExp>
  keys?: Maybe<AuthKeysBoolExp>
  parent?: Maybe<StringComparisonExp>
  perm_name?: Maybe<StringComparisonExp>
  threshold?: Maybe<IntComparisonExp>
}

export enum PermissionsConstraint {
  PermissionsPkey = 'permissions_pkey',
}

export type PermissionsIncInput = {
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsInsertInput = {
  account_name?: Maybe<Scalars['String']>
  accounts?: Maybe<AuthAccArrRelInsertInput>
  keys?: Maybe<AuthKeysArrRelInsertInput>
  parent?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsMaxFields = {
  __typename?: 'permissions_max_fields'
  account_name?: Maybe<Scalars['String']>
  parent?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsMaxOrderBy = {
  account_name?: Maybe<OrderBy>
  parent?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  threshold?: Maybe<OrderBy>
}

export type PermissionsMinFields = {
  __typename?: 'permissions_min_fields'
  account_name?: Maybe<Scalars['String']>
  parent?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsMinOrderBy = {
  account_name?: Maybe<OrderBy>
  parent?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  threshold?: Maybe<OrderBy>
}

export type PermissionsMutationResponse = {
  __typename?: 'permissions_mutation_response'
  affected_rows: Scalars['Int']
  returning: Array<Permissions>
}

export type PermissionsObjRelInsertInput = {
  data: PermissionsInsertInput
  on_conflict?: Maybe<PermissionsOnConflict>
}

export type PermissionsOnConflict = {
  constraint: PermissionsConstraint
  update_columns: Array<PermissionsUpdateColumn>
  where?: Maybe<PermissionsBoolExp>
}

export type PermissionsOrderBy = {
  account_name?: Maybe<OrderBy>
  accounts_aggregate?: Maybe<AuthAccAggregateOrderBy>
  keys_aggregate?: Maybe<AuthKeysAggregateOrderBy>
  parent?: Maybe<OrderBy>
  perm_name?: Maybe<OrderBy>
  threshold?: Maybe<OrderBy>
}

export enum PermissionsSelectColumn {
  AccountName = 'account_name',
  Parent = 'parent',
  PermName = 'perm_name',
  Threshold = 'threshold',
}

export type PermissionsSetInput = {
  account_name?: Maybe<Scalars['String']>
  parent?: Maybe<Scalars['String']>
  perm_name?: Maybe<Scalars['String']>
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsStddevFields = {
  __typename?: 'permissions_stddev_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsStddevOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type PermissionsStddevPopFields = {
  __typename?: 'permissions_stddev_pop_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsStddevPopOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type PermissionsStddevSampFields = {
  __typename?: 'permissions_stddev_samp_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsStddevSampOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type PermissionsSumFields = {
  __typename?: 'permissions_sum_fields'
  threshold?: Maybe<Scalars['Int']>
}

export type PermissionsSumOrderBy = {
  threshold?: Maybe<OrderBy>
}

export enum PermissionsUpdateColumn {
  AccountName = 'account_name',
  Parent = 'parent',
  PermName = 'perm_name',
  Threshold = 'threshold',
}

export type PermissionsVarPopFields = {
  __typename?: 'permissions_var_pop_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsVarPopOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type PermissionsVarSampFields = {
  __typename?: 'permissions_var_samp_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsVarSampOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type PermissionsVarianceFields = {
  __typename?: 'permissions_variance_fields'
  threshold?: Maybe<Scalars['Float']>
}

export type PermissionsVarianceOrderBy = {
  threshold?: Maybe<OrderBy>
}

export type QueryRoot = {
  __typename?: 'query_root'
  accounts: Array<Accounts>
  accounts_aggregate: AccountsAggregate
  accounts_by_pk?: Maybe<Accounts>
  auth_acc: Array<AuthAcc>
  auth_acc_aggregate: AuthAccAggregate
  auth_acc_by_pk?: Maybe<AuthAcc>
  auth_keys: Array<AuthKeys>
  auth_keys_aggregate: AuthKeysAggregate
  auth_keys_by_pk?: Maybe<AuthKeys>
  balances: Array<Balances>
  balances_aggregate: BalancesAggregate
  balances_by_pk?: Maybe<Balances>
  permissions: Array<Permissions>
  permissions_aggregate: PermissionsAggregate
  permissions_by_pk?: Maybe<Permissions>
}

export type QueryRootAccountsArgs = {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AccountsOrderBy>>
  where?: Maybe<AccountsBoolExp>
}

export type QueryRootAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AccountsOrderBy>>
  where?: Maybe<AccountsBoolExp>
}

export type QueryRootAccountsByPkArgs = {
  account_name: Scalars['String']
}

export type QueryRootAuthAccArgs = {
  distinct_on?: Maybe<Array<AuthAccSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthAccOrderBy>>
  where?: Maybe<AuthAccBoolExp>
}

export type QueryRootAuthAccAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthAccOrderBy>>
  where?: Maybe<AuthAccBoolExp>
}

export type QueryRootAuthAccByPkArgs = {
  account_name: Scalars['String']
  actor: Scalars['String']
  perm_name: Scalars['String']
}

export type QueryRootAuthKeysArgs = {
  distinct_on?: Maybe<Array<AuthKeysSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthKeysOrderBy>>
  where?: Maybe<AuthKeysBoolExp>
}

export type QueryRootAuthKeysAggregateArgs = {
  distinct_on?: Maybe<Array<AuthKeysSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthKeysOrderBy>>
  where?: Maybe<AuthKeysBoolExp>
}

export type QueryRootAuthKeysByPkArgs = {
  account_name: Scalars['String']
  key: Scalars['String']
  perm_name: Scalars['String']
}

export type QueryRootBalancesArgs = {
  distinct_on?: Maybe<Array<BalancesSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<BalancesOrderBy>>
  where?: Maybe<BalancesBoolExp>
}

export type QueryRootBalancesAggregateArgs = {
  distinct_on?: Maybe<Array<BalancesSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<BalancesOrderBy>>
  where?: Maybe<BalancesBoolExp>
}

export type QueryRootBalancesByPkArgs = {
  account_name: Scalars['String']
  contract: Scalars['String']
  currency: Scalars['String']
}

export type QueryRootPermissionsArgs = {
  distinct_on?: Maybe<Array<PermissionsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<PermissionsOrderBy>>
  where?: Maybe<PermissionsBoolExp>
}

export type QueryRootPermissionsAggregateArgs = {
  distinct_on?: Maybe<Array<PermissionsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<PermissionsOrderBy>>
  where?: Maybe<PermissionsBoolExp>
}

export type QueryRootPermissionsByPkArgs = {
  account_name: Scalars['String']
  perm_name: Scalars['String']
}

export type SmallintComparisonExp = {
  _eq?: Maybe<Scalars['smallint']>
  _gt?: Maybe<Scalars['smallint']>
  _gte?: Maybe<Scalars['smallint']>
  _in?: Maybe<Array<Scalars['smallint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['smallint']>
  _lte?: Maybe<Scalars['smallint']>
  _neq?: Maybe<Scalars['smallint']>
  _nin?: Maybe<Array<Scalars['smallint']>>
}

export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root'
  accounts: Array<Accounts>
  accounts_aggregate: AccountsAggregate
  accounts_by_pk?: Maybe<Accounts>
  auth_acc: Array<AuthAcc>
  auth_acc_aggregate: AuthAccAggregate
  auth_acc_by_pk?: Maybe<AuthAcc>
  auth_keys: Array<AuthKeys>
  auth_keys_aggregate: AuthKeysAggregate
  auth_keys_by_pk?: Maybe<AuthKeys>
  balances: Array<Balances>
  balances_aggregate: BalancesAggregate
  balances_by_pk?: Maybe<Balances>
  permissions: Array<Permissions>
  permissions_aggregate: PermissionsAggregate
  permissions_by_pk?: Maybe<Permissions>
}

export type SubscriptionRootAccountsArgs = {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AccountsOrderBy>>
  where?: Maybe<AccountsBoolExp>
}

export type SubscriptionRootAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<AccountsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AccountsOrderBy>>
  where?: Maybe<AccountsBoolExp>
}

export type SubscriptionRootAccountsByPkArgs = {
  account_name: Scalars['String']
}

export type SubscriptionRootAuthAccArgs = {
  distinct_on?: Maybe<Array<AuthAccSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthAccOrderBy>>
  where?: Maybe<AuthAccBoolExp>
}

export type SubscriptionRootAuthAccAggregateArgs = {
  distinct_on?: Maybe<Array<AuthAccSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthAccOrderBy>>
  where?: Maybe<AuthAccBoolExp>
}

export type SubscriptionRootAuthAccByPkArgs = {
  account_name: Scalars['String']
  actor: Scalars['String']
  perm_name: Scalars['String']
}

export type SubscriptionRootAuthKeysArgs = {
  distinct_on?: Maybe<Array<AuthKeysSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthKeysOrderBy>>
  where?: Maybe<AuthKeysBoolExp>
}

export type SubscriptionRootAuthKeysAggregateArgs = {
  distinct_on?: Maybe<Array<AuthKeysSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<AuthKeysOrderBy>>
  where?: Maybe<AuthKeysBoolExp>
}

export type SubscriptionRootAuthKeysByPkArgs = {
  account_name: Scalars['String']
  key: Scalars['String']
  perm_name: Scalars['String']
}

export type SubscriptionRootBalancesArgs = {
  distinct_on?: Maybe<Array<BalancesSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<BalancesOrderBy>>
  where?: Maybe<BalancesBoolExp>
}

export type SubscriptionRootBalancesAggregateArgs = {
  distinct_on?: Maybe<Array<BalancesSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<BalancesOrderBy>>
  where?: Maybe<BalancesBoolExp>
}

export type SubscriptionRootBalancesByPkArgs = {
  account_name: Scalars['String']
  contract: Scalars['String']
  currency: Scalars['String']
}

export type SubscriptionRootPermissionsArgs = {
  distinct_on?: Maybe<Array<PermissionsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<PermissionsOrderBy>>
  where?: Maybe<PermissionsBoolExp>
}

export type SubscriptionRootPermissionsAggregateArgs = {
  distinct_on?: Maybe<Array<PermissionsSelectColumn>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<PermissionsOrderBy>>
  where?: Maybe<PermissionsBoolExp>
}

export type SubscriptionRootPermissionsByPkArgs = {
  account_name: Scalars['String']
  perm_name: Scalars['String']
}
