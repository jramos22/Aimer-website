import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAll } from './services/getApi';
import { intialState } from './actions';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
//Pages
import Albums from './pages/Albums';
import Biography from './pages/Bio';
import Dowload from './pages/Dowload';
import Home from './pages/Home';
import Media from './pages/Media';
import News from './pages/News';
import Shop from './pages/Shop';

function App() {
	const dispatch = useDispatch();
	const state = useSelector((state) => state);
	console.log(state);
	useEffect(() => {
		getAll().then((data) => {
			dispatch(intialState(data));
		});
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Router>
				<Header />
				<Routes>
					<Route path="/dowload" element={<Dowload />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/bio" element={<Biography />} />
					<Route path="/albums" element={<Albums />} />
					<Route path="/media" element={<Media />} />
					<Route path="/news" element={<News />} />
					<Route path="/home" element={<Home />} />
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</ChakraProvider>
	);
}

export default App;
