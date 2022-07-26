import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<motion.div
			initial={{ x: '-100vw' }}
			animate={{ x: 0 }}
			transition={{ delay: 0.7, duration: 0.7 }}
			className="hidden md:inline-block absolute -bottom-28 md:top-[10rem] w-full z-10 md:w-[7rem]"
		>
			<ul className="flex md:flex-col justify-around p-2 h-[14.5rem] md:h-[23rem] tracking-wider">
				<NavLink
					to="/"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>Accueil</li>
				</NavLink>
				<NavLink
					to="/works"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>Projets</li>
				</NavLink>
				<NavLink
					to="/aboutme"
					className={({ isActive }) =>
						`${
							isActive ? 'text-md' : 'text-sm'
						} transition-all delay-350`
					}
				>
					<li>Profil</li>
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
