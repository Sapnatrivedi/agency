import React from 'react';
import Slidercard from './Slidercard';
import Sliderjson from './Sliderjson';

const Slidercalling = () => {
	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<div id='carouselExampleCaptions' className='carousel slide' data-bs-ride='carousel'>
							<div className='carousel-indicators About_carousel_position'>
								<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='0' className='active About_carousel' aria-current='true' aria-label='Slide 1'></button>
								<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='1' aria-label='Slide 2' className='About_carousel'></button>
								<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='2' aria-label='Slide 3' className='About_carousel'></button>
								<button type='button' data-bs-target='#carouselExampleCaptions' data-bs-slide-to='3' aria-label='Slide 4' className='About_carousel'></button>
							</div>
							<div className='carousel-inner'>
								<div className='carousel-item active'>
									<div className='row'>
										<div className='col-md-4'>
											<div className='card card_design'>
												<div className='card-body '>
													<div className='row'>
														<div className='col-md-4'>
															<img src='https://preview.colorlib.com/theme/consolution/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp' className='d-block w-100 round' alt='...' />
														</div>
														<div className='col-md-8'>
															<div className=' card-text'>
																<p>Far far away, behind the word mountains, far from the countries Vokalia and consonantia, there live the behind texts.</p>
															</div>
															<h5></h5>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-4'>
											<div className='card card_design'>
												<div className='card-body '>
													<div className='row'>
														<div className='col-md-4'>
															<img src='https://preview.colorlib.com/theme/consolution/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp' className='d-block w-100 round' alt='...' />
														</div>
														<div className='col-md-8'>
															<div className=' card-text'></div>
															<p>Far far away, behind the word mountains, far from the countries Vokalia and consonantia, there live the behind texts.</p>
															<h5></h5>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className='col-md-4'>
											<div className='card card_design'>
												<div className='card-body '>
													<div className='row'>
														<div className='col-md-4'>
															<img src='https://preview.colorlib.com/theme/consolution/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp' className='d-block w-100 round' alt='...' />
														</div>
														<div className='col-md-8'>
															<div className=' card-text'>
																<p>Far far away, behind the word mountains, far from the countries Vokalia and consonantia, there live the behind texts.</p>
															</div>
															<h5></h5>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{Sliderjson.map((val) => {
									return <Slidercard content={val.content} head1={val.head1} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Slidercalling;
