import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { motion } from 'framer-motion';

function App() {
	return (
		<div className="bg-black">
			<motion.div
				initial={{ y: '-100%' }}
				animate={{ y: 0 }}
				transition={{ delay: 0, duration: 0.6, type: 'miscellaneous' }}
				className="relative text-xl text-white h-screen w-full bg-gradient-to-b from-[#061E3D] to-[#040E1A]"
			>
				<Home />
			</motion.div>
		</div>
	);
}

export default App;
