//react
import React from 'react';
//chakra UI
import {
	Box,
	Heading,
	Text,
	Image,
	OrderedList,
	ListItem,
	Divider,
} from '@chakra-ui/react';

export default function DetailAlbumContent({ album }) {
	return (
		<Box display="flex" justifyContent="center" flexWrap="wrap">
			<Box
				minW="328px"
				w="100%"
				maxW="1014px"
				minH="331px"
				display="flex"
				flexDirection="column"
				justifyContent="space-between"
				p={4}
				background="linear-gradient(320deg, rgba(255,255,255,0) 21%, rgba(255,255,255,0.3) 100%)"
				borderRadius="16px"
				boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
				backdropFilter="blur(4.8px)"
				webkitbackdropfilter="blur(4.8px)"
				border="1px solid rgba(255, 255, 255, 0.65)"
				m={2}
				color="brand.White"
			>
				<Box>
					<Heading fontSize="1.5rem" fontFamily="popings">
						{album.metadata.name}
					</Heading>
				</Box>
				<Box>
					<Text>{album.metadata.date}</Text>
				</Box>
				<Box w="100%" display="flex" justifyContent="center">
					<Box
						w={{ base: '90%', '2md': '60%' }}
						h={{ base: '100%', '2md': '100%' }}
					>
						<Image
							src={album.metadata.img_name.imgix_url}
							w="100%"
							h="100%"
							objectFit="cover"
							borderRadius="16px"
						/>
					</Box>
				</Box>
			</Box>
			<Box w="100%" display="flex" justifyContent="center">
				<Box
					w="100%"
					maxW="1014px"
					minW="328px"
					m={2}
					background="linear-gradient(320deg, rgba(255,255,255,0) 21%, rgba(255,255,255,0.3) 100%)"
					borderRadius="16px"
					boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
					backdropFilter="blur(4.8px)"
					webkitbackdropfilter="blur(4.8px)"
					border="1px solid rgba(255, 255, 255, 0.65)"
					color="brand.White"
					p={8}
				>
					<Text textAlign="center" mb={4}>
						Songs
					</Text>
					<OrderedList display="flex" flexWrap="wrap" m={0} w="100%">
						{album.metadata.songs[0].song.map((element, index) => {
							return (
								<ListItem
									key={index}
									m="2%"
									w={{
										base: '97%',
										'2sm': '46%',
										lg: '29.3%',
									}}
									textAlign="center"
								>
									<Text
										fontWeight="bold"
										fontFamily="popings"
										fontSize="1.06rem"
									>
										{element.metadata.name}
									</Text>
									<Divider />
								</ListItem>
							);
						})}
					</OrderedList>
				</Box>
			</Box>
		</Box>
	);
}
