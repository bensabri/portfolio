import './App.css';
import './styles.scss';
import Header from './Components/Header';
import { motion } from 'framer-motion';
import AnimatedRoute from './Components/AnimatedRoute';
import { useEffect, useState, FC } from 'react';
import {
	aboutMeLang,
	contactLang,
	navBarLang,
	projectListLang,
} from './data/data-languages';
import { BrowserRouter as Router } from 'react-router-dom';

const App: FC = () => {
	const [isEnglish, setIsEnglish] = useState<boolean>(false);
	let userLang: string | readonly string[] =
		navigator.language || navigator.languages;

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
		<div className="bg-black h-screen">
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
};

export default App;
