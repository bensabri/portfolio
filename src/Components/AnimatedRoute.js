import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import AboutMe from './Pages/AboutMe';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const AnimatedRoute = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const [touchStart, setTouchStart] = useState(null);
	const [touchEnd, setTouchEnd] = useState(null);

	// the required distance between touchStart and touchEnd to be detected as a swipe
	const minSwipeDistance = 20;

	const onTouchStart = (e) => {
		setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
		setTouchStart(e.targetTouches[0].clientY);
	};

	const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

	const onTouchEnd = () => {
		if (!touchStart || !touchEnd) return;
		const distance = touchStart - touchEnd;
		const isSwipeUp = distance > minSwipeDistance;
		const isSwipeDown = distance < -minSwipeDistance;
		if (isSwipeUp || isSwipeDown) {
			console.log('swipe', isSwipeUp ? 'up' : 'down');
			switch (location.pathname) {
				case '/':
					isSwipeUp && navigate('/works');
					break;
				case '/works':
					isSwipeUp && navigate('/aboutme');
					isSwipeDown && navigate('/');
					break;
				case '/aboutme':
					isSwipeUp && navigate('/contact');
					isSwipeDown && navigate('/works');
					break;
				case '/contact':
					isSwipeUp && navigate('/aboutme');
					break;
				default:
					break;
			}

			// isSwipeUp && navigate('/works');
		}
		// add your conditional logic here
	};
	// console.log(location.pathname);
	return (
		<div
			className="h-full"
			onTouchStart={onTouchStart}
			onTouchMove={onTouchMove}
			onTouchEnd={onTouchEnd}
		>
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
