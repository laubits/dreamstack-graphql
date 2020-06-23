<p align="center">
	</a>
	<a href="https://git.io/col">
		<img src="https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg" alt="Collaborative Etiquette">
	</a>
  <a href="https://developers.blockmatic.io">
		<img src="https://img.shields.io/badge/code%20style-blockmatic-brightgreen.svg" alt="Blockmatic Standard">
	</a>
	<a href="https://twitter.com/intent/follow?screen_name=telosdreamstack">
		<img src="https://img.shields.io/twitter/follow/telosdreamstack.svg?style=social&logo=twitter" alt="Follow on Twitter" />
	</a>
	<a href="https://t.me/telosdreamstack">
		<img src="https://img.shields.io/badge/-Chat%20on%20Telegram-blue?style=social&logo=telegram" alt="Chat on Telegram">
	</a>
</p>

# DreamStack GraphQL Engine

A realtime GraphQL framework for EOSIO dApps.

## Features

- Explorable data graph.
- Realtime GraphQL subscription to blockchain state.
- Realtime GraphQL subscription to blockchain actions.
- Powerful querying, sorting and filtering.
- Microfork handling on the backend, subscribe to state not to deltas.
- Supports ad-hoc external graph stitching.
- Supports ad-hoc offchain graphql resolvers.

## TELOS

Best in class C++ EOSIO protocol technology providing fast, scalable and eco-freindly blockchain augmented by a growing library of Telos services and innovations. Free accounts, work proposals, dapp grants, decentralized exchange, dstor, bancor protocol, telos community and foundation.

[Learn more](https://docs.telosdreamstack.io/smart-contracts/telos-blockchain)

## Architecture

<center>
  <img src='docs/DreamStack-Backend.svg' style='max-width:600px'/>
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

## Docker Compose Environment

This is easiest way to deploy the DreamStack GraphQL engine. 

See [compose/README.md](./compose/README.md) for more detail.

## Telos DreamStack

This repository is part of the TELOS DreamStack Project which provides a set of guidelines, tools and starters to speed up dApp development following best practices for security, performance and maintainability. The project is maintained by [blockmatic.io](https://blockmatic.io) and it's sponsored by the TELOS token holders through the [Telos Works -Telos Worker Proposal System](https://medium.com/telos-foundation/telos-user-guide-understanding-worker-proposals-ef5df8ee2a17)

Learn more https://telosdreamstack.io

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://gaboesquivel.com"><img src="https://avatars0.githubusercontent.com/u/391270?v=4" width="100px;" alt="Gabo Esquivel"/><br /><sub><b>Gabo Esquivel</b></sub></a><br /><a href="#ideas-gaboesquivel" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/telosdreamstack/dreamstack-react/commits?author=gaboesquivel" title="Code">💻</a> <a href="#review-gaboesquivel" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://rfreites.now.sh/"><img src="https://avatars1.githubusercontent.com/u/16639855?v=4" width="100px;" alt="Ronny"/><br /><sub><b>Ronny</b></sub></a><br /><a href="#ideas-rfreites" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/telosdreamstack/dreamstack-react/commits?author=rfreites" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/JeffBriCR"><img src="https://avatars2.githubusercontent.com/u/1731975?v=4" width="100px;" alt="Jeffrey Briceño"/><br /><sub><b>Jeffrey Briceño</b></sub></a><br /><a href="#ideas-JeffBriCR" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/telosdreamstack/dreamstack-react/commits?author=JeffBriCR" title="Code">💻</a> <a href="#review-JeffBriCR" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Contributing

[Contributing Guide](./CONTRIBUTING.md)

[Code of Conduct](./CONTRIBUTING.md#conduct)

## Important

See [LICENSE](./LICENSE) for copyright and license terms.

All repositories and other materials are provided subject to the terms of this [IMPORTANT](./IMPORTANT.md) notice and you must familiarize yourself with its terms. The notice contains important information, limitations and restrictions relating to our software, publications, trademarks, third-party resources, and forward-looking statements. By accessing any of our repositories and other materials, you accept and agree to the terms of the notice.

## Disclaimer

This is a work in progress. Join the telegram channel for more information.  
https://t.me/telosdreamstack

## Blockmatic

Blockmatic is building a robust ecosystem of people and tools for the development of blockchain applications.

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

