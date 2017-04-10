import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react'

class Nav extends Component {
  render() {
    return (
      <Menu size='large'>
        <Menu.Item name='home' />
        <Menu.Item name='battles' />

        <Menu.Menu position='right'>
          <Menu.Item>
            {!this.props.auth ? (
                <Button primary onClick={this.props.onSignInClicked}>Log In</Button>
            ) : (
                <div> 
                  <span>Hello {this.props.auth.displayName} </span>

                  <Button primary onClick={this.props.onSignOutClicked}>Log Out</Button>
                </div>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Nav;
