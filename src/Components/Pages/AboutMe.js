import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutMe = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<motion.div
			onWheel={(e) => {
				e.deltaY >= 0 ? navigate('/contact') : navigate('/works');
			}}
			exit={{
				y: location.pathname === '/contact' ? '-100vh' : '100vh',
				transition: { delay: 0.2, duration: 0.7 },
			}}
			initial={{ y: '100vh' }}
			animate={{ y: 0, transition: { delay: 0.2, duration: 0.7 } }}
			className="flex flex-col md:flex-row items-center justify-center whitespace-nowrap h-full relative"
		>
			<div className="absolute top-[2rem] space-y-10">
				<motion.h1
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.6, duration: 0.7 }}
					className="font-medium capitelize text-6xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider"
				>
					<br />
					About Me{' '}
				</motion.h1>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.65, duration: 0.7 }}
				>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"></div>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"></div>
				</motion.div>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
					className="space-y-3 text-lg lg:text-2xl tracking-widest leading-[3rem] break-words"
				>
					<h2 className="text-3xl">FullStack developer</h2>
					<p>React, NextJs, TailwindCss</p>
					<p>Strapi, GraphQl, RestApi, Firebase</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default AboutMe;
