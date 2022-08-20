//react
import React from 'react';
//components
import BackgroundContainer from '../components/BackgroundContainer';
import AlbumsContent from '../components/AlbumsContent';
export default function Albums() {
	return (
		<>
			<BackgroundContainer props={<AlbumsContent />} />
		</>
	);
}
