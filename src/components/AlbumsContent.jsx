//react
import React from 'react';
//react-router
import { Link as ReachLink } from 'react-router-dom';
// Redux
import { useSelector } from 'react-redux';
// chakra UI
import {
	Box,
	UnorderedList,
	Heading,
	Text,
	Image,
	Spinner,
	LinkBox,
	LinkOverlay,
} from '@chakra-ui/react';

export default function AlbumsContent() {
	const Albums = useSelector((state) => state.albums);
	if (Albums.length === 0) {
		return (
			<Box display="flex" justifyContent="center">
				<Box>
					<Spinner
						thickness="4px"
						speed="0.65s"
						emptyColor="gray.200"
						color="blue.500"
						size="xl"
					/>
				</Box>
			</Box>
		);
	} else {
		return (
			<Box m={4} display="flex" justifyContent="center">
				<Box color="brand.White">
					<Box>
						<Heading
							display={{ lg: 'none' }}
							textAlign="center"
							fontFamily="popings"
						>
							ALBUMS
						</Heading>
					</Box>
					<UnorderedList
						m={0}
						mt={8}
						mb={8}
						display="flex"
						flexWrap="wrap"
						listStyleType="none"
						justifyContent="center"
						maxW="1040px"
					>
						{Albums.objects.map((element, index) => {
							return (
								<LinkBox
									as="li"
									key={index}
									w="326px"
									h="331px"
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
								>
									<Box>
										<Heading
											fontSize="1.5rem"
											fontFamily="popings"
										>
											{element.metadata.name}
										</Heading>
									</Box>
									<Box>
										<Text>{element.metadata.date}</Text>
									</Box>
									<Box
										w="100%"
										display="flex"
										justifyContent="center"
									>
										<Box w="175px" h="175px">
											<Image
												src={
													element.metadata.img_name
														.imgix_url
												}
												w="100%"
												h="100%"
												objectFit="cover"
												borderRadius="16px"
											/>
										</Box>
									</Box>
									<Box>
										<LinkOverlay
											as={ReachLink}
											to={'/albums/' + element.id}
											textDecoration="underline"
										>
											Detail Album
										</LinkOverlay>
									</Box>
								</LinkBox>
							);
						})}
					</UnorderedList>
				</Box>
			</Box>
		);
	}
}
