import React from 'react';

const Features = (props) => {
	console.log(props.logos);
	return (
		<>
			<div class='col'>
				<div class='card h-100 backcard'>
					<div class='card-body'>
						<h5 class='card-title text-center'> {props.title}</h5>
						<p class='card-text'>{props.text}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Features;
