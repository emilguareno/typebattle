import React, { Component } from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import AppContainer from './App/AppContainer';
import Header from './Header/Header';

const TestComponent = () => {
    return(
        <div>Test Component</div>
    );
}

class RootComponents extends Component{
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <div>
                    <Header />
                    <Route exact path="/" component={AppContainer}/>
                    <Route path="/test" component={TestComponent}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;