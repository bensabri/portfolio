import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import AboutMe from './Pages/AboutMe';
import { AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';

const AnimatedRoute = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handlers = useSwipeable({
		onSwipedUp: () => {
			if (location.pathname === '/') {
				navigate('/works');
			} else if (location.pathname === '/works') {
				navigate('/aboutme');
			} else {
				navigate('/contact');
			}
		},
		onSwipedDown: () => {
			if (location.pathname === '/contact') {
				navigate('/aboutme');
			} else if (location.pathname === '/aboutme') {
				navigate('/works');
			} else {
				navigate('/');
			}
		},
		preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className="h-full" {...handlers}>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/works" element={<Works />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/aboutme" element={<AboutMe />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default AnimatedRoute;
