import { SHOW_ALBUMS, NO_DATA, INITIAL_STATE, GET_HOMECARDS } from '../types';
//set the actions of Albums
export const intialState = (data) => ({ type: INITIAL_STATE, payload: data });
export const showAlbums = (data) => ({ type: SHOW_ALBUMS, payload: data });
export const noData = (data) => ({ type: NO_DATA });

//set the actions of HomeCards

export const ShowHomeCards = (data) => ({ type: GET_HOMECARDS, payload: data });
