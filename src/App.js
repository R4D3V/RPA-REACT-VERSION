import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './pages/Main';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
	return (
		<div className='App'>
			<Navbar />
			<Router>
				<Route path='/' exact render={props => <Main />} />
				<Route path='/AboutUs' render={props => <AboutUs />} />
				<Route path='/Contact' render={props => <Contact />} />
			</Router>
			<Footer />
		</div>
	);
};

export default App;
