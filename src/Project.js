import React from 'react';
import Mainabout from './Mainabout';
import Cards from './Cards';
import Imageapi from './Imageapi';

const Project = () => {
	return (
		<>
			<Mainabout head='project' bread='Home' bread1='project' />
			<div className='container consoul'>
				<div className='row row-cols-1 row-cols-md-3 g-3 '>
					{Imageapi.map((val) => {
						return <Cards img={val.img} />;
					})}
				</div>
			</div>
		</>
	);
};

export default Project;
