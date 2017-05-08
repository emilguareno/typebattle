import { connect } from 'react-redux';
import { firebaseConnect, pathToJS } from 'react-redux-firebase';
import Nav from 'components/Nav';

function mapStateToProps({firebase}) {
    return {
        auth: pathToJS(firebase, 'auth')
    };
}

const fbWrapper = firebaseConnect()(Nav);

export default connect(mapStateToProps)(fbWrapper);
