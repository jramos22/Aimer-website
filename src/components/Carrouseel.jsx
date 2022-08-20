//React
import React, { useState, useEffect } from 'react';
//react-redux
import { useSelector } from 'react-redux';
//components
import CardCarrousel from './CardCarrousel';
import MusicPlayerControlles from './PlayerControl';
import CarrouseelContainer from './CarrouseelContainer';
//chakra UI
import { Box, Spinner } from '@chakra-ui/react';

export default function Carrouseel() {
	// get state of redux
	const state = useSelector((state) => state);
	//const where I have the carousel albums
	const [slides, setSlides] = useState([]);
	//const to set the background-image
	const [background, setBackground] = useState(
		'https://imgix.cosmicjs.com/b1a18650-200d-11ed-a5bd-ef15a2e468ca-1200x1200bf-60.webp'
	);
	//const where I have the songs of each album
	const [songs, setSongs] = useState([]);
	//const to know if the song is playing or not
	const [isPlaying, setIsPlaying] = useState(false);
	//const to control the index of song of each album
	const [currentSongIndex, setCurrentSongIndex] = useState(0);
	//const to control the next song
	const [nextSong, setNextSong] = useState(currentSongIndex + 1);

	//set the current background-image
	const handleBackGround = (newBackground) => {
		setBackground(newBackground);
	};
	//set the current songs
	const handleSongs = (NewSongs) => {
		setSongs(NewSongs);
	};
	//set the current index songs of the each album
	const handleIndexSong = (indexSong) => {
		setCurrentSongIndex(indexSong);
	};
	//when album change set the indexSong to zero
	const handleIndexAlbum = () => {
		setCurrentSongIndex(0);
	};
	useEffect(() => {
		//check if have a initial state
		if (state.albums.length === 0) {
		} else {
			//chek if have a initial array of songs and set it
			if (songs.length === 0) {
				setSongs(state.albums.objects[0].metadata.songs[0].song);
			} else {
			}
			//visit the state to give each slides with each album
			state.albums.objects.map((element, index) => {
				const album = {
					key: index,
					content: (
						<CardCarrousel
							img={element.metadata.img_name.imgix_url}
							name={element.metadata.name}
							handleBackGround={handleBackGround}
							handleSongs={handleSongs}
							songs={element.metadata.songs[0].song}
							handleIndexAlbum={handleIndexAlbum}
							setIsPlaying={setIsPlaying}
							isPlaying={isPlaying}
						/>
					),
					background: element.metadata.img_name.imgix_url,
				};
				return setSlides((slides) => [...slides, album]);
			});
			//set the previous or next song with the current index song
			setNextSong(() => {
				if (currentSongIndex + 1 > songs.length - 1) {
					return 0;
				} else {
					return currentSongIndex + 1;
				}
			});
		}
	}, [state, currentSongIndex]);
	if (songs.length === 0) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				backgroundColor="rgb(0,0,0)"
			>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</Box>
		);
	} else if (songs !== 0) {
		return (
			<Box
				backgroundImage={background}
				backgroundRepeat="no-repeat"
				backgroundSize="cover"
				backgroundPosition="center"
			>
				<Box
					pt={{ base: '50px' }}
					pb={{ base: '50px' }}
					display="flex"
					flexDirection="column"
					style={{
						background: 'rgba(255, 255, 255, 0.17)',
						boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
						backdropFilter: 'blur(3.2px)',
						WebkitBackdropFilter: 'blur(3.2px)',
					}}
				>
					<Box
						h={{ base: '156px', lg: '306px' }}
						mb={{ base: '50px' }}
						width={{ lg: '100%' }}
						alignSelf={{ lg: 'center' }}
					>
						<CarrouseelContainer
							height="100%"
							width="100%"
							margin="0 auto"
							offset={2}
							slides={slides}
							handleBackGround={setBackground}
							handleSongs={handleSongs}
							setIsPlaying={setIsPlaying}
						/>
					</Box>
					<MusicPlayerControlles
						currentSongIndex={currentSongIndex}
						setCurrentSongIndex={setCurrentSongIndex}
						nextSong={nextSong}
						songs={songs}
						handleIndexSong={handleIndexSong}
						setIsPlaying={setIsPlaying}
						isPlaying={isPlaying}
					/>
				</Box>
			</Box>
		);
	}
}
