import { projectList } from '../../data/data-project';
import Projet from '../Works/Projet';
import { useNavigate } from 'react-router-dom';

const Works = () => {
	const navigate = useNavigate();

	return (
		<div
			onWheel={(e) => {
				e.deltaY === 125 ? navigate('/aboutme') : navigate('/');
			}}
			className="flex h-[38rem] space-x-5 mt-14 overflow-hidden"
		>
			{projectList?.map(
				({ title, description, projectNum, image, url }, i) => (
					<Projet
						key={i}
						title={title}
						description={description}
						projectNum={projectNum}
						image={image}
						url={url}
					/>
				)
			)}
		</div>
	);
};

export default Works;
