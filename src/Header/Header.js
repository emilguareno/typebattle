import { connect } from 'react-redux';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
import Nav from './Nav';

function mapStateToProps({firebase}) {
    return {
        auth: pathToJS(firebase, 'auth')
    };
}

const fbWrapper = firebaseConnect()(Nav);

const Header = connect(mapStateToProps)(fbWrapper);

export default Header;
