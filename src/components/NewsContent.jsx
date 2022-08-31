//react
import React from 'react';
//redux
import { useSelector } from 'react-redux';
//chakra UI
import {
	Box,
	UnorderedList,
	ListItem,
	Heading,
	Text,
	Divider,
	Collapse,
	Button,
} from '@chakra-ui/react';

export default function NewsContent() {
	const [show, setShow] = React.useState(false);
	const handleToggle = () => setShow(!show);
	const news = useSelector((news) => news.homeCards.News);
	return (
		<Box display="flex" justifyContent="center" w="100%">
			<Box maxW="919px">
				<Heading
					textAlign="center"
					color="brand.White"
					display={{ lg: 'none' }}
					fontFamily="popings"
					fontStyle="normal"
				>
					NEWS
				</Heading>
				<Collapse
					startingHeight="1821px"
					in={show}
					style={{ width: '100%' }}
				>
					<UnorderedList m={0} listStyleType="none">
						{news.map((element, index) => {
							return (
								<ListItem key={index} mt={8} mb={8}>
									<Heading
										fontSize="1.25rem"
										color="brand.White"
										fontFamily="popings"
									>
										{element.title}
									</Heading>
									<Text
										color="brand.Grey"
										mt={2}
										mb={2}
										fontSize="0.75rem"
									>
										{element.date}
									</Text>
									<Text
										color="brand.Grey"
										mt={2}
										mb={2}
										fontWeight="300"
									>
										{element.content}
									</Text>
									<Divider />
								</ListItem>
							);
						})}
					</UnorderedList>
				</Collapse>
				<Box width="100%" display="flex" justifyContent="center">
					<Button
						size="sm"
						variant="ghost"
						onClick={handleToggle}
						mt="1rem"
						mb={6}
						alt="show more"
						color="brand.White"
						_active={{ color: 'brand.Black' }}
						_hover={{
							color: 'brand.Black',
							backgroundColor: 'White',
						}}
					>
						Show {show ? 'Less' : 'More'}
					</Button>
				</Box>
			</Box>
		</Box>
	);
}
