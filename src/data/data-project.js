import photo1 from '../assets/city-bikev1.png';
import photo2 from '../assets/jerba-immo.png';
import photo3 from '../assets/weather-live.png';
import photo4 from '../assets/infm-img.png';
import photo5 from '../assets/vote-app-img.jpg';
import photo6 from '../assets/pomme-de-pain-crepes.png';
import photo7 from '../assets/medinah-1.png';

export const projectList = [
	{
		title: ['c', 'i', 't', 'y', ' ', 'b', 'i', 'k', 'e'],
		description:
			"Conception d'un site web interactif de location de vélos via une carte des stations libre",
		stack: 'vanila javascript',
		projectNum: 1,
		image: photo1,
		url: 'https://citybikev1.netlify.app',
	},
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
		url: 'https://infm-live.fr',
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
		title: ['c', 'r', 'e', 'p', 'e', 's'],
		description:
			"Conception d'une application web pour commande des crêpes et payer en ligne",
		stack: 'nextJs, strapi, graphQl',
		projectNum: 6,
		image: photo6,
		url: 'https://crepes-ashy.vercel.app',
	},
	{
		title: ['m', 'a', 'r', 'k', 'e', 't', ' ', 'p', 'l', 'a', 'c', 'e'],
		description:
			"Conception d'un site web ecommerce où les vendeurs s'inscrivent et proposent leurs produits à la vente",
		stack: 'nextJs, strapi, graphQl',
		projectNum: 7,
		image: photo7,
		url: 'https://www.medinah-store.com',
	},
];
