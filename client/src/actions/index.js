import moviedb from '../api/movie-db';
import axios from 'axios';
import * as TYPES from './types';

export const init = () => async dispatch => {
  dispatch({ type: TYPES.START_LOADER });
  await dispatch(getConfig());
  await dispatch(getGenres());
  await dispatch(getUser());
  dispatch({ type: TYPES.FINISH_LOADER });
}

export const getConfig = () => async dispatch => {
  const res = await moviedb.get('/configuration');
  dispatch({
    type: TYPES.GET_CONFIG,
    payload: res.data
  })
}

export const getGenres = () => async dispatch => {
  const movie = await moviedb.get('/genre/movie/list');
  const tv = await moviedb.get('/genre/tv/list');
  dispatch({
    type: TYPES.GET_GENRES,
    movie: movie.data,
    tv: tv.data
  });
}

export const getUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: TYPES.FETCH_USER, payload: res.data });
}