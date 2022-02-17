import React from 'react';
import Features from './Features';
import Card4 from './Card4';
import Success from './Success';
const Featurecall = () => {
	return (
		<div>
			<div className='container consoul'>
				<div className='row'>
					<div className='col-12 col-md-6 col-lg-6'>
						<h2>Our Main Features</h2>
						<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
						<div class='row row-cols-1 row-cols-md-2 g-4'>
							{Card4.map((val) => {
								return <Features logos={val.logos} title={val.title} text={val.text} />;
							})}
						</div>
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

export default Featurecall;
