import React from 'react';
import Musicplayer from '../components/MusicPlayer';
import BackgroundContainer from '../components/BackgroundContainer';
import HomeCards from '../components/HomeCards';
import TopicsCards from '../components/TopicsCards';
export default function Home() {
	return (
		<>
			<div>
				<Musicplayer />
				<BackgroundContainer
					props={
						<>
							<HomeCards />
							<TopicsCards />
						</>
					}
				/>
			</div>
		</>
	);
}
