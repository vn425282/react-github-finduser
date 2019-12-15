import baseService from './base.service';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import cryptoService from './crypto.service';

const configDefault = {
    clientID: '8a91cd834c4ea7e246cd',
    redirectURL: 'http://localhost:3000/',
    herokuappAuthURL: 'https://react-github-finduser.herokuapp.com/authenticate',
    gitGraphqlURL: 'https://api.github.com/graphql'
};

class GitHubService {
    exchangeCodeToToken(params = {}) {
        return baseService.getGitOauth(configDefault.herokuappAuthURL, params);
    }

    getClientID() {
        return configDefault.clientID;
    }

    getRedirectURL() {
        return configDefault.redirectURL;
    }

    getToken(token) {
        return cryptoService.decrypt(token);
    }

    getClient(token) {
        const httpLink = new HttpLink({
            uri: configDefault.gitGraphqlURL,
            headers: {
                Authorization: `bearer ${token}`,
            },
        });

        const errorLink = onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL report]: Message: ${message}`,
                    ),
                );
            }

            if (networkError) {
                console.log(`[Network report]: ${networkError}`);
            }
        });

        const link = ApolloLink.from([errorLink, httpLink]);
        const cache = new InMemoryCache();
        const client = new ApolloClient({
            link,
            cache,
        });

        return client;
    }

    convertDate(date) {
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        let d = new Date(date)
        return [d.getDay() === 0 ? 1 :  d.getDay() + 1, monthNames[d.getMonth()], d.getFullYear()].join(' ')
    }
}

export default new GitHubService();