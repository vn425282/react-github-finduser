import React, { useState } from 'react';
import './search.scss';
import TextField from '@material-ui/core/TextField';
import UserInfo from '../userinfo/userinfo';
import ListRepositories from '../list-repositories/listRepositories';
import { ApolloProvider } from 'react-apollo';
import gitService from '../../service/github.service';
import { STORAGE_KEYS } from '../../service/sessionStorage.service';

function Search() {
    const [query, setQuery] = useState('');
    const inputProps = {
        maxLength: 39,
        pattern: '[a-zA-Z0-9-]+'
    };

    function handleSubmit(event) {
        event.preventDefault();
        setQuery(event.target.searchInput.value);
    }

    return (
        <div className="search">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    error
                    placeholder="Search User Repo!"
                    className="search_input"
                    inputProps={inputProps}
                    name="searchInput"
                />

                <ApolloProvider client={gitService.getClient(gitService.getToken(sessionStorage.getItem(STORAGE_KEYS.TOKEN_LOGGED_IN)))}>
                    <div className="row">
                        <UserInfo name={query}></UserInfo>
                        <div className="col-lg-8">
                            <div className="application-main" data-commit-hovercards-enabled>
                                <main id="js-pjax-container" data-pjax-container>
                                    <div className="container-lg px-md-2 mt-lg-4 clearfix">
                                        <div className=" float-left px-2 pt-3 pt-md-0 codesearch-results">
                                            <div className="px-2">
                                                <ListRepositories name={query} />
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </div>
                </ApolloProvider>
                
            </form>
        </div>
    );
}

export default Search;
