import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const animateDiv = {
	hidden: {
		y: '100%',
	},
	visible: {
		y: 0,
		transition: { delay: 0.2, duration: 0.7 },
	},
};

const animateTitle = {
	hidden: {
		x: '-100vw',
	},
	visible: {
		x: 0,
		transition: {
			delay: 0.6,
			duration: 0.7,
		},
	},
};

const Projet = ({ title, description, projectNum, image, url }) => {
	const location = useLocation();

	return (
		<motion.div
			exit={{
				y: location.pathname === '/aboutme' ? '-100%' : '100%',
				transition: { delay: 0.2, duration: 0.7 },
			}}
			variants={animateDiv}
			initial="hidden"
			animate="visible"
			className="flex justify-center whitespace-nowrap w-full h-5/6  "
		>
			<div className="absolute top-[2rem] space-y-8 z-20">
				<motion.h1
					initial="hidden"
					animate="visible"
					variants={animateTitle}
					className="font-medium capitelize text-6xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider"
				>
					<br />
					{title}
				</motion.h1>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
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
					Projet {projectNum} <br /> {description}
				</motion.p>
				<div className="hover:-translate-y-1 transition-all ">
					<Link to={url}>
						<motion.button
							initial={{ x: '-100vw' }}
							animate={{ x: 0 }}
							transition={{ delay: 1.2, duration: 0.8 }}
							className="bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 "
						>
							Visite
						</motion.button>
					</Link>
				</div>
			</div>
			<div className="cursor:pointer opacity-50">
				<motion.div
					initial={{
						x: '-100vw',
					}}
					animate={{
						x: 0,
						transition: { duration: 0.7, delay: 1 },
					}}
					exit={{
						x: '100vh',
						transition: { duration: 1 },
					}}
					whileHover={{ scale: 1.15 }}
					className="w-[13rem] md:w-[15rem] lg:w-[18rem] ml-[15rem]"
				>
					<img className="" src={image} alt="" />
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Projet;
