import { combineReducers } from 'redux';
import { showinfo } from './showinfo';
import { getInfoCards } from './homeCards';
//store
const reducer = combineReducers({
	albums: showinfo,
	homeCards: getInfoCards,
});

export default reducer;
