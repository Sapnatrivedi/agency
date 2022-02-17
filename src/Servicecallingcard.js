import React from 'react';
import Servicecard from './Servicecard';
import Service_json from './Service_json';

const Servicecallingcard = () => {
	return (
		<div>
			<div className='container pt-5 pb-5'>
				<div class='row row-cols-1 row-cols-lg-3'>
					{Service_json.map((val) => {
						return <Servicecard tatoo={val.tatoo} heading={val.heading} des={val.des} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Servicecallingcard;
