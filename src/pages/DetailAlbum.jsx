//react
import React, { useEffect, useState } from 'react';
//react-router
import { useParams } from 'react-router-dom';
//redux
import { useSelector } from 'react-redux';
//chakra UI
import { Box, Spinner } from '@chakra-ui/react';
//components
import BackgroundContainer from '../components/BackgroundContainer';
import DetailAlbumContent from '../components/DetailAlbumContent';

export default function DetailAlbum() {
	const { id } = useParams();
	const [album, setAlbum] = useState('');
	const albums = useSelector((state) => state);
	useEffect(() => {
		if (albums.albums.length === 0) {
		} else {
			setAlbum(albums.albums.objects.find((albums) => albums.id === id));
		}
	}, [album, albums, id]);
	if (album === '') {
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
			<BackgroundContainer props={<DetailAlbumContent album={album} />} />
		);
	}
}
