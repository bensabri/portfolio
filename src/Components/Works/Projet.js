import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const Projet = ({ title, description, projectNum, image, url, stack }) => {
	const location = useLocation();

	return (
		<motion.div
			exit={{
				y: location.pathname === '/aboutme' ? '-100vh' : '100vh',
				opacity: 0,
				transition: { delay: 0.2, duration: 0.7 },
			}}
			className="flex justify-center whitespace-nowrap w-full h-[28rem]"
		>
			<div className="absolute top-[1rem] space-y-10 z-20">
				<div className="flex ml-3">
					{title.map((item, i) => (
						<motion.h1
							key={i}
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.05, duration: 0.5 }}
							className=" font-medium uppercase text-4xl md:text-7xl lg:text-7xl leading-[6.5rem] tracking-wider"
						>
							{item}
						</motion.h1>
					))}
				</div>
				<div>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1, duration: 0.5 }}
						className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"
					></motion.div>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"
					></motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="text-lg lg:text-xl tracking-widest leading-[3rem] space-y-2"
				>
					<h3 className="text-xl font-semibold text-left">
						Projet {projectNum}
					</h3>
					<p className="text-left" title={description}>
						{description.slice(0, 20)} ...
					</p>
					<p className="text-left">Stack: {stack}</p>
				</motion.div>
				<div className="hover:-translate-y-1 transition-all">
					<Link to={url}>
						<motion.button
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 "
						>
							Visite
						</motion.button>
					</Link>
				</div>
			</div>
			{image && (
				<div className="opacity-30 object-contain w-[26rem]">
					<motion.img
						initial={{ opacity: 0, scale: 0.7 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3, duration: 0.7 }}
						src={image}
						alt=""
					/>
				</div>
			)}
		</motion.div>
	);
};

export default Projet;
