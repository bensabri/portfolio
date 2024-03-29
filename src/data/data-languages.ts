import photo1 from '../assets/city-bikev1.png';
import photo2 from '../assets/jerba-immo.png';
import photo3 from '../assets/weather-live.png';
import photo4 from '../assets/infm-img.png';
import photo5 from '../assets/vote-app-img.jpg';
import photo6 from '../assets/pomme-de-pain-crepes.png';
import photo7 from '../assets/medinah-1.png';

export const navBarLang = [
	{
		navEng: {
			home: 'Home',
			works: 'Works',
			aboutMe: 'AboutMe',
			contact: 'Contact',
		},
		navFr: {
			home: 'Accueil',
			works: 'Projets',
			aboutMe: 'Profil',
			contact: 'Contact',
		},
	},
];

export const contactLang = [
	{
		contactEng: {
			contact: ['c', 'o', 'n', 't', 'a', 'c', 't'],
			btnContactMe: 'Contact me',
			name: 'Name',
			placeholderName: 'Your name',
			email: 'Email',
			message: 'Message',
			placeholderMessage: 'Your message',
			btnSend: 'Send',
		},
		contactFr: {
			contact: ['c', 'o', 'n', 't', 'a', 'c', 't'],
			btnContactMe: 'Me contacter',
			name: 'Nom',
			placeholderName: 'Votre nom',
			email: 'Email',
			message: 'Message',
			placeholderMessage: 'Votre message',
			btnSend: 'Envoyer',
		},
	},
];

export const aboutMeLang = [
	{
		aboutEng: {
			title: ['a', 'b', 'o', 'u', 't', ' ', 'm', 'e'],
		},
		aboutFr: {
			title: ['p', 'r', 'o', 'f', 'i', 'l'],
		},
	},
];

export const projectListLang = [
	{
		worksEng: [
			{
				title: ['c', 'i', 't', 'y', ' ', 'b', 'i', 'k', 'e'],
				description: 'Create a web app to order bikes via a map',
				stack: 'vanila javascript',
				projectNum: 1,
				image: photo1,
				url: 'https://citybikev1.netlify.app',
				btn: 'Visit',
			},
			{
				title: ['r', 'e', 'a', 'l', '-', 'e', 's', 't', 'a', 't', 'e'],
				description:
					'Create a real estate web site located in Djerba Tunisia',
				stack: 'wordpress',
				projectNum: 2,
				image: photo2,
				url: 'https://jerbaimmo.com',
				btn: 'Visit',
			},
			{
				title: [
					'w',
					'e',
					'a',
					't',
					'h',
					'e',
					'r',
					'-',
					'l',
					'i',
					'v',
					'e',
				],
				description:
					'Create a PWA weather app with a background video live of the city selected, only a few cities are available with video live',
				stack: 'react',
				projectNum: 3,
				image: photo3,
				url: 'https://weather-app-livevideo.netlify.app',
				btn: 'Visit',
			},
			{
				title: ['i', 'n', 'f', 'm', '-', 'l', 'i', 'v', 'e'],
				description:
					'External member area for the infm.fr site which gives access to premium training videos',
				stack: 'react, firebase',
				projectNum: 4,
				image: photo4,
				url: 'https://infm-live.fr',
				btn: 'Visit',
			},
			{
				title: ['v', 'o', 't', 'e', '-', 'a', 'p', 'p'],
				description:
					'Create a voting web app for UNSA syndicat based in france',
				stack: 'react, firebase',
				projectNum: 5,
				image: photo5,
				url: 'https://unsa-fcs.fr',
				btn: 'Visit',
			},
			{
				title: ['c', 'r', 'e', 'p', 'e', 's'],
				description:
					'Create an ordering web app to choose your crepes in the restaurant customise the ingredients and pay it online.',
				stack: 'nextJs, strapi, graphQl',
				projectNum: 6,
				image: photo6,
				url: 'https://crepes-ashy.vercel.app',
				btn: 'Visit',
			},
			{
				title: [
					'm',
					'a',
					'r',
					'k',
					'e',
					't',
					' ',
					'p',
					'l',
					'a',
					'c',
					'e',
				],
				description:
					'An e-commerce market place where sellers can add their product in the database via the admin panel, then the administrator of the e-commerce decides whether to publish the product or not.',
				stack: 'nextJs, strapi, graphQl',
				projectNum: 7,
				image: photo7,
				url: 'https://www.medinah-store.com',
				btn: 'Visit',
			},
		],
		worksFr: [
			{
				title: ['c', 'i', 't', 'y', ' ', 'b', 'i', 'k', 'e'],
				description:
					"Conception d'un site web interactif de location de vélos via une carte des stations libre",
				stack: 'vanila javascript',
				projectNum: 1,
				image: photo1,
				url: 'https://citybikev1.netlify.app',
				btn: 'Visiter',
			},
			{
				title: ['i', 'm', 'm', 'o', 'b', 'i', 'l', 'i', 'e', 'r'],
				description:
					"Conception d'un site web pour une agence immobilière",
				stack: 'wordpress',
				projectNum: 2,
				image: photo2,
				url: 'https://jerbaimmo.com',
				btn: 'Visiter',
			},
			{
				title: ['m', 'é', 't', 'e', 'o', '-', 'l', 'i', 'v', 'e'],
				description:
					"Conception d'une PWA météo avec pour fond d'écran la vidéo en direct de la ville sélectionné, seul quelque ville sont disponibles",
				stack: 'react',
				projectNum: 3,
				image: photo3,
				url: 'https://weather-app-livevideo.netlify.app',
				btn: 'Visiter',
			},
			{
				title: ['i', 'n', 'f', 'm', '-', 'l', 'i', 'v', 'e'],
				description:
					"Conception d'un espace membre externe pour le site infm.fr qui donne accès à des vidéos de formations premium",
				stack: 'react, firebase',
				projectNum: 4,
				image: photo4,
				url: 'https://infm-live.fr',
				btn: 'Visiter',
			},
			{
				title: ['v', 'o', 't', 'e', '-', 'u', 'n', 's', 'a'],
				description:
					"Conception d'une application web de vote pour le syndicat UNSA",
				stack: 'react, firebase',
				projectNum: 5,
				image: photo5,
				url: 'https://unsa-fcs.fr',
				btn: 'Visiter',
			},
			{
				title: ['c', 'r', 'e', 'p', 'e', 's'],
				description:
					"Conception d'une application web pour commande des crêpes et payer en ligne",
				stack: 'nextJs, strapi, graphQl',
				projectNum: 6,
				image: photo6,
				url: 'https://crepes-ashy.vercel.app',
				btn: 'Visiter',
			},
			{
				title: [
					'm',
					'a',
					'r',
					'k',
					'e',
					't',
					' ',
					'p',
					'l',
					'a',
					'c',
					'e',
				],
				description:
					"Conception d'un site web ecommerce où les vendeurs s'inscrivent et proposent leurs produits à la vente",
				stack: 'nextJs, strapi, graphQl',
				projectNum: 7,
				image: photo7,
				url: 'https://www.medinah-store.com',
				btn: 'Visiter',
			},
		],
	},
];
