import { Slant as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import NavList from './NavList';
import cvSabri from '../assets/CV-SABRI.pdf';

const Header = ({ navLang }) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<header>
			<div className="z-40 relative px-8 flex items-center justify-between text-white">
				<h2 className="tracking-wide hover:opacity-50 transition-opacity cursor-pointer">
					Sabri Ben ayed
				</h2>
				<div className="z-50 flex items-center space-x-5 md:space-x-10">
					<a
						href={cvSabri}
						className="font-bold hover:opacity-50 transition-opacity cursor-pointer"
						target="_blank"
						rel="noreferrer"
						title="Télécharger mon cv"
						download
					>
						CV
					</a>
					<a
						href="https://github.com/bensabri"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillGithub className="hover:opacity-50 transition-opacity cursor-pointer text-3xl" />
					</a>
					<Hamburger toggled={isOpen} toggle={setOpen} size={43} />
				</div>
			</div>
			<NavList isOpen={isOpen} setOpen={setOpen} navLang={navLang} />
		</header>
	);
};

export default Header;
