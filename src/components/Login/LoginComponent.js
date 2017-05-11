import React from 'react'
import { Grid, Segment, Button, Header, Icon } from 'semantic-ui-react';
import './Login.css';

const LoginComponent = ({
	loginWithFacebook,
	loginWithGoogle,
	loginWithTwitter,
	loginWithGithub
}) => (
	<Grid centered verticalAlign="middle">
		<Grid.Column textAlign="center">
			<Header as='h2'>
				Log-in to your account
			</Header>
			<Segment stacked>
				<Button 
					onClick={loginWithFacebook}
					className='loginButton' 
					fluid 
					size='big' 
					color='facebook'
				>
					<Icon name='facebook' /> Sign-in with Facebook
				</Button>
				<Button 
					onClick={loginWithGoogle}
					className='loginButton' 
					fluid 
					size='big' 
					color='google plus'
				>
					<Icon name='google' /> Sign-in with Google
				</Button>
				<Button 
					onClick={loginWithTwitter}
					className='loginButton' 
					fluid 
					size='big' 
					color='twitter'
				>
					<Icon name='twitter' /> Sign-in with Twitter
				</Button>
				<Button
					onClick={loginWithGithub}
					className='loginButton' 
					fluid 
					size='big'
				>
					<Icon name='github' /> Sign-in with Github
				</Button>
			</Segment>
		</Grid.Column>
	</Grid>
);

export default LoginComponent;