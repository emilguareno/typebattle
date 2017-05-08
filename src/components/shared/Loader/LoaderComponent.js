import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderComponent = () => (
	<Dimmer active>
		<Loader />
	</Dimmer>
);

export default LoaderComponent;