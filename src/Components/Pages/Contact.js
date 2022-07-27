import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { contact } from '../../data/data-names';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Contact = () => {
	const [sent, setSent] = useState(false);
	const [opened, setOpened] = useState(false);

	const navigate = useNavigate();
	const { handleSubmit, formState, register, reset } = useForm();

	const isMobile = useMediaQuery('(max-width: 600px)');

	const onSubmit = async (data) => {
		try {
			console.log(data);
			reset();
			setSent(true);
			setOpened(false);
		} catch {
			return console.log('Email sendind email');
		}
	};

	return (
		<motion.div
			onWheel={(e) => {
				e.deltaY < 0 && navigate('/aboutme');
			}}
			exit={{
				y: '100vh',
				transition: { delay: 0.2, duration: 0.7 },
			}}
			className="overflow-y-scroll flex flex-col md:flex-row items-center justify-center whitespace-nowrap h-full relative"
		>
			<div className="absolute top-[8rem] pb-20 px-5 space-y-8 z-10 font-medium text-5xl md:text-6xl lg:text-7xl leading-[6.5rem] tracking-wider">
				<div className="flex justify-center uppercase">
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

				{sent ? (
					<p className="text-lg">Message Envoyer</p>
				) : (
					<Modal
						opened={opened}
						onClose={() => setOpened(false)}
						classNames={{
							modal: 'bg-[#040E1A] rounded-xl',
						}}
						fullScreen={isMobile}
					>
						<h2 className="text-center text-white text-4xl">
							Contactez moi
						</h2>
						<div className="mx-10 mt-16">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="flex flex-col mb-5">
									<label
										htmlFor="name"
										className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
									>
										Nom
									</label>
									<input
										className="py-1 text-black text-lg font-normal rounded pl-2"
										id="name"
										type="name"
										placeholder="Votre nom"
										{...register('name', {
											required:
												'Vous devez renseigner ce champs',
										})}
									/>
								</div>
								<div className="flex flex-col mb-6">
									<label
										htmlFor="email"
										className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
									>
										E-Mail
									</label>
									<input
										className="py-1 text-black text-lg font-normal rounded pl-2"
										id="email"
										type="email"
										placeholder="Votre email"
										{...register('email', {
											required:
												'Vous devez renseigner ce champs',
										})}
									/>
								</div>
								<div className="flex flex-col mb-5">
									<label
										htmlFor="message"
										className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
									>
										Message
									</label>
									<textarea
										name="message"
										id="message"
										placeholder="Votre message"
										{...register('message', {
											required:
												'Vous devez renseigner ce champs',
										})}
										cols="10"
										rows="2"
										className="py-1 text-black text-lg font-normal rounded pl-2"
									></textarea>
								</div>
								<div className="w-full flex justify-center ">
									<button className="hover:-translate-y-1 transition-all text-white bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 text-base">
										Envoie
									</button>
								</div>
							</form>
						</div>
					</Modal>
				)}
				<button
					onClick={() => setOpened(true)}
					className="hover:-translate-y-1 transition-all  bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
				>
					Contact
				</button>
			</div>
		</motion.div>
	);
};

export default Contact;
