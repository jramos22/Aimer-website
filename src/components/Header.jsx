//react
import React from 'react';
//react-router
import { NavLink, Link } from 'react-router-dom';
//chakra UI/icons
import {
	Flex,
	Spacer,
	Box,
	Image,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	IconButton,
	UnorderedList,
	ListItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
//Images
import logo from '../img/aimer-logo.png';
import twitter from '../img/twitter.png';
import youtube from '../img/youtube.png';
import line from '../img/line.png';
import weibo from '../img/weibo.png';

export default function Header() {
	//control the drawer in mobile
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	//control if is active in Descktop
	let activeStyle = {
		textDecoration: 'underline',
	};
	return (
		<Flex
			bg="brand.header"
			h={{ base: '75px', lg: '221' }}
			flexDirection={{ lg: 'column' }}
		>
			<Box
				mt={{ base: 4, lg: 4 }}
				w={{ lg: '100%' }}
				h={{ lg: '103px' }}
				display="flex"
				justifyContent={{ lg: 'center' }}
			>
				<Link to="/home">
					<Image
						src={logo}
						w={{ base: '115px', lg: '263px' }}
						h={{ base: '45px', lg: '103px' }}
						mt={{ lg: 6 }}
						ml={{ base: 4, lg: 0 }}
						alt="logo"
					/>
				</Link>
				<UnorderedList
					color="brand.White"
					display={{ base: 'none', lg: 'flex' }}
					position="absolute"
					top={10}
					right={0}
					listStyleType="none"
				>
					<ListItem mr={4}>
						<a
							href="https://twitter.com/Aimer_and_staff"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={twitter}
								alt="twitter"
								w="100%"
								h="100%"
							/>
						</a>
					</ListItem>
					<ListItem mr={4}>
						<a
							href="https://www.youtube.com/user/aimerSMEJ"
							target="_blank"
							rel="noreferrer"
						>
							<Image
								src={youtube}
								alt="youtube"
								w="100%"
								h="100%"
							/>
						</a>
					</ListItem>
					<ListItem mr={4}>
						<a
							href="https://line.me/ti/p/%40aimer"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={line} alt="line" w="100%" h="100%" />
						</a>
					</ListItem>
					<ListItem mr={4}>
						<a
							href="https://weibo.com/u/7704697388"
							target="_blank"
							rel="noreferrer"
						>
							<Image src={weibo} alt="wiebo" w="100%" h="100%" />
						</a>
					</ListItem>
				</UnorderedList>
			</Box>
			<Spacer display={{ lg: 'none' }} />
			<Box display="flex" justifyContent={{ lg: 'center' }}>
				<UnorderedList
					color="brand.White"
					display={{ base: 'none', lg: 'flex' }}
					justifyContent={{ lg: 'space-around' }}
					listStyleType="none"
					w={{ lg: '100%' }}
					ml="0"
					fontSize={{ lg: '1.5rem' }}
					maxW="1014px"
					mt={{ lg: '35px' }}
				>
					<ListItem mr={4}>
						<NavLink
							to="/home"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							HOME
						</NavLink>
					</ListItem>
					<ListItem mr={4}>
						<NavLink
							to="/news"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							NEWS
						</NavLink>
					</ListItem>
					<ListItem mr={4}>
						<NavLink
							to="/media"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							MEDIA
						</NavLink>
					</ListItem>
					<ListItem mr={4}>
						<NavLink
							to="/albums"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							ALBUMS
						</NavLink>
					</ListItem>
					<ListItem mr={4}>
						<NavLink
							to="/bio"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							BIOGRAPHY
						</NavLink>
					</ListItem>
					<ListItem mr={4}>
						<NavLink
							to="/products"
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							PRODUCTS
						</NavLink>
					</ListItem>
				</UnorderedList>
			</Box>
			<IconButton
				display={{ lg: 'none' }}
				mt={4}
				ref={btnRef}
				aria-label="hambuerger menu"
				borderRadius="none"
				bg="brand.header"
				icon={
					<HamburgerIcon
						boxSize={{ base: '1.5rem', md: '2rem', lg: '2.25rem' }}
						color="white"
					/>
				}
				mr={4}
				p={2}
				onClick={onOpen}
			></IconButton>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
				size="full"
			>
				<DrawerOverlay />
				<DrawerContent bg="brand.header">
					<DrawerCloseButton color="brand.White" />
					<DrawerBody>
						<UnorderedList
							color="brand.White"
							display="flex"
							flexDirection="column"
							textAlign="center"
							listStyleType="none"
							w={{ lg: '100%' }}
							ml="0"
							fontSize={{ lg: '1.5rem' }}
							maxW="1014px"
							mt={20}
						>
							<ListItem mr={4} mb={4}>
								<NavLink
									to="/home"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
									onClick={onClose}
								>
									HOME
								</NavLink>
							</ListItem>
							<ListItem mr={4} mb={4}>
								<NavLink
									to="/news"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
									onClick={onClose}
								>
									NEWS
								</NavLink>
							</ListItem>
							<ListItem mr={4} mb={4}>
								<NavLink
									to="/media"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
									onClick={onClose}
								>
									MEDIA
								</NavLink>
							</ListItem>
							<ListItem mr={4} mb={4}>
								<NavLink
									to="/albums"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
									onClick={onClose}
								>
									ALBUMS
								</NavLink>
							</ListItem>
							<ListItem mr={4} mb={4}>
								<NavLink
									to="/bio"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
									onClick={onClose}
								>
									BIOGRAPHY
								</NavLink>
							</ListItem>
							<ListItem mr={4} mb={4}>
								<NavLink
									to="/products"
									style={({ isActive }) =>
										isActive ? activeStyle : undefined
									}
									onClick={onClose}
								>
									PRODUCTS
								</NavLink>
							</ListItem>
						</UnorderedList>
						<UnorderedList
							color="brand.White"
							display="flex"
							listStyleType="none"
							mt={10}
							ml={0}
							justifyContent="space-between"
						>
							<ListItem mr={4}>
								<a
									href="https://twitter.com/Aimer_and_staff"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={twitter}
										alt="twitter"
										w="100%"
										h="100%"
									/>
								</a>
							</ListItem>
							<ListItem mr={4}>
								<a
									href="https://www.youtube.com/user/aimerSMEJ"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={youtube}
										alt="youtube"
										w="100%"
										h="100%"
									/>
								</a>
							</ListItem>
							<ListItem mr={4}>
								<a
									href="https://line.me/ti/p/%40aimer"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={line}
										alt="line"
										w="100%"
										h="100%"
									/>
								</a>
							</ListItem>
							<ListItem mr={4}>
								<a
									href="https://weibo.com/u/7704697388"
									target="_blank"
									rel="noreferrer"
								>
									<Image
										src={weibo}
										alt="wiebo"
										w="100%"
										h="100%"
									/>
								</a>
							</ListItem>
						</UnorderedList>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}
