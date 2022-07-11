import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const animateDiv = {
	hidden: {
		x: '100vw',
		opacity: 0,
	},
	visible: {
		x: 0,
		opacity: 1,
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

const Projet = ({ title, description, projectNum, image, url, i }) => {
	const location = useLocation();

	return (
		// <motion.div
		// 	initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
		// 	whileInView={{ opacity: 1, x: 0 }}
		// 	exit={{
		// 		y: location.pathname === '/aboutme' ? '-100vh' : '100vh',
		// 		transition: { delay: 0.2, duration: 0.7 },
		// 	}}
		// 	transition={{ delay: i * 0.1, duration: 0.2 }}
		// 	className="relative m-5 w-[11rem] cursor-pointer text-white p-[1rem] "
		// >
		// 	<h2>{title} </h2>
		// 	<p>{description} </p>
		// 	<img
		// 		className="absolute top-0 right-0 left-0 w-full h-full object-cover rounded-lg"
		// 		src={image}
		// 		alt=""
		// 	/>
		// 	<div className="absolute top-0 right-0 left-0 w-full h-full hover:bg-[#051932] opacity-60 rounded-lg" />
		// </motion.div>

		<motion.div
			exit={{
				y: location.pathname === '/aboutme' ? '-100vh' : '100vh',
				opacity: 0,
				transition: { delay: 0.2, duration: 0.7 },
			}}
			variants={animateDiv}
			initial="hidden"
			animate="visible"
			className="flex justify-center whitespace-nowrap w-full h-[28rem]"
		>
			<div className="absolute -top-[4rem] space-y-10 z-20 ">
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
			{/* <div className="opacity-50">
				<div
					// initial={{
					// 	x: '-100vw',
					// }}
					// animate={{
					// 	x: 0,
					// 	transition: { duration: 0.7, delay: 1 },
					// }}
					// exit={{
					// 	x: '100vh',
					// 	transition: { duration: 1 },
					// }}
					// whileHover={{ scale: 1.15 }}
					className="w-[13rem] md:w-[15rem] lg:w-[18rem] ml-[15rem]"
				>
				</div>
			</div> */}
			<img className="opacity-50 object-contain" src={image} alt="" />
		</motion.div>
	);
};

export default Projet;
