import React from 'react';
import {
	Center,
	UnorderedList,
	ListItem,
	Image,
	Text,
	Button,
	Box,
	Collapse,
	Heading,
} from '@chakra-ui/react';
import play from '../img/play.svg';
import pause from '../img/pause.svg';
const ListOfSongs = (props) => {
	//Show more control
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);
	return (
		<Center
			backgroundColor="#393d42"
			m={4}
			borderRadius="20px"
			pt={4}
			pl={4}
			pr={4}
			width={{ '2md': '80%', lg: '100%' }}
			maxW="919px"
			alignSelf="center"
			minW="328px"
			flexDirection="column"
		>
			<Box>
				<Text fontSize="1rem" color="brand.White">
					Songs
				</Text>
			</Box>
			<Collapse
				startingHeight="376px"
				in={show}
				style={{ width: '100%' }}
			>
				<UnorderedList m="0" w="100%">
					{props.songs.map((element, index) => {
						return (
							<ListItem
								key={index}
								display="flex"
								justifyContent="space-between"
								alignItems="center"
								mt={4}
								mb={4}
								backgroundColor="brand.White"
								borderRadius="24px"
								h="58px"
								onChange={() => {
									props.setIsPlaying(!props.isPlaying);
									console.log(props.isPlaying);
								}}
								w="100%"
							>
								<Image
									src={element.metadata.img_name.imgix_url}
									alt={element.metadata.name}
									m={4}
									h={{ base: '40px', lg: '52px' }}
									w={{ base: '40px', lg: '52px' }}
									borderRadius="9px"
								/>
								{/*mobile */}
								<Box
									display={{ '2md': 'none' }}
									width="60%"
									overflow="hidden"
									height="24px"
									margin={2}
								>
									<Heading
										textAlign="center"
										fontFamily="poppins"
										fontSize="1.25rem"
									>
										{element.metadata.name}
									</Heading>
								</Box>
								{/* descktop */}
								<Box
									display={{ base: 'none', '2md': 'block' }}
									width="60%"
								>
									<Heading
										margin={2}
										textAlign="center"
										fontFamily="poppins"
										fontSize="1.25rem"
									>
										{element.metadata.name}
									</Heading>
								</Box>
								<Button
									variant="outline"
									borderColor="#393d42"
									onClick={() => {
										props.handleIndexSong(index);
										props.setIsPlaying(!props.isPlaying);
									}}
									margin={4}
									backgroundColor="rgba(125,125,125,0)"
									alt="play/pause"
								>
									{props.currentSongIndex === index ? (
										<Image
											src={props.isPlaying ? pause : play}
											alt="play/pause"
											w="21px"
											h="17px"
										/>
									) : (
										<Image
											src={play}
											alt="play/pause"
											w="21px"
											h="17px"
										/>
									)}
								</Button>
							</ListItem>
						);
					})}
				</UnorderedList>
			</Collapse>
			<Button
				size="sm"
				onClick={handleToggle}
				mt="1rem"
				mb={6}
				alt="show more"
				fontWeight="regular"
			>
				Show {show ? 'Less' : 'More'}
			</Button>
		</Center>
	);
};

export default ListOfSongs;
