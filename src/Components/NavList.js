import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = ({ setOpen, isOpen }) => {
	const ulList = {
		visible: { opacity: 1 },
	};

	const item = {
		visible: { opacity: 1, y: 0 },
		hidden: { opacity: 0, y: 150 },
	};

	return (
		<motion.div
			animate={{ y: isOpen ? 0 : '-100%' }}
			initial={{ y: '-100%' }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
			className={`z-30 overflow-y-hidden absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#082143] via-[#9C3075] to-[#FD4C5A]
			`}
		>
			<motion.div
				initial="hidden"
				animate={isOpen ? 'visible' : 'hidden'}
				transition={{ duration: 0.2 }}
				variants={ulList}
				className="font-display leading-tight flex flex-col h-full justify-around text-center font-medium"
			>
				{/* <motion.div className="overflow-hidden"> */}
				<Link to="/">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						accueil
					</motion.span>
				</Link>
				{/* </motion.div> */}
				<Link to="/works">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						projets
					</motion.span>
				</Link>
				<Link to="/aboutme">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						profil
					</motion.span>
				</Link>
				<Link to="/contact">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						contact
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default Navbar;
