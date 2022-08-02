import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { useState } from 'react';
import { Modal } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import emailjs from '@emailjs/browser';
import { FC } from 'react';

interface Props {
	contactL: {
		contact: string[];
		btnContactMe: string;
		name: string;
		placeholderName: string;
		email: string;
		message: string;
		placeholderMessage: string;
		btnSend: string;
	};
}

const Contact: FC<Props> = ({ contactL }) => {
	const [sent, setSent] = useState(false);
	const [opened, setOpened] = useState(false);

	const navigate = useNavigate();

	const isMobile = useMediaQuery('(max-width: 600px)');

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE_ID as string,
				process.env.REACT_APP_TEMPLATE_ID as string,
				e.currentTarget,
				process.env.REACT_APP_PUBLIC_KEY as string
			)
			.then(
				(result) => {
					console.log(result.text);
					setSent(true);
					setOpened(false);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.currentTarget.reset();
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
			className="overflow-auto flex flex-col md:flex-row items-center justify-center h-full relative"
		>
			<div className="absolute top-[8rem] pb-20 px-5 space-y-8 z-10 font-medium text-5xl md:text-6xl lg:text-7xl leading-[6.5rem] tracking-wider">
				<div className="flex justify-center uppercase">
					{contactL.contact.map((item, i) => (
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
					transition={{ delay: 0.6, duration: 0.5 }}
					className="space-y-3 text-xl lg:text-2xl tracking-widest leading-[3rem]"
				>
					<a
						href="mailto:contact@sabri.dev"
						className="flex items-center space-x-3 cursor-pointer"
					>
						<AiOutlineMail />
						<p>contact@sabri.dev</p>
					</a>
					<a
						href="tel:+33651183041"
						className="flex items-center space-x-3 cursor-pointer"
					>
						<AiOutlinePhone />
						<p>0651183041</p>
					</a>
				</motion.div>

				{sent ? (
					<p className="text-sm">
						Merci pour votre message, je vous répondrai dans les
						plus brefs délais
					</p>
				) : (
					<Modal
						opened={opened}
						onClose={() => {
							setOpened(false);
						}}
						classNames={{
							modal: 'bg-[#040E1A] rounded-xl',
						}}
						fullScreen={isMobile}
					>
						<h2 className="text-center text-white text-4xl">
							{contactL.btnContactMe}
						</h2>
						<div className="mx-10 mt-16">
							<form onSubmit={sendEmail}>
								<div className="flex flex-col mb-5">
									<label
										htmlFor="user_name"
										className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
									>
										{contactL.name}
									</label>
									<input
										className="py-1 text-black text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
										id="user_name"
										name="user_name"
										type="name"
										placeholder={contactL.placeholderName}
										required
									/>
								</div>
								<div className="flex flex-col mb-6">
									<label
										htmlFor="user_email"
										className="mb-1 text-xs sm:text-sm tracking-wide text-gray-100"
									>
										E-mail
									</label>
									<input
										className="py-1 text-black text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
										id="user_email"
										name="user_email"
										type="email"
										placeholder="ex: email@exemple.com"
										required
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
										placeholder={
											contactL.placeholderMessage
										}
										// cols="10"
										// rows="2"
										required
										className="py-1 text-black text-lg font-normal rounded pl-2 border-2 focus:outline-none focus:border-green-400 focus:ring-green-500"
									/>
								</div>
								<div className="w-full flex justify-center ">
									<input
										type="submit"
										value={contactL.btnSend}
										className="hover:-translate-y-1 transition-all text-white bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
									/>
								</div>
							</form>
						</div>
					</Modal>
				)}
				{!sent && (
					<motion.button
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.5, duration: 0.5 }}
						onClick={() => setOpened(true)}
						className="hover:-translate-y-1 transition-all  bg-[#FF4D5A] tracking-widest font-semibold rounded-full py-2 px-5 text-base"
					>
						{contactL.btnContactMe}
					</motion.button>
				)}
			</div>
		</motion.div>
	);
};

export default Contact;
