import React from 'react';
import './App.css';
import Sliderjson from './Sliderjson';

const Slidercard = (props) => {
	return (
		<>
			<div className='carousel-item'>
				<div className='row'>
					<div className='col-md-4'>
						<div className='card card_design'>
							<div className='card-body '>
								<div className='row'>
									<div className='col-md-4'>
										<img src='https://preview.colorlib.com/theme/consolution/images/xperson_2.jpg.pagespeed.ic.Xrdu_nPZRp.webp' className='d-block w-100 round' alt='...' />
									</div>
									<div className='col-md-8'>
										<div className=' card-text'>{props.content}</div>
										<h5>{props.head1}</h5>
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
										<div className=' card-text'>{props.content}</div>
										<h5>{props.head1}</h5>
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
										<div className=' card-text'>{props.content}</div>
										<h5>{props.head1}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Slidercard;
