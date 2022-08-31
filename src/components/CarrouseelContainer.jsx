//react
import React, { useState, useEffect } from 'react';
//carousel 3d
import Carousel from 'react-spring-3d-carousel';
//chakra UI/Icons
import { Button, Box, Text, Heading } from '@chakra-ui/react';
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons';

function CarrouseelContainer(props) {
	//initial slide
	let goSlide = 0;
	//const where have slides
	const slides = props.slides;
	//const where It give the onclick funtion to set a index and go to that index
	const table = slides.map((element, index) => {
		return { ...element, onClick: () => setGoToSlide(index) };
	});
	//control the radius of slide container
	const [offsetRadius, setOffsetRadius] = useState(2);
	//control if show the arrows or not
	const [showArrows, setShowArrows] = useState(false);
	//control index to go to the slide
	const [goToSlide, setGoToSlide] = useState(0);

	//set the optional props
	useEffect(() => {
		setOffsetRadius(props.offset);
		setShowArrows(props.showArrows);
	}, [props.offset, props.showArrows]);

	return (
		<div
			style={{
				width: props.width,
				height: props.height,
				margin: props.margin,
				color: 'black',
				display: 'flex',
				flexWrap: 'wrap',
			}}
		>
			<Carousel
				slides={table}
				goToSlide={goToSlide}
				offsetRadius={offsetRadius}
				showNavigation={showArrows}
			/>
			<Box width="100%" display="flex" justifyContent="center" mt={4}>
				<Box
					backgroundColor="#393d42"
					width="328px"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
					color="brand.White"
					p={4}
					borderRadius="20px"
					flexWrap="wrap"
				>
					<Text width="100%" textAlign="center" fontSize="1rem">
						Albums
					</Text>
					<Button
						onClick={() => {
							//control the slide to go
							goToSlide <= 0
								? (goSlide = slides.length - 1)
								: (goSlide = goToSlide - 1);
							setGoToSlide(goSlide);
							//set the songs of the album
							props.handleSongs(
								props.slides[goSlide].content.props.songs
							);
							//set the current background-image
							props.handleBackGround(
								props.slides[goSlide].content.props.img
							);
							//control if audio is playing or not
							props.isPlaying === false
								? props.setIsPlaying(false)
								: props.setIsPlaying(props.isPlaying);
						}}
						alt="Arrow Left"
					>
						<ArrowLeftIcon color="Black" alt="Arrow Left" />
					</Button>
					<Heading
						fontSize="1.50rem"
						letterSpacing={1}
						fontFamily="popings"
					>
						{props.slides[goToSlide].content.props.name}
					</Heading>
					<Button
						onClick={() => {
							//control the slide to go
							goToSlide === slides.length - 1
								? (goSlide = 0)
								: (goSlide = goToSlide + 1);
							setGoToSlide(goSlide);
							//set the songs of the album
							props.handleSongs(
								props.slides[goSlide].content.props.songs
							);
							//set the current background-image
							props.handleBackGround(
								props.slides[goSlide].content.props.img
							);
							//control if audio is playing or not
							props.isPlaying === false
								? props.setIsPlaying(false)
								: props.setIsPlaying(props.isPlaying);
						}}
						alt="Arrow Right"
					>
						<ArrowRightIcon color="Black" alt="Arrow Right" />
					</Button>
				</Box>
			</Box>
		</div>
	);
}

export default CarrouseelContainer;
