import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/common/header/header';
import NotFound from './components/notfound/notfound';
import Search from './components/search/search';
import Login from './components/login/login';
import Footer from './components/common/footer/footer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import oauthRequired from './router/guards/oauthRequired';
import Loader from 'react-loader-spinner';
import { usePromiseTracker } from 'react-promise-tracker';

const rootElement = document.getElementById('root')
const store = createStore(rootReducer);
const GLOBAL_GUARDS = [oauthRequired];

const LoadingIndicator = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { promiseInProgress } = usePromiseTracker();
    return promiseInProgress &&
        <Loader type="TailSpin" color="#0366d6" />
};

const routing = (
    <Router>
        <Provider store={store}>
            <div className="container">
                <Header />
                <GuardProvider guards={GLOBAL_GUARDS}>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <GuardedRoute path="/search" component={Search} />
                        <Route component={NotFound} />
                    </Switch>
                </GuardProvider>
                <Footer />
            </div>
        </Provider>
        <LoadingIndicator />
    </Router>
);

ReactDOM.render(routing, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
