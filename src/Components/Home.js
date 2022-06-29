import { animate, motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import galaxy from '../assets/Galaxy 2.png';
import stars from '../assets/stars.png';
import Header from './Header';

const Home = () => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	useEffect(() => {
		const updateMousePosition = (ev) => {
			setMousePosition({ x: ev.clientX, y: ev.clientY });
		};
		window.addEventListener('mousemove', updateMousePosition);

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, []);

	return (
		<div className="h-screen">
			<Header />
			<div className="overflow-hidden absolute top-[25%] ml-24">
				<div className="space-y-9">
					<motion.h1
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						transition={{ delay: 0.5, duration: 0.7 }}
						className="font-medium uppercase text-8xl leading-[6.5rem] tracking-wider"
					>
						Ben ayed
						<br />
						sabri{' '}
					</motion.h1>
					<motion.div
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						transition={{ delay: 0.55, duration: 0.7 }}
					>
						<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"></div>
						<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"></div>
					</motion.div>

					<motion.p
						initial={{ x: '-100vw' }}
						animate={{ x: 0 }}
						transition={{ delay: 0.8, duration: 0.7 }}
						className="text-2xl tracking-widest leading-[3rem] break-words"
					>
						web designer / <br /> markup engineer.{' '}
					</motion.p>
				</div>
			</div>
			<div className="relative p-16">
				<motion.div
					initial={{ x: '100vw', y: 40 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
					className="absolute -right-[6rem] top-[5rem]"
				>
					<motion.div
						animate={{
							x: 0 - +mousePosition.x / 25,
							y: 40 - +mousePosition.y / 25,
						}}
					>
						<img src={galaxy} alt="" />
					</motion.div>
				</motion.div>

				<motion.div
					transition={{ delay: 1.2, duration: 1 }}
					initial={{ scale: 0 }}
					animate={{ scale: 1.4 }}
					className="absolute -right-[12rem] top-[20rem]"
				>
					<motion.h2
						animate={{
							x: 0 - +mousePosition.x / 15,
							y: 0 - +mousePosition.y / 15,
						}}
						className="absolute top-[58%] right-[12rem] font-extrabold tracking-widest text-[#ff4d5a] uppercase text-6xl"
					>
						portfolio
					</motion.h2>
				</motion.div>
			</div>
		</div>
	);
};

export default Home;
