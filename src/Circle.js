import React from 'react';
import './coursel.css';
import { NavLink } from 'react-router-dom';
const Circle = (Props) => {
	return (
		<div>
			<button className='btn btn-primary px-4 py-3 mt-3'>{Props.btn}</button>
		</div>
	);
};

export default Circle;
