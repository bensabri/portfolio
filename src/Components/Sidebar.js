import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<motion.div
			initial={{ x: '-100vw' }}
			animate={{ x: 0 }}
			transition={{ delay: 0.7, duration: 0.7 }}
			className="absolute top-[10rem] z-20"
		>
			<ul className="flex flex-col justify-around p-2 h-[23rem] tracking-wider">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>Home</li>
				</NavLink>
				<NavLink
					to="/works"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>Works</li>
				</NavLink>
				<NavLink
					to="/aboutme"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>About me</li>
				</NavLink>
				<NavLink
					to="/contact"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>Contact</li>
				</NavLink>
			</ul>
		</motion.div>
	);
};

export default Sidebar;

{
	/* <p
				style={{
					writingMode: 'vertical-rl',
					wordWrap: 'break-word',
					whiteSpace: 'normal',
				}}
				className="fixed text-[1rem] bottom-[80px] leading-6 tracking-widest after:content-['content-none w-[2px] h-[64px] bg-white absolute bottom-[5rem] m-auto left-0']"
			>
				SCROLLDOWN
			</p> */
}
