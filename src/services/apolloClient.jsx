import { ApolloClient, InMemoryCache } from '@apollo/client'
import endpoints from '../config/endpoints'

export const client = new ApolloClient({
  uri: endpoints.graphqlEndpoint,
  cache: new InMemoryCache(),
})