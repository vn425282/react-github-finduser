import React from 'react';
import './userinfo.scss';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import gitService from '../../service/github.service';

function UserInfo (props) {
    const getUserProfile = gql`
        query {
          user(login:"${props.name}") {
            name
            avatarUrl
            login
            location
            createdAt
        }
      }
    `;
    return (
        <>
            <Query query={getUserProfile} notifyOnNetworkStatusChange={true}>
                {({ data, loading, error }) => {
                    if (!error && !loading && data) {
                        return (
                            <div className="col-lg-3 container-lg px-md-2 mt-lg-4 clearfix">
                                <div className="infomation">
                                    <img className="img-circle" src={data.user.avatarUrl} alt="avatar" width="140" height="140" />
                                    <h2>{data.user.name}</h2>
                                    <h4>{data.user.login}</h4>
                                    <p></p>
                                    <p>Location: {data.user.location}</p>
                                    <p>User since: {gitService.convertDate(data.user.createdAt)}</p>
                                </div>
                            </div>
                        );
                    } else {
                        return <></>
                    }
                }}
            </Query>
        </>
    );
}

export default UserInfo;
