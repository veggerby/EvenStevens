import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({ uri: '/graphql' }),
  cache: new InMemoryCache(),
});

export default client;
