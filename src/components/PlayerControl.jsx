//react
import React, { useEffect, useRef, useState } from 'react';
//chakra UI
import {
	Center,
	Box,
	Image,
	Button,
	Text,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Heading,
} from '@chakra-ui/react';
//components
import ListOfSongs from './ListofSongs';
//imgs
import prev from '../img/prev.svg';
import play from '../img/play.svg';
import pause from '../img/pause.svg';
import next from '../img/next.svg';

const MusicPlayerControlles = (props) => {
	//const where it have the current audio
	const audioEl = useRef(null);
	//const where It have the current percent
	const [percent, setPercent] = useState(0);
	//const where It have the current time
	const [time, setTime] = useState('00:00');
	//const where It have the total time of each audios
	const [totalTime, setTotalTime] = useState('00:00');

	//switch between play and stop
	useEffect(() => {
		if (props.isPlaying) {
			audioEl.current.play();
		} else {
			audioEl.current.pause();
		}
	});

	//set the next or previous song
	const SkipSong = (forwards = true) => {
		if (forwards) {
			props.setCurrentSongIndex(() => {
				let temp = props.currentSongIndex;
				temp++;

				if (temp > props.songs.length - 1) {
					temp = 0;
				}
				return temp;
			});
		} else {
			props.setCurrentSongIndex(() => {
				let temp = props.currentSongIndex;
				temp--;

				if (temp < 0) {
					temp = props.songs.length - 1;
				}
				return temp;
			});
		}
	};
	//add number zero if necessary
	const addZeroIfIsNeeded = (value) => {
		if (value < 10) {
			return '0' + value;
		} else {
			return '' + value;
		}
	};
	//Transform seconds to minuts and second in this format '00:00'
	const timeTransform = (seconds) => {
		const minuts = Math.floor((seconds / 60) % 60);
		const second = seconds % 60;
		if (seconds === '00:00') {
			return '00:00';
		} else {
			return `${addZeroIfIsNeeded(minuts)}:${addZeroIfIsNeeded(
				second.toFixed(0)
			)}`;
		}
	};
	// this funtion set te progress of the progress slider and the time left and total time
	const updateTrack = () => {
		const time = audioEl.current.currentTime;
		const duration = audioEl.current.duration;
		const currentPosition = Math.round((time * 100) / duration);
		setTime(timeTransform(time));
		setPercent(currentPosition);
	};
	return (
		<>
			<Center
				m={4}
				flexWrap="wrap"
				backgroundColor="#393d42"
				p={4}
				borderRadius="20px"
				width={{ '2md': '80%', lg: '100%' }}
				maxW="919px"
				minW="328px"
				alignSelf="center"
				mt="91px"
			>
				{/* mobile */}
				<Box mb={4} display={{ '2md': 'none' }} textAlign="center">
					<Heading color="brand.White" fontSize="1.5rem">
						Current Song
					</Heading>
					{props.songs[props.currentSongIndex].metadata.name.length <=
					25 ? (
						<Text color="brand.White" fontSize="1rem">
							{props.songs[props.currentSongIndex].metadata.name}
						</Text>
					) : (
						// eslint-disable-next-line
						<marquee style={{ color: 'white', fontSize: '1rem' }}>
							{props.songs[props.currentSongIndex].metadata.name}
						</marquee>
					)}
				</Box>
				{/* Descktop */}
				<Box
					mb={4}
					display={{ base: 'none', '2md': 'block' }}
					width="100%"
				>
					<Heading
						color="brand.White"
						fontSize="1.5rem"
						textAlign="center"
					>
						Current Song
					</Heading>
					<Text
						color="brand.White"
						fontSize="1rem"
						textAlign="center"
					>
						{props.songs[props.currentSongIndex].metadata.name}
					</Text>
				</Box>
				<Slider
					aria-label="slider-ex-4"
					w="80%"
					mt={4}
					defaultValue={0}
					value={percent || 0}
					onChange={(val) => {
						audioEl.current.currentTime = Math.round(
							(val / 100) * audioEl.current.duration
						);
					}}
				>
					<SliderTrack backgroundColor="#bebebe">
						<SliderFilledTrack backgroundColor="brand.White" />
					</SliderTrack>
					<SliderThumb />
				</Slider>
				<Box
					width="80%"
					color="brand.White"
					textAlign="center"
					mb={3}
					display="flex"
					justifyContent="space-between"
				>
					<Text>{time}</Text>
					<Text>{totalTime}</Text>
				</Box>
				<Box
					display="flex"
					justifyContent="space-around"
					width="80%"
					mt={4}
					mb={6}
				>
					<Box>
						<Button onClick={() => SkipSong(false)} alt="previous">
							<Image
								src={prev}
								alt="previous"
								w="21px"
								h="17px"
							/>
						</Button>
					</Box>
					<Box>
						<Button
							onClick={() => props.setIsPlaying(!props.isPlaying)}
							alt="play/pause"
						>
							<Image
								src={props.isPlaying ? pause : play}
								alt="play/pause"
								w="21px"
								h="17px"
							/>
						</Button>
					</Box>
					<Box>
						<Button onClick={() => SkipSong()} alt="next">
							<Image src={next} alt="next" w="21px" h="17px" />
						</Button>
					</Box>
				</Box>

				<Box>
					<audio
						src={
							props.songs[props.currentSongIndex].metadata.song
								.url
						}
						ref={audioEl}
						onEnded={() => SkipSong()}
						onTimeUpdate={() => {
							updateTrack();
							setTotalTime(
								timeTransform(
									audioEl.current.duration || '00:00'
								)
							);
						}}
					></audio>
				</Box>
			</Center>
			<ListOfSongs
				songs={props.songs}
				handleIndexSong={props.handleIndexSong}
				currentSongIndex={props.currentSongIndex}
				setIsPlaying={props.setIsPlaying}
				isPlaying={props.isPlaying}
			/>
		</>
	);
};
export default MusicPlayerControlles;
