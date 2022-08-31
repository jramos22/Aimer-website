//react
import React from 'react';
//chakra UI
import { Box, Heading, AspectRatio, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function MediaContent() {
	return (
		<Box w="100%" display="flex" justifyContent="center">
			<Box>
				<Heading
					color="brand.White"
					display={{ lg: 'none' }}
					textAlign="center"
					fontFamily="popings"
				>
					MEDIA
				</Heading>
				<Box display="flex" flexWrap="wrap" justifyContent="center">
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
					>
						<iframe
							src="https://www.youtube.com/embed/sMy1lK1L67g"
							title="YouTube video player"
							allowFullScreen
						/>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
						display={{ base: 'none', '2md': 'block' }}
					>
						<iframe
							src="https://www.youtube.com/embed/tjJFF8NMXXk"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
					>
						<iframe
							src="https://www.youtube.com/embed/2vTjUnQrGP0"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
						display={{ base: 'none', '2md': 'block' }}
					>
						<iframe
							src="https://www.youtube.com/embed/0ciVjYmQwy0"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
						display={{ base: 'none', '2md': 'block' }}
					>
						<iframe
							src="https://www.youtube.com/embed/6UdNvts9-Lc"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
					>
						<iframe
							src="https://www.youtube.com/embed/ngrBbLTvjN4"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
					>
						<iframe
							src="https://www.youtube.com/embed/QORbTrXHpsA"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
						display={{ base: 'none', '2md': 'block' }}
					>
						<iframe
							src="https://www.youtube.com/embed/zKnMUcaP7ik"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
					<AspectRatio
						m={4}
						maxW={{ base: '328px', '2md': '445px' }}
						ratio={16 / 9}
						width={{ base: '328px', lg: '445px' }}
					>
						<iframe
							src="https://www.youtube.com/embed/tLQLa6lM3Us"
							title="YouTube video player"
							allowFullScreen
						></iframe>
					</AspectRatio>
				</Box>
				<Box
					w="100%"
					display="flex"
					justifyContent="center"
					mt={8}
					mb={8}
				>
					<Link
						href="https://www.youtube.com/channel/UCR1zT1s524Hbc85bdvno_8w"
						isExternal
						color="brand.White"
						textAlign="center"
					>
						Aimer official youtube chanel{' '}
						<ExternalLinkIcon mx="2px" />
					</Link>
				</Box>
			</Box>
		</Box>
	);
}
