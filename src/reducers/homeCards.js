import { GET_HOMECARDS, NO_DATA } from '../types';
//images
import zankyosanka from '../img/zankyosanka-banner.webp';
import MiletxAimerxIkuta from '../img/aimer-milet-ikuta.webp';
import twitter from '../img/twitter.png';

const initialState = {
	cards: [
		{
			name: 'zankyosanka',
			img: zankyosanka,
			content:
				"Aimer's new song 'Zankyou Sanka (Song of Reverberation),' the opening theme song of the anime Kimetsu no Yaiba: Yuukaku-hen, topped Oricon's weekly streaming chart for the sixth time since its digital release on December 6 last year. Between February 14 and 20, it was played 10,060,949 times and has been the third consecutive week that the song has remained at the top of the chart.",
			link: 'https://www.youtube.com/watch?v=tLQLa6lM3Us',
		},
		{
			name: 'Aimer X Milet X Ikuta',
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
	News: [
		{
			title: "A live video digest of 'Aimer Hall Tour 2022 'Walpurgisnacht' Live at TOKYO GARDEN THEATER' released on 9/7 (Wed.) has been released on Aimer's Official YouTube Channel!",
			content:
				"A live video digest of 'Aimer Hall Tour 2022 'Walpurgisnacht' Live at TOKYO GARDEN THEATER' released on 9/7 (Wed.) has been released on Aimer's Official YouTube Channel!",
			date: '2022/08/14',
		},
		{
			title: "ABEMA's original romance program 'Ookami-chan to Ookami-kun won't be deceived' will finally start airing today at 22:00!",
			content:
				"Today, 8/14 (Sunday) from 22:00, ABEMA's original love program 'Ookami-chan to Ookami-kun ni kawarerawarenai' will be aired on ABEMA SPECIAL channel, where Aimer's latest song 'Oaiko' is in charge of the theme song!'Don't be fooled by Okami-chan and Okami-kun #1",
			date: '2022/08/14',
		},
		{
			title: '"Aimer 10th Anniversary Final "Cycle de 10 ans"" Spotify FANS FIRST Ticket Advance Information',
			content:
				"Advance tickets for 'Aimer 10th Anniversary Final 'Cycle de 10 ans'', which will start in October, are now available for lottery reception for those who are listening on Spotify.",
			date: '2022/08/08',
		},
		{
			title: "Aimer's new song  'Oaiko' has been selected as the theme song for the newest work in the ABEMA original romance program 'Wolf' series 'Ookami-chan to Ookami-kun ni wa Tawarenai'!",
			content:
				"Aimer's new song 'Oaiko' has been selected as the theme song for the newest work in the ABEMA original romance program 'Wolf' series 'Ookami-chan to Ookami-kun ni wa Tawarenai', which will start airing at 10:00 p.m. on Sunday, August 14!",
			date: '022/08/02',
		},
		{
			title: "Aimer Hall Tour 2022 'Walpurgisnacht' Live at TOKYO GARDEN THEATER' artwork and recorded contents released!",
			content:
				"A live video work of 'Aimer Hall Tour 2022 'Walpurgisnacht'', the final performance of Aimer's nationwide tour, held at Tokyo Garden Theater on Thursday, June 16, 2022, which will be released on September 7 (Wednesday). The artwork and recorded contents of the third 'Aimer Hall Tour 2022 'Walpurgisnacht' Live at TOKYO GARDEN THEATER' have been released!",
			date: '2022/08/01',
		},
		{
			title: '"Aimer 10th Anniversary Final "Cycle de 10 ans"" LAWSON TICKET PRELIQUE 2nd Pre-Registration Information',
			content:
				'From today, we have started accepting the second pre-request for Lawson Ticket pre-request for "Aimer 10th Anniversary Final "Cycle de 10 ans"".Anyone can apply for Lawson WEB free membership registration.',
			date: '2022/07/25',
		},
		{
			title: '"Aimer 10th Anniversary Final "Cycle de 10 ans"" LAWSON TICKET PRELIQUE PRE-ORDER INFORMATION',
			content:
				'From today, we have started accepting pre-requests for Lawson tickets for "Aimer 10th Anniversary Final "Cycle de 10 ans"".   Anyone can apply for Lawson WEB free membership registration.',
			date: '2022/07/14',
		},
		{
			title: "Aimer's 'Zankyo Sanka' surpasses 200 million streaming views!",
			content:
				'"Zankyo Sanka" recorded 4,014,000 weekly views in the latest "Oricon Weekly Streaming Ranking (with 2022/7/18)" announced on 7/13 (Wednesday), and the cumulative number of views reached 200 million. breakthrough!It has surpassed 200 million views in the 31st week since it first appeared on the Oricon Weekly Streaming Rankings on December 20, 2021, and is the second female solo artist in history with the “shortest record for the number of weeks to exceed 200 million views”. It was a breakthrough at the speed of!',
			date: '2022/07/13',
		},
		{
			title: 'Aimer won the first place in the artist ranking in the Recochoku first half ranking 2022!',
			content:
				'Aimer won first place in the artist ranking of "Recochoku First Half Ranking 2022"!In addition, Aimer “Zankyo Sanka” will be played in the download category “Single Ranking” and “Hi-Res Single Ranking” in the “RecoChoku First Half Ranking 2022” and the streaming category “RecoChoku First Half Subscription Ranking 2022” and “d Hits First Half Ranking 2022”. Won 1st place in ranking!',
			date: '2022/07/08',
		},
		{
			title: '"Aimer 10th Anniversary Final "Cycle de 10 ans"" Ticket FC 2nd advance reception information',
			content:
				'From today, we have started accepting the second advance ticket for members of [Aimer Official Fan Club “Blanc et Noir”] for “Aimer 10th Anniversary Final “Cycle de 10 ans””. Even if you are not a FC member yet, you can apply as a new member during the acceptance period.',
			date: '2022/06/30',
		},
		{
			title: '"Kataomoi", "Re:frain" and "Brave Shine" are now available on 360 Reality Audio!',
			content:
				'"Kataomoi" / "Re:frain" / "Brave Shine" are now available on "360 Reality Audio" using Sony`s 360 stereophonic technology!',
			date: '2022/06/30',
		},
		{
			title: 'In the Oricon first half ranking 2022, "Zankyo Sanka" won the first place in the digital single (single song) ranking!',
			content:
				'"Zankyo Sanka" won first place in the "digital single (single song) ranking" and "streaming ranking" of the Oricon first half ranking 2022 "sales category by work"!',
			date: '2022/06/29',
		},
		{
			title: 'Aimer will appear at "Anime Village (in Jeddah Season 2022)" to be held in Jeddah, Saudi Arabia!',
			content:
				'Aimer will appear at the event “Anime Village (Jeddah Season 2022)” held in Jeddah, Saudi Arabia! Aimer will appear on 6/29 (Wednesday) local time!',
			date: '2022/06/24',
		},
		{
			title: 'Aimer`s latest song "wavy flow" music video released on YouTube!',
			content:
				'The music video for the 5th anniversary theme song "wavy flow" for the smartphone app game "Azur Lane", which was released in China in May 2017 and is celebrating its 5th anniversary this year, will be released on Aimer`s Official YouTube Channel on Thursday, June 17th. Published! Aimer`s latest 5th anniversary theme song "wavy flow" is a middle number reminiscent of the ocean, blending the world of the game into the world of Aimer.',
			date: '2022/06/17',
		},
		{
			title: 'Arena tour "Aimer 10th Anniversary Final `Cycle de 10 ans`" will be held!',
			content:
				'"Aimer 10th Anniversary Final `Cycle de 10 ans`" has been decided. From today, [Aimer Official Fan Club “Blanc et Noir”] members-only ticket pre-registration has started. Even if you are not a FC member yet, you can apply as a new member during the acceptance period.',
			date: '2022/06/16',
		},
		{
			title: 'Live video work "Aimer Hall Tour 2022 `Walpurgisnacht` Live at TOKYO GARDEN THEATER" will be released!',
			content:
				'The final performance "Aimer Hall Tour 2022 `Walpurgisnacht`" of Aimer`s nationwide tour, held at Tokyo Garden Theater on Thursday, June 16, 2022, will be the third live video work of Aimer on September 7th. We have decided to release it on Wednesday!',
			date: '2022/06/16',
		},
		{
			title: '"Aimer Hall Tour 2022 `Walpurgisnacht` Live at TOKYO GARDEN THEATER" purchaser benefits decided!',
			content:
				'"Aimer Hall Tour 2022 `Walpurgisnacht` Live at TOKYO GARDEN THEATER" purchaser benefits Those who purchase "Aimer Hall Tour 2022 `Walpurgisnacht` Live at TOKYO GARDEN THEATER" at the target stores and online shops will receive the following benefits on a first-come, first-served basis. In addition, the number of each benefit is limited, so it will end as soon as it runs out. Please reserve and purchase early!',
			date: '2022/06/16',
		},
		{
			title: '"SWEET LOVE SHOWER 2022" appearance decision!',
			content:
				'Aimer will appear at "SWEET LOVE SHOWER 2022"! Aimer will appear on Saturday, August 27th.',
			date: '2022/06/15',
		},
		{
			title: 'On [Billboard JAPAN HOT100], "Zankyo Sanka" won the top overall chart for the first half of 2022!',
			content:
				'"Zankyo Sanka" won the overall top spot on the comprehensive song chart [Billboard JAPAN HOT100] on the Billboard JAPAN chart for the first half of 2022! Aimer 2022 first half overall song win commemorative comment === I`m just happy that so many people listened to this song. From now on, I want to continue to pursue music and stand on a stage that I have never experienced, and I want to continue to deliver songs to each and every person who listens as long as this voice comes out. ===',
			date: '2022/06/10',
		},
		{
			title: 'Aimer`s latest song "wavy flow" is now available for download and streaming!',
			content:
				'The 5th anniversary theme song "wavy flow" for the smartphone app game "Azur Lane" will be released today, 6/3 (Fri.) !Aimer "wavy flow"',
			date: '2022/06/03',
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
