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
		description: 'Site web de location de vélo',
		stack: 'vanila javascript',
		projectNum: 1,
		image: photo1,
		url: 'https://citybikev1.netlify.app',
	},
	{
		title: ['i', 'm', 'm', 'o', 'b', 'i', 'l', 'i', 'e', 'r'],
		description: 'Site web immobillier',
		stack: 'wordpress',
		projectNum: 2,
		image: photo2,
		url: 'https://jerbaimmo.com',
	},
	{
		title: ['m', 'é', 't', 'e', 'o', '-', 'l', 'i', 'v', 'e'],
		description: 'Application web méteo avec video live',
		stack: 'react',
		projectNum: 3,
		image: photo3,
		url: 'https://weather-app-livevideo.netlify.app',
	},
	{
		title: ['i', 'n', 'f', 'm', '-', 'l', 'i', 'v', 'e'],
		description:
			'Espace membre externe pour le site infm.fr qui donne accès à des vidéos de formations premium',
		stack: 'react, firebase',
		projectNum: 4,
		image: photo4,
		url: 'https://infm-live.fr',
	},
	{
		title: ['v', 'o', 't', 'e', '-', 'u', 'n', 's', 'a'],
		description: 'Application web de vote',
		stack: 'react, firebase',
		projectNum: 5,
		image: photo5,
		url: 'https://unsa-fcs.fr',
	},
	{
		title: ['c', 'r', 'e', 'p', 'e', 's'],
		description: 'Application web pour commande des crêpes',
		stack: 'nextJs, strapi, graphQl',
		projectNum: 6,
		image: photo6,
		url: 'https://crepes-ashy.vercel.app',
	},
	{
		title: ['m', 'a', 'r', 'k', 'e', 't', ' ', 'p', 'l', 'a', 'c', 'e'],
		description:
			'Ecommerce store les vendeurs proposent leurs produits en vente',
		stack: 'nextJs, strapi, graphQl',
		projectNum: 7,
		image: photo7,
		url: 'https://www.medinah-store.com',
	},
];
