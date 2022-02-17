import React from 'react';
import './App.css';
import Circle from './Circle';
const Contactform = () => {
	return (
		<>
			<div className='container my-5'>
				<div className='row justify-content-md-center justify-content-center'>
					<div className='col-12 col-lg-8 col-md-10'>
						{/* <div className='row justify-content-md-center justify-content-center'>
							<div className='col-12'> */}
						<h2 className='text-center my-5'>
							If you got any questions <br /> please do not hesitate to send us a message
						</h2>
						<form className='bg_light p-5 contact-form'>
							<div class='mb-3'>
								<input type='name' class='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Your Name' />
							</div>
							<div class='mb-3'>
								<input type='Email' class='form-control' id='exampleInputPassword1' placeholder='Your Email' />
							</div>
							<div class='mb-3'>
								<input type='text' class='form-control' id='exampleInputPassword1' placeholder='Subject' />
							</div>
							<div class='mb-3'>
								<textarea class='form-control' id='exampleFormControlTextarea1' rows='7' placeholder='message'></textarea>
							</div>
							<div className='mb-3'>
								<Circle btn='Send Message' />
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* </div>
			</div> */}
		</>
	);
};

export default Contactform;
