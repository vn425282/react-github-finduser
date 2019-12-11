import React from 'react';
import './search.scss';
import TextField from '@material-ui/core/TextField';
import UserInfo from '../userinfo/userinfo';
import ListRepositories from '../listrepositories/listRepositories';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      images: [],
      limit: 8,
      offset: 0,
      loading: false
    };
  }

  handleChange (event) {
    console.log('g', event.target.value);
    this.setState({ query: event.target.value });
  }

  render () {
    return (
      <div className="search">
        <form noValidate autoComplete="off" onSubmit={this.reset}>
          <TextField
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search User Repo!"
            className="search_input"
          />
        </form>
        <div className="row">
          <UserInfo></UserInfo>
          <div className="col-lg-8">
            <div className="application-main" data-commit-hovercards-enabled>
              <main id="js-pjax-container" data-pjax-container>
                <div className="container-lg px-md-2 mt-lg-4 clearfix">
                  <div className=" float-left px-2 pt-3 pt-md-0 codesearch-results">
                    <div className="px-2">
                      <div className="d-flex flex-column flex-md-row flex-justify-between border-bottom pb-3 position-relative">
                        <h3>
                          1,110,370 repository results
                                </h3>
                      </div>
                      <ListRepositories />
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
