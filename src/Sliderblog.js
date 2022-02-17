import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Circle from './Circle';
import Sliderblogjson from './Sliderblogjson';
const Sliderblog = (props) => {
	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		row: 2,

		slidesToShow: 3,
		slidesPerRow: 2,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},

			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	
	return (
		<div>
			<div className='container my-5'>
				<Slider {...settings}>
					{Sliderblogjson.map((val) => {
						return (
							<>
								<div className='col' style={{ margin: '10px' }}>
									<div className='card card_design' style={{}}>
										<img src={val.img} className='bolg_over' alt='...' />
										<div className='text-overlay meta'>
											<span className='day'>26</span>
											<span className='month'>june</span>
											<span className='year'>2019</span>
										</div>
										<div className='card-body'>
											<h5 className='card-title'>{val.title}</h5>
											<p className='card-text'>{val.text}</p>
											<Link to='/'>
												<Circle btn='Read More' />
											</Link>
										</div>
									</div>
								</div>
							</>
						);
					})}
				</Slider>
			</div>
		</div>
	);
};

export default Sliderblog;
