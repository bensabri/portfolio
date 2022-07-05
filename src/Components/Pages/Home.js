import { animate, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import galaxy from '../../assets/Galaxy 2.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
	const [mousePosition, setMousePosition] = useState({ x: null, y: null });

	const navigate = useNavigate();

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
		<motion.div
			onWheel={(e) => {
				e.deltaY >= 0 && navigate('/works');
			}}
			exit={{ y: '-100vh' }}
			transition={{ delay: 0.2, duration: 0.7 }}
			className="flex flex-col md:flex-row items-center  whitespace-nowrap mx-[8rem] h-5/6 "
		>
			<div className="space-y-10">
				<motion.h1
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.5, duration: 0.7 }}
					className="font-medium uppercase text-6xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider"
				>
					<div className="space-y-2">
						<p>Ben ayed</p>
						<p>sabri</p>
					</div>
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
					className="text-xl lg:text-2xl tracking-widest leading-[3rem] break-words"
				>
					FullStack Developer / <br /> UI/UX Designer.{' '}
				</motion.p>
			</div>

			<div className="relative">
				<motion.div
					initial={{ x: '100vw', y: 40 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
				>
					<motion.div
						animate={{
							x: 0 - +mousePosition.x / 20,
							y: 40 - +mousePosition.y / 20,
						}}
						exit={{ x: '100vw', transition: { duration: 1 } }}
					>
						<img src={galaxy} alt="" />
					</motion.div>
				</motion.div>

				<motion.div
					transition={{ delay: 1.2, duration: 1 }}
					initial={{ scale: 0 }}
					animate={{ scale: 1.4 }}
					className=""
				>
					<motion.h2
						animate={{
							x: 0 - +mousePosition.x / 25,
							y: 0 - +mousePosition.y / 25,
						}}
						transition={{ duration: 1 }}
						exit={{ x: '100vw' }}
						className="absolute right-[30%] xl:-top-[7rem] font-extrabold tracking-widest text-[#ff4d5a] uppercase text-lg lg:text-2xl xl:text-5xl"
					>
						portfolio
					</motion.h2>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Home;

/* 
https://docs.google.com/forms/u/0/d/e/1FAIpQLSeFNNpXUSpjEn8jefk1wtP5BUVKyx_qbdFHLTtoFtywrZCZDQ/formResponse

Modifier votre réponse
https://docs.google.com/forms/u/0/d/e/1FAIpQLSeFNNpXUSpjEn8jefk1wtP5BUVKyx_qbdFHLTtoFtywrZCZDQ/viewform?usp=form_confirm&edit2=2_ABaOnue2QZezRH8f5EQ94B-0p1Jf6kog6sIpbcvz2UQFUBRuPrNP_1v5LSH5i72Sc_26CcM
dns10.ovh.net
ns10.ovh.net 

*/
