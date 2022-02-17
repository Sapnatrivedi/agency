import React from 'react';
import './App.css';
function Servicecard(props) {
	return (
		<div>
			{/* <div class='card h-100'>
					<div class='card-body'>
						
						<h5 class='card-title'>{props.heading}</h5>
						<p class='card-text'>{props.des}</p>
					</div>
				</div> */}
			<div className='col'>
				<div className='card service '>
					<div className='card-body'>
						<h5 className='card-title text-center'>{props.heading}</h5>
						<p className='card-text'>{props.des}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Servicecard;
