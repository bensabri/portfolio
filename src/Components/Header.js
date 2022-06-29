import { Slant as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { FaFacebookF } from 'react-icons/fa';
import NavList from './NavList';

const Header = () => {
	const [isOpen, setOpen] = useState(false);

	return (
		<header>
			<div className="z-40 relative px-8 flex items-end justify-between ">
				<h2 className="tracking-wide hover:opacity-50 transition-opacity cursor-pointer">
					Ben ayed Sabri
				</h2>
				<div className="z-50 flex items-center space-x-10">
					<FaFacebookF className="hover:opacity-50 transition-opacity cursor-pointer" />
					<Hamburger toggled={isOpen} toggle={setOpen} size={43} />
				</div>
			</div>
			<NavList isOpen={isOpen} setOpen={setOpen} />
		</header>
	);
};

export default Header;
