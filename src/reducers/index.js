import { combineReducers } from 'redux';
import { showinfo } from './showinfo';
//store
const reducer = combineReducers({
	albums: showinfo,
});

export default reducer;
