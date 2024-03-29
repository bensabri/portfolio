import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import galaxy from '../../assets/Galaxy 2.png';
import { useNavigate } from 'react-router-dom';
import { lastName, firstName } from '../../data/data-names';

interface MousePosition {
	x: number;
	y: number;
}

const Home: FC = () => {
	const [mousePosition, setMousePosition] = useState<MousePosition>({
		x: 0,
		y: 0,
	});

	const navigate = useNavigate();

	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<motion.div
			onWheel={(e) => {
				e.deltaY >= 0 && navigate('/works');
			}}
			exit={{ y: '-100vh' }}
			transition={{ delay: 0.2, duration: 0.7 }}
			className="flex flex-col md:flex-row items-center justify-center whitespace-nowrap h-full relative"
		>
			<motion.div
				exit={{ y: '100vh', opacity: 0, transition: { duration: 0.5 } }}
				initial={{ opacity: 0, y: '100vh' }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.8, duration: 1 }}
				className="absolute -left-[4.9rem] cursor-pointer z-20 mb-[20rem] md:mb-[11rem]"
			>
				<a className="link " onClick={() => navigate('/works')}>
					<span className="link__arrow">
						<span></span>
						<span></span>
					</span>
					<span className="link__line"></span>
					<span className="uppercase text-sm tracking-widest">
						projets
					</span>
				</a>
			</motion.div>
			<div className="absolute top-[8rem] md:space-y-8 z-10 font-medium text-5xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider">
				<div className="flex items-center uppercase">
					{lastName.map((item, i) => (
						<motion.h2
							key={i}
							initial={{ opacity: 0, x: 100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
						>
							{item}
						</motion.h2>
					))}
				</div>
				<div className="flex items-center uppercase">
					{firstName.map((item, i) => (
						<motion.h2
							key={i}
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
						>
							{item}
						</motion.h2>
					))}
				</div>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.3, duration: 0.7 }}
					className="my-2"
				>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"
					></motion.div>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
						className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"
					></motion.div>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
					className="text-xl lg:text-2xl tracking-widest leading-[3rem] break-words"
				>
					FullStack Developer / <br /> UI/UX Designer.{' '}
				</motion.p>
				<motion.h2
					initial={{ scale: 0 }}
					whileInView={{ scale: 1 }}
					animate={{
						x: 0 - +mousePosition.x / 30,
						y: 0 - +mousePosition.y / 30,
					}}
					transition={{ duration: 1 }}
					exit={{ x: '100vw' }}
					className="ml-10 mt-4 md:mt-0 font-extrabold tracking-widest text-[#ff4d5a] uppercase text-lg lg:text-2xl xl:text-3xl"
				>
					portfolio
				</motion.h2>
			</div>
			<div className="relative z-0 ">
				<motion.div
					initial={{ x: '100vw', y: 40 }}
					animate={{ x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
				>
					<motion.div
						animate={{
							x: 0 - +mousePosition.x / 30,
							y: 40 - +mousePosition.y / 20,
						}}
						exit={{ x: '100vw', transition: { duration: 1 } }}
					>
						<img src={galaxy} alt="" className="opacity-60" />
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Home;
