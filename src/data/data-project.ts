import photo2 from '../assets/jerba-immo.png';
import photo3 from '../assets/weather-live.png';
import photo4 from '../assets/infm-img.png';
import photo5 from '../assets/vote-app-img.jpg';

export const projectList = [
	{
		title: ['i', 'm', 'm', 'o', 'b', 'i', 'l', 'i', 'e', 'r'],
		description: "Conception d'un site web pour une agence immobilière",
		stack: 'wordpress',
		projectNum: 2,
		image: photo2,
		url: 'https://jerbaimmo.com',
	},
	{
		title: ['m', 'é', 't', 'e', 'o', '-', 'l', 'i', 'v', 'e'],
		description:
			"Conception d'une PWA météo avec pour fond d'écran la vidéo en direct de la ville sélectionné, seul quelque ville sont disponibles",
		stack: 'react',
		projectNum: 3,
		image: photo3,
		url: 'https://weather-app-livevideo.netlify.app',
	},
	{
		title: ['i', 'n', 'f', 'm', '-', 'l', 'i', 'v', 'e'],
		description:
			"Conception d'un espace membre externe pour le site infm.fr qui donne accès à des vidéos de formations premium",
		stack: 'react, firebase',
		projectNum: 4,
		image: photo4,
		url: 'https://voluble-cassata-5b1d2b.netlify.app/',
	},
	{
		title: ['v', 'o', 't', 'e', '-', 'u', 'n', 's', 'a'],
		description:
			"Conception d'une application web de vote pour le syndicat UNSA",
		stack: 'react, firebase',
		projectNum: 5,
		image: photo5,
		url: 'https://unsa-fcs.fr',
	},
	{
		title: ['m', 'e', 'n', 'u'],
		description:
			"Conception d'une solution de menu sans contact pour un restaurant en tunisie",
		stack: 'nextjs, sanity',
		projectNum: 6,
		image: photo5,
		url: 'https://atable-menzel.vercel.app/?table=2',
	},
];
