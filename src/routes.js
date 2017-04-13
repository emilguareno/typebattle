import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';
import App from './containers/App/App';
import Header from './containers/Header/Header';

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
                    <Route exact path="/" component={UserIsAuthenticated(App)}/>
                    <Route path="/login" component={UserIsNotAuthenticated(Login)}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;