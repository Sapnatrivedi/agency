import React from 'react';
import Contactform from './Contactform';
import Mainabout from './Mainabout';

function Contact() {
	return (
		<>
			<Mainabout head='Contact' bread='Home' bread1='Contact' />
			<Contactform />
		</>
	);
}

export default Contact;
