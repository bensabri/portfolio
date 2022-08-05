import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FC } from 'react';

interface Props {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	navLang: {
		home: string;
		works: string;
		aboutMe: string;
		contact: string;
	};
}

const Navbar: FC<Props> = ({ setOpen, isOpen, navLang }) => {
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
			className={`z-30 overflow-y-hidden absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]
			`}
		>
			<motion.div
				initial="hidden"
				animate={isOpen ? 'visible' : 'hidden'}
				transition={{ duration: 0.2 }}
				variants={ulList}
				className="font-display leading-tight flex flex-col h-full justify-around text-center font-medium"
			>
				<Link to="/">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						{navLang.home}
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
						{navLang.works}
					</motion.span>
				</Link>
				<Link to="/aboutme">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						{navLang.aboutMe}
					</motion.span>
				</Link>
				<Link to="/contact">
					<motion.span
						onClick={() => setOpen(false)}
						variants={item}
						transition={{ delay: 0.6 }}
						className="link link-underline link-underline-white text-white uppercase text-7xl md:text-8xl lg:text-9xl cursor-pointer"
					>
						{navLang.contact}
					</motion.span>
				</Link>
			</motion.div>
		</motion.div>
	);
};

export default Navbar;
