import './App.css';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import { motion } from 'framer-motion';
import AnimatedRoute from './Components/AnimatedRoute';
import { useEffect, useState } from 'react';
import {
	navBarLang,
	contactLang,
	aboutMeLang,
	projectListLang,
} from './data/data-languages';

function App() {
	const [isEnglish, setIsEnglish] = useState(false);
	let userLang = navigator.language || navigator.userLanguage;

	useEffect(() => {
		if (userLang.slice(0, 2) === 'fr') {
			setIsEnglish(false);
		} else {
			setIsEnglish(true);
		}
	}, []);

	const { navEng, navFr } = navBarLang[0];
	const { contactEng, contactFr } = contactLang[0];
	const { aboutEng, aboutFr } = aboutMeLang[0];
	const { worksEng, worksFr } = projectListLang[0];

	return (
		<div className="bg-black h-screen" style={{}}>
			<Router>
				<motion.div
					initial={{ y: '-100%' }}
					animate={{ y: 0 }}
					transition={{
						delay: 0,
						duration: 0.6,
						type: 'miscellaneous',
					}}
					className="text-xl text-white h-full w-full bg-gradient-to-b from-[#061E3D] to-[#040E1A]"
				>
					<Header navLang={isEnglish ? navEng : navFr} />
					<AnimatedRoute
						navLang={isEnglish ? navEng : navFr}
						contactL={isEnglish ? contactEng : contactFr}
						aboutL={isEnglish ? aboutEng : aboutFr}
						worksL={isEnglish ? worksEng : worksFr}
					/>
				</motion.div>
			</Router>
		</div>
	);
}

export default App;
