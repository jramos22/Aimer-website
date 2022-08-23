//react
import React from 'react';
//components
import BackgroundContainer from '../components/BackgroundContainer';
import BiographyContent from '../components/BiographyContent';
export default function Biography() {
	return (
		<>
			<BackgroundContainer props={<BiographyContent />} />
		</>
	);
}
