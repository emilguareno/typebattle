import React from 'react';
import App from './App/App';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

const history = createHistory();

const TestComponent = () => {
    return(
        <div>Test Component</div>
    );
}

export default () => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/test" component={TestComponent}/>
            </div>
        </ConnectedRouter>
    )
};