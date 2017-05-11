import { connect } from 'react-redux';
import { firebaseConnect, getFirebase } from 'react-redux-firebase';
import LoginComponent from './LoginComponent';

const mapDispatchToProps = () => {
	const firebase = getFirebase();
	return {
		loginWithFacebook: () => {
			firebase.login({
				provider: 'facebook',
				type: 'popup'
        	})
		},
		loginWithGoogle: () => {
			firebase.login({
				provider: 'google',
				type: 'popup'
        	})
		},
		loginWithTwitter: () => {
			firebase.login({
				provider: 'twitter',
				type: 'popup'
        	})
		},
		loginWithGithub: () => {
			firebase.login({
				provider: 'github',
				type: 'popup'
        	})
		}
	}
};

const fbWrapper = firebaseConnect()(LoginComponent);

export default connect(null, mapDispatchToProps)(fbWrapper);
