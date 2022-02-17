import react from 'react';
import reactDom from 'react-dom';
import './mainabout.css';
import { NavLink } from 'react-router-dom';

const Mainabout = (props) => {
	const sty = "--bs-breadcrumb-divider: '>';";
	return (
		<>
			<div className='imgdeco'>
				<div className='container'>
					<h2 className='text-center weight'>{props.head}</h2>
					<nav style={{ sty }} aria-label='breadcrumb'>
						<ol class='breadcrumb justify-content-center'>
							<li class='breadcrumb-item'>
								<NavLink to='/Home'>{props.bread}</NavLink>
							</li>
							<li class='breadcrumb-item active' aria-current='page'>
								<NavLink to='/About'>{props.bread1}</NavLink>
							</li>
						</ol>
					</nav>
				</div>
			</div>
		</>
	);
};

export default Mainabout;
