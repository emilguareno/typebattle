import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderComponent = () => (
	<Dimmer active inverted>
		<Loader />
	</Dimmer>
);

export default LoaderComponent;