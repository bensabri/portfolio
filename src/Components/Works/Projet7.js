import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import photo1 from '../../assets/medinah 1.png';
import { Link } from 'react-router-dom';

const Projet7 = () => {
	const location = useLocation();

	return (
		<motion.div
			exit={{
				y: location.pathname === '/aboutme' ? '-100vh' : '100vh',
				transition: { delay: 0.2, duration: 0.7 },
			}}
			initial={{ y: '100vh' }}
			animate={{ y: 0 }}
			className="flex items-center justify-center whitespace-nowrap h-screen w-full relative"
		>
			<div className="absolute top-[2rem] space-y-8 z-20">
				<motion.h1
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.7, duration: 0.7 }}
					className="font-medium capitelize text-6xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider"
				>
					<br />
					Market Place{' '}
				</motion.h1>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.75, duration: 0.7 }}
				>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"></div>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"></div>
				</motion.div>

				<motion.p
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 1, duration: 0.7 }}
					className="text-xl lg:text-2xl tracking-widest leading-[3rem] break-words"
				>
					Projet 7 <br /> Ecommerce Store
				</motion.p>
				<div className="hover:-translate-y-1 transition-all ">
					<Link to="https://www.medinah-store.com/">
						<motion.button
							initial={{ x: '-100vw' }}
							animate={{ x: 0 }}
							transition={{ delay: 1, duration: 0.8 }}
							className="bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 "
						>
							Visite
						</motion.button>
					</Link>
				</div>
			</div>

			<motion.div
				initial={{
					x: '-100vw',
					// backgroundColor: '#FF4D5A',
				}}
				animate={{
					x: 0,
					// backgroundColor: ['#FF4D5A', '#ffffff'],
					transition: { duration: 0.7, delay: 1 },
				}}
				exit={{
					x: '100vh',
					transition: { duration: 1 },
				}}
				className="w-[20rem] md:w-[25rem] lg:w-[28rem] ml-[15rem]"
			>
				<img className="opacity-50" src={photo1} alt="" />
			</motion.div>
		</motion.div>
	);
};

export default Projet7;
