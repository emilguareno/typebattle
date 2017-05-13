import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';
import Home from './pages/Home';
import Battle from './pages/Battle';
import AppLayout from './components/AppLayout';
import Login from './components/Login';

const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} component={UserIsAuthenticated(component)}/>
);

class RootComponents extends Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <div>
                    <AppLayout>
                        <Switch>
                            <PrivateRoute exact path="/" component={Home}/>
                            <PrivateRoute path="/battles/:id" component={Battle}/>
                            <PrivateRoute path="/battles/:id/:round" component={Battle}/>
                        </Switch>
                    </AppLayout>
                    <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;