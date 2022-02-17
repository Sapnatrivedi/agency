import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Project from './Project';
import Services from './Services';
import Blog from './Blog';

function App() {
	return (
		<>
			<Navbar />

			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/Home' exact component={Home} />
				<Route path='/About' exact component={About} />
				<Route path='/Project' exact component={Project} />
				<Route path='/Services' exact component={Services} />
				<Route path='/Blog' exact component={Blog} />
				<Route path='/Contact' exact component={Contact} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
