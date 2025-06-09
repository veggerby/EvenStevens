import { ApolloServer } from 'apollo-server';
import typeDefs from './schema.graphql';
import { resolvers } from './resolvers/parityResolver';

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 API ready at ${url}`);
});
