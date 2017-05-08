import React from 'react';
import Header from 'components/Header';

function AppLayoutComponent(props) {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	)
}

export default AppLayoutComponent;