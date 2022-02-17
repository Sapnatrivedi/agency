import React from 'react';
import './mainabout.css';
const Counter = () => {
	return (
		<div>
			<div className='container counter'>
				<div className='row'>
					<div className='col-md-3'>
						<h1 className='borderbottom'>709</h1>
						<p className='text-uppercase'>Projects Completed</p>
					</div>
					<div className='col-md-3'>
						<h1 className='borderbottom'>809</h1>

						<p className='text-uppercase'>Satisfied Customer</p>
					</div>
					<div className='col-md-3'>
						<h1 className='borderbottom'>335</h1>
						<p className='text-uppercase'>Awwards recived</p>
					</div>
					<div className='col-md-3'>
						<h1 className='borderbottom'>35</h1>
						<p className='text-uppercase'>year of experienced</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Counter;
