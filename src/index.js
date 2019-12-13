import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';
import Loader from 'react-loader-spinner';
import Login from './components/login/login';
import Search from './components/search/search';
import * as serviceWorker from './serviceWorker';
import NotFound from './components/notfound/notfound';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import oauthRequired from './router/guards/oauthRequired';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { usePromiseTracker } from 'react-promise-tracker';
import { GuardedRoute, GuardProvider } from 'react-router-guards';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const rootElement = document.getElementById('root')
const store = createStore(rootReducer);
const GLOBAL_GUARDS = [oauthRequired];

const LoadingIndicator = props => {
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
serviceWorker.unregister();
