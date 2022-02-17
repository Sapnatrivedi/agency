import React from 'react';
import './coursel.css';
import Circle from './Circle';
const Crousel = () => {
	return (
		<div>
			<div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1'></button>
					<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2'></button>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active slider'>
						<img src='	https://preview.colorlib.com/theme/consolution/images/xbg_1.jpg.pagespeed.ic.5oghFim3tP.webp' className='d-block w-100' alt='...' />
						<div className='carousel-caption d-none d-md-block'>
							<h5>
								We are the best
								<br /> consultant agency
							</h5>
							<p>Some representative placeholder content for the first slide.</p>
							<Circle btn='Our Service' />
						</div>
					</div>
					<div className='carousel-item slider'>
						<img src='	https://preview.colorlib.com/theme/consolution/images/xbg_2.jpg.pagespeed.ic.2-0KRBcaUW.webp' className='d-block w-100' alt='...' />
						<div className='carousel-caption d-none d-md-block'>
							<h5>
								We help to Grow
								<br />
								your Business
							</h5>
							<p>Some representative placeholder content for the second slide.</p>
							<Circle btn='Our Service' />
						</div>
					</div>
				</div>
				<button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button className='carousel-control-next' type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	);
};

export default Crousel;
