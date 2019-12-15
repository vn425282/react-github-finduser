import React, { useState } from 'react';
import gql from 'graphql-tag';
import './listRepositories.scss';
import { Query } from 'react-apollo';
import Loader from 'react-loader-spinner';
import ErrorMessage from '../common/error/error';
import gitService from '../../service/github.service';
import FetchMore from '../common/fetchmore/fetchmore';
import ReadMeDiaLog from '../common/dialog/readme/readme';
import { useDispatch } from "react-redux";
import { addReadme } from '../../actions/readme.action';

const getUpdateQuery = entry => (
  previousResult,
  { fetchMoreResult },
) => {
  if (!fetchMoreResult) {
    return previousResult;
  }
  return {
    ...previousResult,
    [entry]: {
      ...previousResult[entry],
      repositories: {
        ...previousResult[entry].repositories,
        ...fetchMoreResult[entry].repositories,
        edges: [
          ...previousResult[entry].repositories.edges,
          ...fetchMoreResult[entry].repositories.edges,
        ],
      },
    },
  };
};

function ListRepositories(props) {
  // mapDispatchToProps
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const getRepoByUser = gql`
        query($cursor: String) {
            repositoryOwner(login: "${props.name}") {
                repositories(first: 5, orderBy: {direction: DESC, field: CREATED_AT}, after: $cursor) {
                    totalCount
                    edges {
                        node {
                            id,
                            name,
                            url,
                            description,
                            primaryLanguage {
                                name
                            },
                            updatedAt,
                            object(expression: "master:README.md") {
                                ... on Blob {
                                  text
                                }
                            }
                        }
                    }
                    pageInfo {
                        endCursor
                        hasNextPage
                    }
                }
            }
        }
    `;

  function handleClickOpen(content) {
    dispatch(
      addReadme(content)
    );
    setIsOpen(true);
  }

  function handleDialogClose() {
    setIsOpen(false);
  }

  return (
    <>
      <Query query={getRepoByUser} notifyOnNetworkStatusChange={true}>
        {({ data, loading, error, fetchMore }) => {
          if (loading && !data) {
            return <Loader type="TailSpin" color="#0366d6" />;;
          }

          if (error) {
            return <ErrorMessage error={error} />;
          }

          if (data.repositoryOwner) {
            return (
              <>
                <div className="d-flex flex-column flex-md-row flex-justify-between border-bottom pb-3 position-relative">
                  <h3>
                    {data.repositoryOwner.repositories.totalCount} public repositories result
                  </h3>
                </div>
                <ul className="repo-list">
                  {data.repositoryOwner.repositories.edges.map(({ node }, i) => (
                    <li className="repo-list-item hx_hit-repo d-flex flex-justify-start py-4 public source" key={i}>
                      <div className="flex-shrink-0 mr-2">
                        <svg height="16" className="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" aria-hidden="true">
                          <path d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z" /></svg>
                      </div>
                      <div className="mt-n1">
                        <div className="f4 text-normal">
                          <p className={"v-align-middle " + (node.object != null ? 'active' : 'unactive')} onClick={() => handleClickOpen(node.object.text)}>{node.name}</p>
                        </div>
                        <p className="mb-1">
                          {node.description}
                        </p>
                        <div>
                          <div className="topic-tag topic-tag-link f6 px-2">
                            {node.primaryLanguage ? node.primaryLanguage.name : ''}
                          </div>
                          <div className="d-flex flex-wrap text-small text-gray">
                            <div className="mr-3">
                              Updated at: {gitService.convertDate(node.updatedAt)}
                            </div>
                          </div>
                          <div className="d-flex flex-wrap text-small text-gray">
                            <div className="mr-3">
                              <span>
                                <span> <span className={node.object ? 'repo-language-color-active' : 'repo-language-color'}></span> README.md {node.object ? 'is' : 'is not'} available</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <FetchMore
                  hasNextPage={data.repositoryOwner.repositories.pageInfo.hasNextPage}
                  variables={{
                    cursor: data.repositoryOwner.repositories.pageInfo.endCursor,
                  }}
                  updateQuery={getUpdateQuery('repositoryOwner')}
                  fetchMore={fetchMore}
                />
              </>
            );
          }
          return <></>
        }}
      </Query>
      <ReadMeDiaLog isOpen={isOpen} handleDialogClose={handleDialogClose} />
    </>
  );
}

export default ListRepositories;
