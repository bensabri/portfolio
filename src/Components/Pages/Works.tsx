import Projet from '../Works/Projet';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

interface Props {
	worksL: {
		title: string[];
		description: string;
		stack: string;
		projectNum: number;
		image: string;
		url: string;
		btn: string;
	}[];
}

const Works: FC<Props> = ({ worksL }) => {
	const navigate = useNavigate();

	const arrowStyles = {
		// Needs testing
		// position: 'absolute',
		zIndex: 2,
		top: 'calc(50% - 15px)',
		width: 50,
		height: 50,
		cursor: 'pointer',
	};

	return (
		<div
			onWheel={(e) => {
				e.deltaY >= 0 ? navigate('/aboutme') : navigate('/');
			}}
			className="h-full flex justify-center items-center"
		>
			<motion.div
				exit={{ opacity: 0 }}
				transition={{ delay: 0.2, duration: 0.5 }}
				className="w-full  max-w-2xl py-6 my-0"
			>
				<Carousel
					showIndicators={false}
					showStatus={false}
					showArrows={true}
					showThumbs={false}
					interval={5000}
					transitionTime={1000}
					centerMode={false}
					swipeable={true}
					renderArrowPrev={(onClickHandler, hasPrev) =>
						hasPrev && (
							<RiArrowLeftSLine
								style={{
									...arrowStyles,
									left: 15,
									position: 'absolute',
								}}
								onClick={onClickHandler}
							/>
						)
					}
					renderArrowNext={(onClickHandler, hasNext) =>
						hasNext && (
							<RiArrowRightSLine
								style={{
									...arrowStyles,
									right: 15,
									position: 'absolute',
								}}
								onClick={onClickHandler}
								// className="hover:bg-gray-400 hover:opacity-20 rounded-full"
							/>
						)
					}
				>
					{worksL?.map(
						(
							{
								title,
								description,
								projectNum,
								image,
								url,
								stack,
								btn,
							},
							i
						) => (
							<Projet
								key={i}
								title={title}
								description={description}
								stack={stack}
								projectNum={projectNum}
								image={image}
								url={url}
								btn={btn}
							/>
						)
					)}
				</Carousel>
			</motion.div>
		</div>
	);
};

export default Works;
