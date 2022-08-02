import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Works from './Pages/Works';
import AboutMe from './Pages/AboutMe';
import { AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import Sidebar from './Sidebar';
import { navBarLang } from '../data/data-languages';
import { FC } from 'react';

interface Props {
	navLang: {
		home: string;
		works: string;
		aboutMe: string;
		contact: string;
	};
	contactL: {
		contact: string[];
		btnContactMe: string;
		name: string;
		placeholderName: string;
		email: string;
		message: string;
		placeholderMessage: string;
		btnSend: string;
	};
	aboutL: {
		title: string[];
	};
	worksL: {
		title: string[];
		description: string;
		stack: string;
		projectNum: number;
		image: string;
		url: string;
		btn: string;
	}[];
}

const AnimatedRoute: FC<Props> = ({
	navLang,
	contactL,
	aboutL,
	worksL,
}: Props) => {
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
		// preventDefaultTouchmoveEvent: true,
		trackMouse: true,
	});

	return (
		<div className="h-full" {...handlers}>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/works" element={<Works worksL={worksL} />} />
					<Route
						path="/contact"
						element={<Contact contactL={contactL} />}
					/>
					<Route
						path="/aboutme"
						element={<AboutMe aboutL={aboutL} />}
					/>
				</Routes>
			</AnimatePresence>
			<Sidebar navLang={navLang} />
		</div>
	);
};

export default AnimatedRoute;
