import { connect } from 'react-redux';
import { auth, providers } from '../firebase';
import Nav from './Nav';

function mapStateToProps(state) {
  return {
    auth: state.user.auth
  };
}

function mapFirebaseToProps() {
    return {
        onSignInClicked: () =>{
            const provider = providers.google;
            auth.signInWithPopup(provider);
        },
        onSignOutClicked: () =>{
            auth.signOut();
        }
    }
}

const Header = connect(mapStateToProps, mapFirebaseToProps)(Nav);

export default Header;
