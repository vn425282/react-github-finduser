import React, { useEffect } from 'react';
import queryString from 'query-string';
import gitHubService from '../../service/github.service';
import cryptoService from '../../service/crypto.service';
import { useDispatch } from "react-redux";
import { addToken } from '../../actions/github.action';
import { STORAGE_KEYS } from '../../service/sessionStorage.service';
import { trackPromise } from 'react-promise-tracker';
import './login.scss';

function Login (props) {
  // mapDispatchToProps
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.removeItem(STORAGE_KEYS.TOKEN_LOGGED_IN);
    const { code } = queryString.parse(props.location.search);
    if (code) {
      trackPromise(
        gitHubService
          .exchangeCodeToToken({
            code: code
          })
          .then(res => {
            console.log(res);
            // oAuth okay
            if (res.data.token) {
              dispatch(
                addToken(res.data.token)
              );
              const hash = cryptoService.encrypt(res.data.token);
              sessionStorage.setItem(STORAGE_KEYS.TOKEN_LOGGED_IN, hash);
              props.history.push('/search');
            }
          })
      );
    }
  });

  return (
    <>
      <div className="login">
        <h1 className="login_title">Login Page</h1>
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <h4 className="card-title">GitHub Oauth API Login</h4>
                  <form method="POST" className="my-login-validation">
                    <div className="form-group m-0">
                      <a className="btn btn-secondary btn-block"
                        href={`https://github.com/login/oauth/authorize?client_id=${gitHubService.getClientID()}&scope=user&redirect_uri=${gitHubService.getRedirectURL()}`}
                      >GitHub Login</a>
                    </div>
                    <div className="mt-4 text-center">
                      Don't have an account? <a href="https://github.com/join?return_to=%2Fsearch%3Fq%3Dreact&source=login" target="_blank" rel="noopener noreferrer">Create an account.</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
