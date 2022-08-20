//react
import React from 'react';
//chakra UI
import {
	Box,
	Flex,
	Image,
	ListItem,
	UnorderedList,
	Text,
} from '@chakra-ui/react';
//Images
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import line from '../img/line.png';
import weibo from '../img/weibo.png';

export default function Footer() {
	return (
		<Flex
			bg="brand.header"
			h={{ base: '111px', lg: '128px' }}
			flexDirection="column"
		>
			<Box
				display="flex"
				justifyContent="center"
				width="100%"
				h="34px"
				mt={5}
			>
				<UnorderedList
					color="brand.White"
					display="flex"
					listStyleType="none"
					ml={0}
					justifyContent="space-between"
				>
					<ListItem mr={4} ml={4}>
						<a
							href="https://twitter.com/Aimer_and_staff"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={twitter}
								alt="twitter"
								w="100%"
								h="100%"
							/>
						</a>
					</ListItem>
					<ListItem mr={4} ml={4}>
						<a
							href="https://www.youtube.com/user/aimerSMEJ"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={youtube}
								alt="youtube"
								w="100%"
								h="100%"
							/>
						</a>
					</ListItem>
					<ListItem mr={4} ml={4}>
						<a
							href="https://line.me/ti/p/%40aimer"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={line} alt="line" w="100%" h="100%" />
						</a>
					</ListItem>
					<ListItem mr={4} ml={4}>
						<a
							href="https://weibo.com/u/7704697388"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={weibo} alt="wiebo" w="100%" h="100%" />
						</a>
					</ListItem>
				</UnorderedList>
			</Box>
			<Box>
				<Text
					color="brand.White"
					textAlign="center"
					mt={6}
					fontSize="0.75rem"
				>
					Designed & buiilded by José Ramos Barquero
				</Text>
			</Box>
		</Flex>
	);
}
