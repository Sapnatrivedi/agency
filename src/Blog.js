import React from 'react';
import Mainabout from './Mainabout';
import './mainabout.css';
import Sliderblog from './Sliderblog';

export const Blog = () => {
	return (
		<div>
			<Mainabout head='Blog' bread='Home' bread1='Blog' />
			<div className='container'>
				<div className='row'>
					<Sliderblog />
				</div>
			</div>
		</div>
	);
};
export default Blog;
