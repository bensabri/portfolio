import { projectList } from '../../data/data-project';
import Projet from '../Works/Projet';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { RiArrowRightSLine, RiArrowLeftSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

const Works = () => {
	const navigate = useNavigate();

	const arrowStyles = {
		position: 'absolute',
		zIndex: 2,
		top: 'calc(50% - 15px)',
		width: 50,
		height: 50,
		cursor: 'pointer',
	};

	return (
		<motion.div
			onWheel={(e) => {
				e.deltaY >= 0 ? navigate('/aboutme') : navigate('/');
			}}
			exit={{ y: '-100vh' }}
			transition={{ delay: 0.2, duration: 0.7 }}
			className="bg- mt-24 flex flex-wrap justify-around max-w-2xl my-0 mx-auto"
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
				renderArrowPrev={(onClickHandler, hasPrev, label) =>
					hasPrev && (
						<RiArrowLeftSLine
							style={{ ...arrowStyles, left: 15 }}
							onClick={onClickHandler}
						/>
					)
				}
				renderArrowNext={(onClickHandler, hasNext, label) =>
					hasNext && (
						<RiArrowRightSLine
							style={{ ...arrowStyles, right: 15 }}
							onClick={onClickHandler}
							// className="hover:bg-gray-400 hover:opacity-20 rounded-full"
						/>
					)
				}
			>
				{projectList?.map(
					({ title, description, projectNum, image, url }, i) => (
						<Projet
							key={i}
							i={i}
							title={title}
							description={description}
							projectNum={projectNum}
							image={image}
							url={url}
						/>
					)
				)}
			</Carousel>
		</motion.div>
	);
};

export default Works;
