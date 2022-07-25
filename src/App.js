import './App.css';
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import { motion } from 'framer-motion';
import AnimatedRoute from './Components/AnimatedRoute';

function App() {
	return (
		<div className="bg-black h-screen overflow-hidden">
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
					<Header />
					{/* <Sidebar /> */}
					<AnimatedRoute />
				</motion.div>
			</Router>
		</div>
	);
}

export default App;
