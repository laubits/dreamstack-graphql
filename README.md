<p align="center">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
  <a href="https://developers.blockmatic.io">
		<img src="https://img.shields.io/badge/code%20style-blockmatic-brightgreen.svg" alt="Blockmatic Standard">
	</a>
	<img src="https://img.shields.io/dub/l/vibe-d.svg" alt="MIT" />
	<a href="https://twitter.com/intent/follow?screen_name=telosdreamstack">
		<img src="https://img.shields.io/twitter/follow/telosdreamstack.svg?style=social&logo=twitter" alt="Follow on Twitter" />
	</a>
	<a href="https://t.me/telosdreamstack">
		<img src="https://img.shields.io/badge/-Chat%20on%20Telegram-blue?style=social&logo=telegram" alt="Chat on Telegram">
	</a>
</p>

# TELOS GraphQL Starter

A realtime GraphQL framework for EOSIO dApps.

## Features

- Explorable data graph.
- Realtime GraphQL subscription to blockchain state.
- Realtime GraphQL subscription to blockchain actions.
- Powerful querying, sorting and filtering.
- Microfork handling on the backend, subscribe to state not to deltas.
- Supports ad-hoc external graph stiching.
- Supports ad-hoc offchain graphql resolvers.
- Fast deployment to AWS. (Infra as Code).
- Blockmatic code style conventions.

## TELOS

Best in class C++ EOSIO protocol technology providing fast, scalable and eco-freindly blockchain augmented by a growing library of Telos services and innovations. Free accounts, work proposals, dapp grants, decentralized exchange, dstor, bancor protocol, telos community and foundation.

[Learn more](https://docs.telosdreamstack.io/smart-contracts/telos-blockchain)

## Architecture

<center>
  <img src='https://cdn-std.droplr.net/files/acc_635251/grkS32' style='max-width:600px'/>
</center>

## Demux Pattern

Demux is a backend infrastructure pattern for sourcing blockchain events to deterministically update queryable datastores and trigger side effects. 

Taking inspiration from the [Flux Architecture](https://facebook.github.io/flux/docs/in-depth-overview.html#content) pattern and [Redux](https://github.com/reduxjs/redux/), Demux was born out of the following qualifications:

1. A separation of concerns between how state exists on the blockchain and how it is queried by the client front-end
1. Client front-end not solely responsible for determining derived, reduced, and/or accumulated state
1. The ability for blockchain events to trigger new transactions, as well as other side effects outside of the blockchain
1. The blockchain as the single source of truth for all application stat

Learn more at https://github.com/EOSIO/demux-js.

## GraphQL

GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.

There are many reason for choosing GraphQL over other solutions, read [Top 5 Reasons to Use GraphQL](https://www.prisma.io/blog/top-5-reasons-to-use-graphql-b60cfa683511/).

__Move faster with powerful developer tools__

Know exactly what data you can request from your API without leaving your editor, highlight potential issues before sending a query, and take advantage of improved code intelligence. GraphQL makes it easy to build powerful tools like [GraphiQL](https://github.com/graphql/graphiql) by leveraging your API’s type system.

Learn more at https://graphql.org & https://www.howtographql.com

## Hasura Engine

Hasura GraphQL engine automatically generates your GraphQL schema with powerful and perfomant CRUD and realtime subscriptions. 

Learn more at https://hasura.io

## Postgres

PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.

Learn more at https://www.postgresql.org

## Disclaimer

This is a work in progress. Feel free to reach us out on telegram for clarifications.
https://t.me/telosdreamstack

## Stack

- Hasura on ECS Fargate (auto-scale).
- Aurora Postgres or RDS Postgres.
- Lambdas for remote schemas and event triggers.
- Docker for local dev.
- CircleCI for CI/CD.

## Setup Hasura on Fargate

1. Go to ECS in AWS Console.
2. Create a ECS cluster on Fargate with required specs.
3. Create a service called `hasura` in your cluster.
4. Create a Task Definition with Hasura GraphQL Engine container and environment variables.
5. Add the Task to your hasura service.

If you are want to use multiple-instances/auto-scale, you will need to choose an ALB as the load balancer.

## Local Dev

1. Git clone this repo:

```
$ git clone git@github.com:telosdreamstack/telos-graphql-starter.git
$ cd telos-graphql-starter
$ # You are now in the project directory
```

2. Run Hasura using docker-compose [ref](https://github.com/hasura/graphql-engine/tree/master/install-manifests/docker-compose) :

```
In project directory:

$ cd local
$ docker-compose up -d
```

3. Start local development API server ( first make sure all dependencies are met for local API server):

```
In project directory:

$ # install dependencies for local API server for e.g. all remote schemas and event triggers
$ # cd remote-schemas/account-schema
$ # npm i

$ cd local
$ node localDevelopment.js
```

4. Apply migrations locally

```
In project directory;

$ cd hasura
$ hasura migrate apply
```

5. Start the console

```
In project directory:

$ cd hasura
$ hasura console
```

### Local Dev - Event Triggers

1. Create a new folder in `event-triggers` folder:

```
In project directory:

$ cd event-triggers
$ mkdir echo
```

2. Write your function in `echo/index.js`. Make sure you export one function. Ref: [echo](event-triggers/echo/index.js)

3. Add corresponding endpoint in local development API server. Ref: [localDevelopment](local/localDevelopment.js)

4. Start the local development API server:

```
In project directory:

$ cd local
$ node localDevelopment.js
```

5. Add event trigger URL as environment variable in `local/event-triggers.env`. Ref: [event-triggers.env](local/event-triggers.env)

6. Restart Hasura (for refreshing environment variables):

```
In project directory:

$ cd local
$ docker-compose down
$ docker-compose up -d
```

7. Add event trigger through Hasura console using the above environment variable as `WEBHOOK_URL`.

### Local Dev - Remote Schemas

1. Create a new folder in `remote-schemas` folder:

```
In project directory:

$ cd remote-schemas
$ mkdir hello-schema
```

2. Write your graphql functions in `hello-schema/index.js`. Make sure you export the typedefs and resolvers. Ref: [hello](remote-schemas/hello-schema/index.js)

3. Add corresponding server setup in local development API server. Ref: [localDevelopment](local/localDevelopment.js)

4. Start the local development API server:

```
In project directory:

$ cd local
$ node localDevelopment.js
```

5. Add remote schema URL as environment variable in `local/remote-schemas.env`. Ref: [remote-schemas.env](local/remote-schemas.env)

6. Restart Hasura (for refreshing environment variables):

```
In project directory:

$ cd local
$ docker-compose down
$ docker-compose up -d
```

7. Add remote schema through Hasura console using the above environment variable as `GraphQL Server URL`.

## CI/CD with CircleCI

We want to keep 3 environments in the cloud:

1. Dev
2. Staging
3. Prod

The CI/CD system will deploy the application to each environment based on the branch on which the code is pushed: 

| _branch_ | _environment_ |
|----------|---------------|
| master   | dev           |
| staging  | staging       |
| prod     | prod          |

1. Start by creating a project in CircleCI.

2. Add your git repo in your CircleCI dashboard. This repo has all the CircleCI configuration in `.circleci/config.yml` file.

3. Create an API Gateway per environment (copy the `REST_API_ID`).

4. Create a Lambda Basic Execution Role (name it `lambda-basic-role`): [ref](https://docs.aws.amazon.com/lambda/latest/dg/lambda-intro-execution-role.html)

5. Configure environment variables in your CircleCI project from the dashboard. This example requires the following environment variables:

    _AWS_ACCOUNT_ID_

    _AWS_REGION_

    _AWS_ACCESS_KEY_ID_

    _AWS_SECRET_ACCESS_KEY_

    _AWS_DEV_REST_API_ID_

    _AWS_DEV_HASURA_ECS_CLUSTER_

    _AWS_DEV_TASK_FAMILY_

    _HASURA_DEV_ENDPOINT_

    _HASURA_DEV_ACCESS_KEY_

    _AWS_STG_REST_API_ID_

    _AWS_STG_HASURA_ECS_CLUSTER_

    _AWS_STG_TASK_FAMILY_

    _HASURA_STG_ENDPOINT_

    _HASURA_STG_ACCESS_KEY_

    _AWS_PROD_REST_API_ID_

    _AWS_PROD_HASURA_ECS_CLUSTER_

    _AWS_PROD_TASK_FAMILY_

    _HASURA_PROD_ENDPOINT_

    _HASURA_PROD_ACCESS_KEY_

6. Git push or merge PR to master branch. This will deploy to dev environment.

7. Once you have tested the dev environment, you can promote to staging and prod environments by merging dev with staging and staging with prod respectively.

## TELOS DreamStack

This repository is part of the TELOS DreamStack Project which provides set of guidelines, tools and starters to speed up dApp development following best practices for security, performance and maintainability of your application.

The code style convention aims to maximize reusability and facilitate collaboration. We have chosen the stack carefully so that it allows us to write robust and performant applications with more concise and readable code.

## Contributing

Read the [contributing guidelines](https://developers.blockmatic.io) for details.

## Blockmatic

Blockmatic is building robust ecosystem of people and tools for development of decentralized applications.

[blockmatic.io](https://blockmatic.io)

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

<!-- display the social media buttons in your README -->

[![Blockmatic Twitter][1.1]][1]
[![Blockmatic Facebook][2.1]][2]
[![Blockmatic Github][3.1]][3]

<!-- links to social media icons -->
<!-- no need to change these -->

<!-- icons with padding -->

[1.1]: http://i.imgur.com/tXSoThF.png (twitter icon with padding)
[2.1]: http://i.imgur.com/P3YfQoD.png (facebook icon with padding)
[3.1]: http://i.imgur.com/0o48UoR.png (github icon with padding)

<!-- icons without padding -->

[1.2]: http://i.imgur.com/wWzX9uB.png (twitter icon without padding)
[2.2]: http://i.imgur.com/fep1WsG.png (facebook icon without padding)
[3.2]: http://i.imgur.com/9I6NRUm.png (github icon without padding)


<!-- links to your social media accounts -->
<!-- update these accordingly -->

[1]: http://www.twitter.com/blockmatic_io
[2]: http://fb.me/blockmatic.io
[3]: http://www.github.com/blockmatic

<!-- Please don't remove this: Grab your social icons from https://github.com/carlsednaoui/gitsocial -->

