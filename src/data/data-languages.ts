import photo2 from '../assets/jerba-immo.png';
import photo3 from '../assets/weather-live.png';
import photo4 from '../assets/infm-img.png';
import photo5 from '../assets/vote-app-img.jpg';

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
				title: ['r', 'e', 'a', 'l', '-', 'e', 's', 't', 'a', 't', 'e'],
				description:
					'Create a real estate web site located in Djerba Tunisia',
				stack: 'wordpress',
				projectNum: 1,
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
				projectNum: 2,
				image: photo3,
				url: 'https://weather-app-livevideo.netlify.app',
				btn: 'Visit',
			},
			{
				title: ['i', 'n', 'f', 'm', '-', 'l', 'i', 'v', 'e'],
				description:
					'External member area for the infm.fr site which gives access to premium training videos',
				stack: 'react, firebase',
				projectNum: 3,
				image: photo4,
				url: 'https://voluble-cassata-5b1d2b.netlify.app',
				btn: 'Visit',
			},
			{
				title: ['v', 'o', 't', 'e', '-', 'a', 'p', 'p'],
				description:
					'Create a voting web app for UNSA syndicat based in france',
				stack: 'react, firebase',
				projectNum: 4,
				image: photo5,
				url: 'https://unsa-fcs.fr',
				btn: 'Visit',
			},
		],
		worksFr: [
			{
				title: ['i', 'm', 'm', 'o', 'b', 'i', 'l', 'i', 'e', 'r'],
				description:
					"Conception d'un site web pour une agence immobilière",
				stack: 'wordpress',
				projectNum: 1,
				image: photo2,
				url: 'https://jerbaimmo.com',
				btn: 'Visiter',
			},
			{
				title: ['m', 'é', 't', 'e', 'o', '-', 'l', 'i', 'v', 'e'],
				description:
					"Conception d'une PWA météo avec pour fond d'écran la vidéo en direct de la ville sélectionné, seul quelque ville sont disponibles",
				stack: 'react',
				projectNum: 2,
				image: photo3,
				url: 'https://weather-app-livevideo.netlify.app',
				btn: 'Visiter',
			},
			{
				title: ['i', 'n', 'f', 'm', '-', 'l', 'i', 'v', 'e'],
				description:
					"Conception d'un espace membre externe pour le site infm.fr qui donne accès à des vidéos de formations premium",
				stack: 'react, firebase',
				projectNum: 3,
				image: photo4,
				url: 'https://voluble-cassata-5b1d2b.netlify.app',
				btn: 'Visiter',
			},
			{
				title: ['v', 'o', 't', 'e', '-', 'u', 'n', 's', 'a'],
				description:
					"Conception d'une application web de vote pour le syndicat UNSA",
				stack: 'react, firebase',
				projectNum: 4,
				image: photo5,
				url: 'https://unsa-fcs.fr',
				btn: 'Visiter',
			},
		],
	},
];
