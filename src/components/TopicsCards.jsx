//react
import React from 'react';
//chakra UI
import {
	Box,
	Heading,
	Text,
	UnorderedList,
	ListItem,
	Image,
	Divider,
} from '@chakra-ui/react';
//redux
import { useSelector } from 'react-redux';

export default function TopicsCards() {
	const topics = useSelector((state) => state.homeCards.topics);
	return (
		<Box width="100%" display="flex" justifyContent="center">
			<Box
				style={{
					background: 'rgba(255, 255, 255, 0.1)',
					borderRadius: '16px',
					boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
					backdropFilter: 'blur(3.5px)',
					WebkitBackdropFilter: 'blur(3.5px)',
					border: '1px solid rgba(255, 255, 255, 1)',
				}}
				color="brand.White"
				p={4}
				pt={8}
				pb={8}
				mt={4}
				mb={8}
				maxW={{
					base: '405.94px',
					'1md': '80%',
					lg: '919px',
				}}
			>
				<Box>
					<Heading fontSize="1.875rem">Topics</Heading>
				</Box>
				<Box>
					<UnorderedList listStyleType="none" m={0} mt={4}>
						{topics.map((element, index) => {
							return (
								<ListItem
									key={index}
									fontSize={{
										base: '0.75rem',
										'1md': '1.25rem',
									}}
									display="flex"
									flexWrap="wrap"
									mt={4}
								>
									<Box w="80%" fontWeight={300}>
										<Box fontSize={{ '1md': '1rem' }}>
											<Text>{element.date}</Text>
										</Box>
										<Box>
											<Text>{element.content}</Text>
										</Box>
									</Box>
									<Box
										w="20%"
										display="flex"
										justifyContent="center"
										alignItems="center"
									>
										<Box
											w={{ base: '20px', '1md': '25px' }}
										>
											<Image
												src={element.image}
												width={{
													base: '20px',
													'1md': '25px',
												}}
												h={{
													base: '20px',
													'1md': '25px',
												}}
												alt="Twitter"
											/>
										</Box>
									</Box>
									<Divider />
								</ListItem>
							);
						})}
					</UnorderedList>
				</Box>
			</Box>
		</Box>
	);
}
