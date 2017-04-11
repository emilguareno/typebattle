import React, { Component } from 'react';
import App from './App/App';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

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
                    <Route exact path="/" component={App}/>
                    <Route path="/test" component={TestComponent}/>
                </div>
            </ConnectedRouter>
        )
    }
}

export default RootComponents;