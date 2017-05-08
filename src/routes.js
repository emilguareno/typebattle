import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';
import AppContainer from './containers/App/AppContainer';
import AppLayout from './components/AppLayout';
import Login from './components/Login';
import BattleContainer from './containers/Battle/BattleContainer';

const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} component={UserIsAuthenticated(component)}/>
);

class RootComponents extends Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <AppLayout>
                    <PrivateRoute exact path="/" component={AppContainer}/>
                    <PrivateRoute path="/battles/:id" component={BattleContainer}/>
                    <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
                </AppLayout>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;