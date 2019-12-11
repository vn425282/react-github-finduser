import baseService from './base.service';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';

const configDefault = {
    clientID: '8a91cd834c4ea7e246cd',
    redirectURL: 'http://localhost:3000/',
    herokuappAuthURL: 'https://react-github-finduser.herokuapp.com/authenticate',
    gitGraphqlURL: 'https://api.github.com/graphql'
};

class GitHubService {
    exchangeCodeToToken(params = {}){
        return baseService.getGitOauth(configDefault.herokuappAuthURL, params);
    }

    getClientID(){
        return configDefault.clientID;
    }

    getRedirectURL(){
        return configDefault.redirectURL;
    }

    getClient(token){
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
                  `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                ),
              );
            }

            if (networkError) {
              console.log(`[Network error]: ${networkError}`);
            }
        });
    }
}

export default new GitHubService();