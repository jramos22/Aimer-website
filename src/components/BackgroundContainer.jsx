//react
import React, { useEffect } from 'react';
//gsap
import gsap from 'gsap';
//chakra UI
import { Box } from '@chakra-ui/react';

export default function BackgroundContainer(props) {
	const backGround = React.createRef();
	useEffect(() => {
		const colors = [
			'rgba(25,0,0,1)',
			'rgba(25,28,0,1)',
			'rgba(0,28,0,1)',
			'rgba(0,28,25,1)',
			'rgba(25,0,25,1)',
			'rgba(25,0,0,1)',
			'rgba(0,0,0,1)',
		];
		const t1 = gsap.timeline({ repeat: -1, repeatDelay: 1 });
		colors.map((color) => {
			return t1.to(backGround.current, {
				background: color,
				duration: 6,
			});
		});
	}, [backGround]);
	return (
		<>
			<Box bgColor="rgba(0,0,0,1)" ref={backGround} p={4} pt={8}>
				{props.props}
			</Box>
		</>
	);
}
