//react
import React from 'react';
//chakra UI
import {
	Box,
	Image,
	Link,
	TabList,
	Tabs,
	Tab,
	TabPanels,
	TabPanel,
	Heading,
} from '@chakra-ui/react';
//images
import amazon from '../img/amazon.png';
import tower from '../img/tower.png';
import tsutaya from '../img/tsutaya.png';
import hmv from '../img/hmv.png';
import rakuten from '../img/rakuten.png';
import sony from '../img/sony.png';
import aimerStore from '../img/aimer-store.jpg';
import recochoku from '../img/recochoku.png';
import itunes from '../img/itunes.png';
import mora from '../img/mora.png';

export default function ProductsContent() {
	return (
		<Box display="flex" justifyContent="center" w="100%" minH="80vh">
			<Box w="100%" maxW="1014px">
				<Heading
					fontSize="1.5rem"
					display={{ lg: 'none' }}
					textAlign="center"
					m={8}
					color="brand.White"
				>
					PRODUCTS
				</Heading>
				<Tabs isFitted variant="enclosed">
					<TabList mb="1em" color="brand.Grey">
						<Tab
							_selected={{
								color: 'brand.White',
								borderColor: 'brand.White',
							}}
						>
							Shop
						</Tab>
						<Tab
							_selected={{
								color: 'brand.White',
								borderColor: 'brand.White',
							}}
						>
							Download
						</Tab>
					</TabList>
					<TabPanels
						display="flex"
						justifyContent="center"
						mt={{ lg: 10 }}
					>
						<TabPanel
							display="flex"
							justifyContent="center"
							flexWrap="wrap"
						>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://www.amazon.co.jp/s/ref=nb_sb_noss_1?__mk_ja_JP=%83J%83%5E%83J%83i&url=search-alias%3Dpopular&field-keywords=Aimer"
								isExternal
							>
								<Image src={amazon} alt="amazon" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://tower.jp/artist/1936852/Aimer"
								isExternal
							>
								<Image src={tower} alt="tower" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://www.tsutaya.co.jp/artist/00098769.html"
								isExternal
							>
								<Image src={tsutaya} alt="tsutaya" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://www.hmv.co.jp/artist_Aimer_000000000459768/"
								isExternal
							>
								<Image src={hmv} alt="hmv" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://books.rakuten.co.jp/event/cd/aimer/"
								isExternal
							>
								<Image src={rakuten} alt="rakuten" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://www.sonymusicshop.jp/m/arti/artiShw.php?cd=70006593"
								isExternal
							>
								<Image src={sony} alt="sony" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://aimer-store.jp/"
								isExternal
							>
								<Image src={aimerStore} alt="aimer-store" />
							</Link>
						</TabPanel>
						<TabPanel
							display="flex"
							justifyContent="center"
							flexWrap="wrap"
						>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://mora.jp/artist/57498/"
								isExternal
							>
								<Image src={mora} alt="mora" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="https://itunes.apple.com/jp/artist/id569972619"
								isExternal
							>
								<Image src={itunes} alt="itunes" />
							</Link>
							<Link
								m={4}
								w="240px"
								h="100px"
								href="http://recochoku.jp/artist/30132797/"
								isExternal
							>
								<Image src={recochoku} alt="recochoku" />
							</Link>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</Box>
	);
}
