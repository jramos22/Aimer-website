import {
	Box,
	Flex,
	Image,
	ListItem,
	UnorderedList,
	Text,
} from '@chakra-ui/react';
import React from 'react';

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
						<Image src={twitter} alt="twitter" />
					</ListItem>
					<ListItem mr={4} ml={4}>
						<Image src={youtube} alt="youtube" />
					</ListItem>
					<ListItem mr={4} ml={4}>
						<Image src={line} alt="line" />
					</ListItem>
					<ListItem mr={4} ml={4}>
						<Image src={weibo} alt="wiebo" />
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
