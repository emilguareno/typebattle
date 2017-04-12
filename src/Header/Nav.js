import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react'

class Nav extends Component {
  onSignInClicked(){
      this.props.firebase.login({
          provider: 'google',
          type: 'popup'
      });
  }
  onSignOutClicked(){
      this.props.firebase.logout();
  }
  render() {
    return (
      <Menu size='large'>
        <Menu.Item name='home' />
        <Menu.Item name='battles' />

        <Menu.Menu position='right'>
          <Menu.Item>
            {!this.props.auth ? (
                <Button primary onClick={this.onSignInClicked.bind(this)}>Log In</Button>
            ) : (
                <div> 
                  <span>Hello {this.props.auth.displayName} </span>

                  <Button primary onClick={this.onSignOutClicked.bind(this)}>Log Out</Button>
                </div>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav;
