import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
const Footer = () => {
	return (
		<div>
			<>
				<div className='footer foot mt-5'>
					<div className='container'>
						<div className='row foot-pad'>
							<div className='col-lg-3 col-md-6 col-12'>
								<h6>Have a Questions?</h6>
								<ul className='list-unstyled'>
									<div>
										<NavLink to=''>
											<li>
												<span>203 Fake St. Mountain View, San Francisco, California, USA</span>
											</li>
										</NavLink>
										<NavLink to=''>
											<li>
												<span>+2 392 3929 210</span>
											</li>
										</NavLink>
										<NavLink to=''>
											<li>
												<span>info@yourdomain.com</span>
											</li>
										</NavLink>
									</div>
								</ul>
							</div>
							<div className='col-lg-3 col-md-6 col-12'>
								<h6>Recent Blog</h6>
								<ul className='list-unstyled'>
									{' '}
									<li>
										<div className='d-flex'>
											<span>
												<img src='	https://preview.colorlib.com/theme/consolution/images/ximage_1.jpg.pagespeed.ic.K--6tMW6Tl.webp' alt='' height='60px' />
											</span>
											<div>
												<span>Even the all-powerful Pointing has no control about</span>
											</div>
										</div>
									</li>
									<li>
										<div className='d-flex'>
											<span>
												<img src='	https://preview.colorlib.com/theme/consolution/images/ximage_1.jpg.pagespeed.ic.K--6tMW6Tl.webp' alt='' height='60px' />
											</span>
											<div>
												<span>Even the all-powerful Pointing has no control about</span>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='col-lg-3 col-md-6 col-12'>
								<h6>Links</h6>
								<ul className='list-unstyled'>
									<NavLink to='/Home'>
										<li>
											<span>Home</span>
										</li>
									</NavLink>
									<NavLink to='/About'>
										<li>
											<span>About us</span>
										</li>
									</NavLink>
									<NavLink to='/Project'>
										<li>
											<span>Project</span>
										</li>
									</NavLink>
									<NavLink to='/Services'>
										<li>
											<span>Services</span>
										</li>
									</NavLink>
									<NavLink to='/Blog'>
										{' '}
										<li>
											<span>Blogs</span>
										</li>
									</NavLink>
								</ul>
							</div>
							<div className='col-lg-3 col-md-6 col-12'>
								<h6>Subscribe Us!</h6>
								<ul className='list-unstyled'>
									<form action='' className='subscribe-form'>
										<li>
											<input type='text' className='form-control mb-2 text-center' placeholder='Enter email address' />
										</li>
										<li>
											<input type='submit' value='Submit' className='form-control mb-2 text-center  submit' />
										</li>
									</form>
								</ul>
								<div className='mt-5'>
									<h4>Connect With Us</h4>
								</div>
								<div className='d-flex justify-content-between'>
									<div className='social'>
										<span>
											<i className='fab fa-twitter'></i>
										</span>
									</div>
									<div className='social'>
										<span>
											<i className='fab fa-facebook'></i>
										</span>
									</div>
									<div className='social'>
										<span>
											<i className='fab fa-instagram'></i>
										</span>
									</div>
								</div>
							</div>
							<h6 className='text-center mt-5'>Copyright ©2021 All rights reserved | This template is made with by Colorlib</h6>
						</div>
					</div>
				</div>
			</>
		</div>
	);
};

export default Footer;
