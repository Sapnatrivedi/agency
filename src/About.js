import React from 'react';
import Consoultion from './Consoultion';
import Mainabout from './Mainabout';
import Aboutimageoverlay from './Aboutimageoverlay';
import Counter from './Counter';
import Ourbestservices from './Ourbestservices';
import Slidercalling from './Slidercalling';

function About() {
	return (
		<>
			<Mainabout head='About Us' bread='Home' bread1='About' />
			<Consoultion />
			<Aboutimageoverlay />
			<Counter />
			<Ourbestservices heading1='Our Client Says' />
			<Slidercalling />
		</>
	);
}

export default About;
