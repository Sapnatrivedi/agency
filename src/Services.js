import React from 'react';

import Featurecall from './Featurecall';
import Mainabout from './Mainabout';
import Ourbestservices from './Ourbestservices';
import Servicecallingcard from './Servicecallingcard';
const Services = () => {
	return (
		<div>
			<Mainabout head='Services' bread='Home' bread1='Services' />
			<Featurecall />
			<Ourbestservices heading1='Our Best Services' />
			<Servicecallingcard />
		</div>
	);
};

export default Services;
