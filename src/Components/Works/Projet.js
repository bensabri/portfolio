import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const animateDiv = {
	hidden: {
		scale: 0,
	},
	visible: {
		scale: 1,

		transition: { delay: 0.8, duration: 0.7 },
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
				<h1 className="font-medium uppercase text-6xl md:text-7xl lg:text-7xl leading-[6.5rem] tracking-wider">
					<br />
					{title}
				</h1>
				<div>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"></div>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"></div>
				</div>

				<p className="text-lg lg:text-xl tracking-widest leading-[3rem] break-words">
					Projet {projectNum} <br /> {description.slice(0, 30)} <br />{' '}
					{description.slice(30, 60)}
				</p>
				<div className="hover:-translate-y-1 transition-all ">
					<Link to={url}>
						<button className="bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 ">
							Visite
						</button>
					</Link>
				</div>
			</div>
			{image && (
				<img className="opacity-40 object-contain" src={image} alt="" />
			)}
		</motion.div>
	);
};

export default Projet;
