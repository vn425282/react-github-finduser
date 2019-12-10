import baseService from './base.service';

const configDefault = {
    clientID: '8a91cd834c4ea7e246cd',
    redirectURL: 'http://localhost:3000/',
    herokuappAuthURL: 'https://react-github-finduser.herokuapp.com/authenticate'
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
}

export default new GitHubService();