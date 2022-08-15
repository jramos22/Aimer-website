//react
import React from 'react';
import ReactDOM from 'react-dom/client';
//components
import App from './App';
//redux
import { createStore } from 'redux';
//react-redux
import { Provider } from 'react-redux';
//services
import reducer from './reducers';

//create the initial store
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
