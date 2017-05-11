import React from 'react';
import PropTypes from 'prop-types';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function onSignOutClicked(props){
    return () => (
        props.firebase.logout()
    );
}

const NavComponent = (props) => (
    <Menu size='large'>
      <Menu.Item name='home'>
          <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item name='battles' />

      <Menu.Menu position='right'>
        <Menu.Item>
          {props.auth && (
              <div> 
                <span>Hello {props.auth.displayName} </span>

                <Button primary onClick={onSignOutClicked(props)}>Log Out</Button>
              </div>
          )}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
);

NavComponent.propTypes = {
    auth: PropTypes.object,
    firebase: PropTypes.object.isRequired
};

export default NavComponent;
