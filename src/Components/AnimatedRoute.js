import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import AboutMe from './Pages/AboutMe';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoute = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/works" element={<Works />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/aboutme" element={<AboutMe />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoute;
