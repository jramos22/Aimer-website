import { INITIAL_STATE, NO_DATA, SHOW_ALBUMS } from '../types';

const initialState = {
	list: [],
};

export function showinfo(state = [], action) {
	switch (action.type) {
		case INITIAL_STATE:
			return action.payload;
		case SHOW_ALBUMS:
			return action.payload.map((data) => data);
		case NO_DATA:
			return initialState;
		default:
			return state;
	}
}
