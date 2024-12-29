import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import endpoints from '../config/endpoints'

const httpLink = createHttpLink({
    uri: endpoints.graphqlEndpoint
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('access_token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
})