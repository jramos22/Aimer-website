//react
import React from 'react';
//components
import BackgroundContainer from '../components/BackgroundContainer';
import MediaContent from '../components/MediaContent';
export default function Media() {
	return (
		<>
			<BackgroundContainer props={<MediaContent />} />
		</>
	);
}
