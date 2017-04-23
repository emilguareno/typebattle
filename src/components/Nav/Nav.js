import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { createUserIfNotInUsers } from '../../helpers/auth';

class Nav extends Component {
  onSignInClicked(){
      this.props.firebase.login({
          provider: 'google',
          type: 'popup'
      }).then((authData) => {
        createUserIfNotInUsers(authData.user);
      });
  }
  onSignOutClicked(){
      this.props.firebase.logout();
  }
  render() {
    return (
      <Menu size='large'>
        <Menu.Item name='home'>
            <Link to="/">Home</Link>
        </Menu.Item>
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

Nav.propTypes = {
    auth: PropTypes.object,
    firebase: PropTypes.object.isRequired
};

export default Nav;
