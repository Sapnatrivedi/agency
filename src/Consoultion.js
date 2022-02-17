import React from 'react';
import Success from './Success';
import Welcome from './Welcome';
import './App.css';
const Consoultion = () => {
	return (
		<div>
			<div className='container'>
				<div className='row consoul'>
					<div className='col-12 col-md-6 col-lg-6'>
						<Welcome />
					</div>
					<div className='col-12 col-md-6 col-lg-6'>
						<div className='boundry p-4 m-4'>
							<Success />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Consoultion;
