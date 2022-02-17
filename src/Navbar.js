import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import './navbar.css';
import Crousel from './Crousel';
function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
				<div className='container'>
					<NavLink className='navbar-brand d-lg-none' to='#'>
						Menu
					</NavLink>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							<li className='nav-item'>
								<NavLink className='nav-link active' aria-current='page' to='/Home'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' exact to='/About'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/Project'>
									Projects
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link' to='/Services'>
									Service
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink className='nav-link ' to='/Blog'>
									Blog
								</NavLink>
							</li>

							<li className='nav-item'>
								<NavLink className='nav-link' to='/Contact'>
									Contact
								</NavLink>
							</li>
						</ul>
						<form className='d-flex'>
							<input className='form-control search me-2' type='search' placeholder='Search' aria-label='Search' />
						</form>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
