import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { contact } from '../../data/data-names';

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
			className="flex flex-col md:flex-row items-center justify-center whitespace-nowrap h-full relative"
		>
			<div className="absolute top-[8rem] space-y-8 z-10 font-medium text-5xl md:text-7xl lg:text-8xl leading-[6.5rem] tracking-wider">
				<div className="flex ml-3 uppercase">
					{contact.map((item, i) => (
						<motion.h2
							key={i}
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: i * 0.1, duration: 0.5 }}
						>
							{item}
						</motion.h2>
					))}
				</div>
				<motion.div
					initial={{ x: '-100vw' }}
					animate={{ x: 0 }}
					transition={{ delay: 0.3, duration: 0.7 }}
				>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] mb-4"
					></motion.div>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
						className="border-b-4 w-[5.5rem] rounded border-[#ff4d5a] ml-10"
					></motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.3, duration: 0.5 }}
					className="space-y-3 text-xl lg:text-2xl tracking-widest leading-[3rem] break-words"
				>
					<div className="flex items-center space-x-3">
						<AiOutlineMail />
						<p>contact@sabri.dev</p>
					</div>
					<div className="flex items-center space-x-3">
						<AiOutlinePhone />
						<p>0651183041</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Contact;
