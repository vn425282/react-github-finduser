import React from 'react';
import './login.scss';

class Login extends React.Component {
  render () {
    return (
      <>
        <div className="login">
          <h1 className="login_title">Login Page</h1>
          <div className="container h-100">
            <div className="row justify-content-md-center h-100">
              <div className="card-wrapper">
                <div className="card fat">
                  <div className="card-body">
                    <h4 className="card-title">Please input your GitHub Account</h4>
                    <form method="POST" className="my-login-validation">
                      <div className="form-group">
                        <label>E-Mail Address</label>
                        <input id="email" type="email" className="form-control" name="email" value="" required></input>
                        <div className="invalid-feedback">
                          Email is invalid
									        </div>
                      </div>
                      <div className="form-group">
                        <label>Password
                          <a href="https://github.com/password_reset" className="float-right" target="_blank" rel="noopener noreferrer">
                            Forgot Password?
										      </a>
                        </label>
                        <input id="password" type="password" className="form-control" name="password" required data-eye></input>
                        <div className="invalid-feedback">
                          Password is required
							    	    </div>
                      </div>
                      <div className="form-group">
                        <div className="custom-checkbox custom-control">
                          <input type="checkbox" name="remember" id="remember" className="custom-control-input"></input>
                          <label className="custom-control-label">Remember Me</label>
                        </div>
                      </div>
                      <div className="form-group m-0">
                        <button type="submit" className="btn btn-primary btn-block">
                          Login
									      </button>
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
    )
  }
}

export default Login;
