//react
import React from 'react';
//components
import BackgroundContainer from '../components/BackgroundContainer';
import NewsContent from '../components/NewsContent';
export default function News() {
	return (
		<>
			<BackgroundContainer props={<NewsContent />} />
		</>
	);
}
