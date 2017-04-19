import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';
import AppContainer from './containers/App/AppContainer';
import Header from './containers/Header/Header';
import Battle from './containers/Battle/Battle';

const Login = () => {
    return(
        <div>Please log in to battle</div>
    );
}

class RootComponents extends Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <div>
                    <Header />
                    <Route exact path="/" component={UserIsAuthenticated(AppContainer)}/>
                    <Route path="/battles/:id" component={UserIsAuthenticated(Battle)}/>
                    <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;