import { combineReducers } from 'redux';
import { showinfo } from './showinfo';

const reducer = combineReducers({
	albums: showinfo,
});

export default reducer;
