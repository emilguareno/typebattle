import React from 'react';
import Header from 'components/Header';

const AppLayoutComponent = (props) => (
	<div>
		<Header />
		{props.children}
	</div>
);

export default AppLayoutComponent;