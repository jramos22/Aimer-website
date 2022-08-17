import { GET_HOMECARDS, NO_DATA } from '../types';
//images
import zankyosanka from '../img/zankyosanka-banner.jpg';
import MiletxAimerxIkuta from '../img/aimer-milet-ikuta.jpg';
import twitter from '../img/twitter.png';

const initialState = {
	cards: [
		{
			img: zankyosanka,
			content:
				"Aimer's new song 'Zankyou Sanka (Song of Reverberation),' the opening theme song of the anime Kimetsu no Yaiba: Yuukaku-hen, topped Oricon's weekly streaming chart for the sixth time since its digital release on December 6 last year. Between February 14 and 20, it was played 10,060,949 times and has been the third consecutive week that the song has remained at the top of the chart.",
			link: 'https://www.youtube.com/watch?v=tLQLa6lM3Us',
		},
		{
			img: MiletxAimerxIkuta,
			content:
				'Popular YouTube channel THE FIRST TAKE has released an announcement on their official Twitter account, featuring a never-before-seen collaboration between three famous Japanese artists: milet, Aimer, and Ikuta Lilas from YOASOBI. ',
			link: 'https://www.youtube.com/watch?v=Z2Z9V-4DMGw',
		},
	],
	topics: [
		{
			content:
				"A live video digest of 'Aimer Hall Tour 2022 'Walpurgisnacht' Live at TOKYO GARDEN THEATER' released on 9/7 (Wed.) has been released on Aimer's Official YouTube Channel!",
			date: '2022/08/14',
			image: twitter,
		},
		{
			content:
				"ABEMA's original romance program 'Ookami-chan to Ookami-kun won't be deceived' will finally start airing today at 22:00!",
			date: '2022/08/14',
			image: twitter,
		},
		{
			content:
				"'Aimer 10th Anniversary Final 'Cycle de 10 ans' 'Spotify FANS FIRST Ticket Advance Information",
			date: '2022/08/08',
			image: twitter,
		},
		{
			content:
				"Aimer's new song 'Oaiko' has been selected as the theme song for the newest work in the ABEMA original romance program 'Wolf' series 'Ookami-chan to Ookami-kun ni wa Tawarenai'!",
			date: '2022/08/02',
			image: twitter,
		},
	],
};

export function getInfoCards(state = initialState, action) {
	switch (action.type) {
		case GET_HOMECARDS:
			return action.payload;
		case NO_DATA:
			return initialState;
		default:
			return state;
	}
}
