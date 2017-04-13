import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter, routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import { pathToJS } from 'react-redux-firebase';
import AppContainer from './App/AppContainer';
import Header from './Header/Header';

const Login = () => {
    return(
        <div>Please log in to battle</div>
    );
}

const UserIsAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsAuthenticated',
    authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
    authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') === true,
    predicate: auth => auth !== null,
    redirectAction: routerActions.replace
});

const UserIsNotAuthenticated = UserAuthWrapper({
    wrapperDisplayName: 'UserIsNotAuthenticated',
    allowRedirectBack: false,
    failureRedirectPath: '/',
    authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
    authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'isInitializing') === true,
    predicate: auth => auth === null,
    redirectAction: routerActions.replace
})

class RootComponents extends Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <div>
                    <Header />
                    <Route exact path="/" component={UserIsAuthenticated(AppContainer)}/>
                    <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;