import { motion } from 'framer-motion';
import { useState } from 'react';

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
				<motion.a
					variants={item}
					transition={{ delay: 0.6 }}
					className="uppercase text-9xl cursor-pointer"
				>
					<span className="link link-underline link-underline-white text-white">
						home
					</span>
				</motion.a>
				{/* </motion.div> */}
				<motion.a
					variants={item}
					transition={{ delay: 0.6 }}
					className="uppercase text-9xl cursor-pointer"
				>
					<span className="link link-underline link-underline-white text-white">
						works
					</span>
				</motion.a>
				<motion.a
					variants={item}
					transition={{ delay: 0.6 }}
					className="uppercase text-9xl cursor-pointer"
				>
					<span className="link link-underline link-underline-white text-white">
						about me
					</span>
				</motion.a>
				<motion.a
					variants={item}
					transition={{ delay: 0.6 }}
					className="uppercase text-9xl cursor-pointer"
				>
					<span className="link link-underline link-underline-white text-white">
						contact
					</span>
				</motion.a>
			</motion.div>
		</motion.div>
	);
};

export default Navbar;
