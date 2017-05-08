import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';
import AppContainer from './containers/App/AppContainer';
import AppLayout from './components/AppLayout';
import Login from './components/Login';
import BattleContainer from './containers/Battle/BattleContainer';


class RootComponents extends Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                    <Route exact path="/" component={UserIsAuthenticated(AppContainer)}/>
                    <Route path="/battles/:id" component={UserIsAuthenticated(BattleContainer)}/>
                <AppLayout>
                    <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
                </AppLayout>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;