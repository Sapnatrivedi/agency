import React from 'react';
import './App.css';
const Cards = (props) => {
	console.log(props);
	return (
		<>
			<div className='col cardallow'>
				<div className='card  h-100'>
					<img src={props.img} className='card-img-top img4' alt='...' />
					<div class='overlay'>
						<div class='text'>
							<h4 className='text-center'>Branding & Illustration</h4>
							<h6 className='text-center'>Design</h6>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cards;
