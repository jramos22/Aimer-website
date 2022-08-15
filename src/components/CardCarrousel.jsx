//react
import React from 'react';
//chajra UI
import { Box, Image } from '@chakra-ui/react';

const CardCarrousel = (props) => {
	return (
		<Box
			width={{ base: '156px', lg: '308px' }}
			h={{ base: '156px', lg: '308px' }}
			transition="all 0.5s"
			_hover={{ marginBottom: '30px' }}
			border="1px solid"
			borderRadius="20px"
			onClick={() => {
				//control the current background
				props.handleBackGround(props.img);
				//controle the songs of the each album
				props.handleSongs(props.songs);
				//control the slide to go
				props.handleIndexAlbum();
				//chek if the audio is playing or not
				props.isPlaying === false
					? props.setIsPlaying(false)
					: props.setIsPlaying(props.isPlaying);
			}}
		>
			<Image
				src={props.img}
				alt={props.name}
				width="100%"
				height="100%"
				objectFit="cover !important"
				border="1px solid #393d42"
				borderRadius="20px"
			/>
		</Box>
	);
};

export default CardCarrousel;
