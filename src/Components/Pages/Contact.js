import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
	const navigate = useNavigate();

	return (
		<motion.div
			onWheel={(e) => {
				e.deltaY < 0 && navigate('/aboutme');
			}}
			exit={{
				y: '100vh',
				transition: { delay: 0.2, duration: 0.7 },
			}}
			initial={{ y: '100vh' }}
			animate={{ y: 0, transition: { delay: 0.2, duration: 0.7 } }}
			className="flex flex-col md:flex-row items-center justify-center whitespace-nowrap h-5/6 relative"
		>
			<div className="absolute top-[2rem] space-y-10">
				<motion.h1
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.7, duration: 0.7 }}
					className="font-medium capitelize text-5xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider"
				>
					<br />
					Get In Touch{' '}
				</motion.h1>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.75, duration: 0.7 }}
				>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"></div>
					<div className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"></div>
				</motion.div>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.8, duration: 0.7 }}
					className="space-y-3 text-xl lg:text-2xl tracking-widest leading-[3rem] break-words"
				>
					<p>benasabri2@gmail.com</p>
					<p>0651183041</p>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Contact;
