import { SHOW_ALBUMS, NO_DATA, INITIAL_STATE } from '../types';
//set the actios
export const intialState = (data) => ({ type: INITIAL_STATE, payload: data });
export const showAlbums = (data) => ({ type: SHOW_ALBUMS, payload: data });
export const noData = (data) => ({ type: NO_DATA });
