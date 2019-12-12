import React from 'react';
import './search.scss';
import TextField from '@material-ui/core/TextField';
import UserInfo from '../userinfo/userinfo';
import ListRepositories from '../listrepositories/listRepositories';
import { ApolloProvider } from 'react-apollo';
import gitService from '../../service/github.service';
import { STORAGE_KEYS } from '../../service/sessionStorage.service';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            finalQuery: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange (event) {
        event.preventDefault();
        this.setState({ query: event.target.value });
    }

    render () {
        return (
            <ApolloProvider client={gitService.getClient(gitService.getToken(sessionStorage.getItem(STORAGE_KEYS.TOKEN_LOGGED_IN)))}>
                <div className="search">
                    <TextField
                        value={this.state.query}
                        onChange={this.handleChange}
                        placeholder="Search User Repo!"
                        className="search_input"
                    />
                    <div className="row">
                        <UserInfo name={this.state.query}></UserInfo>
                        <div className="col-lg-8">
                            <div className="application-main" data-commit-hovercards-enabled>
                                <main id="js-pjax-container" data-pjax-container>
                                    <div className="container-lg px-md-2 mt-lg-4 clearfix">
                                        <div className=" float-left px-2 pt-3 pt-md-0 codesearch-results">
                                            <div className="px-2">
                                                <ListRepositories name={this.state.query} />
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </div>
            </ApolloProvider>
        );
    }
}

export default Search;
