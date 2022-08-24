//react
import React from 'react';
//chakra UI
import { Box, Image, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
//redux
import { useSelector } from 'react-redux';

export default function HomeCards() {
	let position = true;
	const cards = useSelector((cards) => cards.homeCards.cards);

	return (
		<Box
			display="flex"
			flexWrap="wrap"
			justifyContent="center"
			flexDirection={{ '1md': 'column' }}
			alignItems={{ '1md': 'center' }}
		>
			{cards.map((element, index) => {
				if (position === true) {
					position = !position;
					return (
						<Box
							key={index}
							display="flex"
							flexWrap="wrap"
							backgroundColor="brand.White"
							borderRadius="20px"
							maxW={{
								base: '405.94px',
								'1md': '80%',
								lg: '919px',
							}}
							mb={8}
						>
							<Box w={{ '1md': '50%' }} h={{ '1md': '100%' }}>
								<Image
									src={element.img}
									borderRadius={{
										base: '20px 20px 0px 0px',
										'1md': '20px 0px 0px 20px',
									}}
									w="100%"
									minH={{ base: '280px', '1md': '380px' }}
									h="100%"
									objectFit="cover"
									alt={element.name}
								/>
							</Box>
							<Box
								p={{ base: 4, lg: 8 }}
								minH="304px"
								w={{ '1md': '50%' }}
								display="flex"
								flexWrap="wrap"
								alignContent="space-between"
								fontWeight={300}
							>
								<Box
									textAlign="justify"
									fontSize={{ lg: '1.25rem' }}
								>
									<Text>{element.content}</Text>
								</Box>
								<Box mt={4} textAlign="end" width="100%">
									<Link
										href={element.link}
										fontSize={{ lg: '1.25rem' }}
									>
										Watch Video
										<ExternalLinkIcon mx="2px" />
									</Link>
								</Box>
							</Box>
						</Box>
					);
				} else {
					position = !position;
					return (
						<Box
							key={index}
							display="flex"
							flexWrap="wrap"
							maxW={{
								base: '405.94px',
								'1md': '80%',
								lg: '919px',
							}}
							backgroundColor="brand.White"
							borderRadius="20px"
							mb={8}
						>
							<Box
								p={{ base: 4, lg: 8 }}
								minH="304px"
								w={{ '1md': '50%' }}
								order={{ base: '1', '1md': '0' }}
								display="flex"
								flexWrap="wrap"
								alignContent="space-between"
								fontWeight={300}
								fontSize={{ lg: '1.25rem' }}
							>
								<Box textAlign="justify">
									<Text>{element.content}</Text>
								</Box>
								<Box
									mt={4}
									textAlign={{ base: 'end', '1md': 'start' }}
									width="100%"
								>
									<Link href={element.link}>
										Watch Video{' '}
										<ExternalLinkIcon mx="2px" />
									</Link>
								</Box>
							</Box>
							<Box
								order={{ base: '0', '1md': '1' }}
								w={{ '1md': '50%' }}
								h={{ '1md': '100%' }}
							>
								<Image
									src={element.img}
									borderRadius={{
										base: '20px 20px 0px 0px',
										'1md': '0px 20px 20px 0px',
									}}
									w="100%"
									minH={{ base: '280px', '1md': '380px' }}
									h="100%"
									objectFit="cover"
									alt={element.name}
								/>
							</Box>
						</Box>
					);
				}
			})}
		</Box>
	);
}
