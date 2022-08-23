//react
import React, { useEffect } from 'react';
//chakra UI
import { Box, Heading, Text, Image } from '@chakra-ui/react';
//gsap
import gsap from 'gsap';
//images
import topLeft from '../img/aimer-top-left.webp';
import topright from '../img/aimer-top-right.webp';
import botLeft from '../img/aimer-bottom-left.webp';
import botright from '../img/aimer-bottom-right.webp';
import aimergift1 from '../img/aimer-gif.gif';
import aimergift2 from '../img/aimer-gif2.gif';
import aimergift3 from '../img/aimer-gif3.gif';
import aimergift4 from '../img/aimer-gif4.gif';
import aimerPhoto from '../img/aimer-photo.webp';

export default function BiographyContent() {
	useEffect(() => {
		gsap.to('.first', {
			borderRadius: 0,
			duration: 10,
			x: '240px',
			y: '50px',
			height: '191px',
		});
		gsap.to('.second', {
			borderRadius: 0,
			duration: 10,
			x: '-220.6px',
			y: '50px',
			height: '191px',
		});
		gsap.to('.third', {
			borderRadius: 0,
			duration: 10,
			x: '240px',
			y: '-69px',
			height: '191px',
		});
		gsap.to('.fourth', {
			borderRadius: 0,
			duration: 10,
			x: '-220.6px',
			y: '-69px',
			height: '191px',
		});
		gsap.to('.img1', {
			borderRadius: 0,
			opacity: 1,
			duration: 10,
		});
		gsap.to('.img2', {
			borderRadius: 0,
			opacity: 0,
			duration: 10,
		});
	});

	return (
		<Box display="flex" justifyContent="center" p={4} w="100%">
			<Box color="brand.White" maxW="1014px" width="100%">
				<Box>
					<Heading
						fontSize="1.5rem"
						display={{ lg: 'none' }}
						textAlign="center"
					>
						BIOGRAPHY
					</Heading>
				</Box>
				<Box>
					<Box
						className="imagecontainer"
						w="960px"
						h="500px"
						position="relative"
						display={{ base: 'none', lg: 'block' }}
						m={0}
					>
						<Box
							className="first"
							w="250px"
							height="250px"
							position="absolute"
							borderRadius="100%"
							top="0px"
							left="0px"
						>
							<Image
								className="img1"
								src={topLeft}
								alt="aimer-left-top"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="0"
							/>
							<Image
								className="img2"
								src={aimergift1}
								alt="aimer-gif1"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="1"
							/>
						</Box>
						<Box
							className="box second"
							w="250px"
							height="250px"
							position="absolute"
							borderRadius="100%"
							top="0px"
							right="0px"
						>
							<Image
								className="img1"
								src={topright}
								alt="aimer-right-top"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="0"
							/>
							<Image
								className="img2"
								src={aimergift2}
								alt="aimer-gif2"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="1"
							/>
						</Box>
						<Box
							className="box third"
							w="250px"
							height="250px"
							position="absolute"
							borderRadius="100%"
							bottom="0px"
							left="0px"
						>
							<Image
								className="img1"
								src={botLeft}
								alt="aimer-left-bottom"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="0"
							/>
							<Image
								className="img2"
								src={aimergift3}
								alt="aimer-gift3"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="1"
							/>
						</Box>
						<Box
							className="box fourth"
							w="250px"
							height="250px"
							position="absolute"
							borderRadius="100%"
							bottom="0px"
							right="0px"
						>
							<Image
								className="img1"
								src={botright}
								alt="aimer-right-bottom"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="0"
							/>
							<Image
								className="img2"
								src={aimergift4}
								alt="aimer-gift4"
								w="100%"
								h="100%"
								position="absolute"
								borderRadius="100%"
								opacity="1"
							/>
						</Box>
					</Box>
					<Box
						display={{ base: 'flex', lg: 'none' }}
						justifyContent="center"
						mt={8}
						mb={8}
					>
						<Image
							src={aimerPhoto}
							alt="aimer-photo"
							width="100%"
							maxW="503px"
						/>
					</Box>
					<Box display="flex" justifyContent="center" flexWrap="wrap">
						<Box maxW="1014px">
							<Box>
								<Heading
									fontSize="1.25rem"
									textAlign="center"
									mb={4}
								>
									Aimer
								</Heading>
							</Box>
							<Box fontWeight="300">
								<Text mb={4} mt={4}>
									At the age of 15, he had an accident in
									which he suddenly lost his voice due to the
									overuse of his throat while singing. She
									made her major debut in 2011 with the single
									"Rokutosei no Yoru".
								</Text>
								<Text mb={4} mt={4}>
									In September 2016, she released her 4th
									album "daydream", which includes her
									representative song "Butterfly Knot" and
									others. In 2019, the 16th single "I beg you
									/flower petal march / Sailing”, and recorded
									the first appearance in the Oricon Weekly
									Single Ranking for the first time.
								</Text>
								<Text mb={4} mt={4}>
									In 2022, the TV anime "Kimetsu no Yaiba"
									Yukaku edition opening theme / ending theme
									"Zankyo Sanka / Asa ga Kuru" will be
									released, and will be the highest record in
									Billboard JAPAN's history for 7 weeks on
									Billboard JAPAN "JAPAN HOT 100". Consecutive
									1st place record.
								</Text>
								<Text mb={4} mt={4}>
									2011: <br />
									Single "night of a million stars” major
									debut. On December 14th, the 2nd single
									"Re:pray”, and won the silver prize in the
									music category of the photo competition
									“PX3”, which is said to be the largest photo
									competition in Europe.
								</Text>
								<Text mb={4} mt={4}>
									2012:
									<br /> 4th single "If I Don't Meet You
									~Summer Snow Winter Flower~” recorded a
									smash hit. The song was selected from
									Japanese music released in 2012 by Keisuke
									Kuwata on TOKYO FM "Keisuke Kuwata's
									Yasashii Night Play" broadcast on December
									15th of the same year (every Saturday from
									23:00 to 23:55 on JFN 38net). It was chosen
									as the 5th place among 20 famous songs. The
									following 1st album "Sleepless Nights”
									ranked 5th on the Oricon chart for the first
									time, and was nominated for the 2012 CD Shop
									Awards.
								</Text>
								<Text mb={4} mt={4}>
									2013:
									<br />
									5th single "RE:I AM EP” ranked 6th on the
									Oricon chart for the first time. On November
									20th of the same year, her first song
									written by her Mao Abe "words” mini album
									”After Dark” released.
								</Text>
								<Text mb={4} mt={4}>
									2014:
									<br /> 6th single "Star Ring Child” ranked
									3rd on the Oricon chart for the first time.
									On June 25th, the 2nd album "Midnight Sun”,
									Hiroyuki Sawano and collaboration album
									SawanoHiroyuki[nZk]: Aimer ”Unchild” was
									released at the same time, and entered the
									top 10 on the Oricon chart at the same time.
									On September 3rd, she collaborated with Yoko
									Kanno on the mini album "someone, the sea”,
									and the artwork won the semi-grand prize at
									the Music Jacket Awards 2015.
								</Text>
								<Text mb={4} mt={4}>
									2015:
									<br />
									Performed for 2 days at Yokohama Arena as a
									support act for ONE OK ROCK 2015 “35xxxv”
									JAPAN TOUR. On June 3rd, the 8th single
									"Brave Shine” was released, and in addition
									to recording No. 1 on the general single
									chart on iTunes, it also won No. 1 in Asian
									countries such as Hong Kong, Singapore,
									Indonesia, and Thailand. On July 29th, the
									3rd album "DAWN” released.
								</Text>
								<Text mb={4} mt={4}>
									2016:
									<br />
									Both A-side single "insane dream/us” will be
									released in July. In August, Yojiro Noda
									(RADWIMPS) provided and produced the 11th
									single "butterfly knot” released. And on
									September 21st, the 4th album with the
									participation of gorgeous artists "daydream”
									released.
								</Text>
								<Text mb={4} mt={4}>
									2017:
									<br />
									Her first greatest hits album on May
									3rd"blanc" "noir"2 released at the same
									time. on August 29thFirst one-man live at
									Nippon Budokanwas held, and live viewing was
									also held in 26 movie theaters nationwide
									and in Hong Kong, Taiwan, and South Korea.
								</Text>
								<Text mb={4} mt={4}>
									2018:
									<br />
									Her fifteenth single "Ref: rain/dazzling”
									released. After that, an Asian tour with
									amazarashi in a tie-bang format was held in
									4 cities in Asia, 5 performances in
									Shanghai, Taipei, Singapore, and Tokyo. In
									September, the movie "Kasane" theme song
									"Black Bird” released.
								</Text>
								<Text mb={4} mt={4}>
									2019:
									<br />
									Her 16th Single "I beg you /flower petal
									march / Sailing” and recorded her first
									appearance at No. 1 on the Oricon Weekly
									Single Ranking. 5th album on April 10th"Sun
									Dance" "Penny Rain"Released 2 at the same
									time and recorded 1st place in Billborad
									Japan "Hot Albums". On May 5th, the theme
									song for the NTV Sunday drama "Anata no
									bandesu" Aimer "STAND-ALONE” was released as
									a digital single.
								</Text>
								<Text mb={4} mt={4}>
									2020: <br />
									Her 18th single "Spring goes/ marie” and
									recorded the first appearance in the Oricon
									Weekly Digital Single Ranking. On September
									9th, the 19th single "SPARK-AGAIN” released.
								</Text>
								<Text mb={4} mt={4}>
									2021:
									<br />
									Released the 6th album “Walpurgis” on April
									14, and achieved his first triple crown in
									Billboard Japan Hot Albums, Download Albums,
									and Top Albums Sales. On December 17th,
									milet x Aimer x Lira Ikuta "Omokage
									(produced by Vaundy)", which became the
									commercial song for Sony's completely
									wireless earphone "WF-1000XM4", was released
									as a digital single.
								</Text>
								<Text mb={4} mt={4}>
									2022:
									<br />
									On January 12th, the 20th single "Zankyo
									Sanka/Asa ga Kuru", which includes the
									opening and ending themes for the TV anime
									"Kimetsu no Yaiba" red-light district arc,
									was released, and "Zankyo Sanka" was
									released on Billboard JAPAN "JAPAN". HOT
									100” recorded the highest record in
									Billboard JAPAN history for 7 consecutive
									weeks. It surpassed 100 million views in the
									fifth fastest time ever.
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
