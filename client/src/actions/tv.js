import moviedb from '../api/movie-db';
import * as TYPES from './types';

export const getTv = (genre, page) => async (dispatch, getState) => {
  
  const { genres } = getState().geral.tv;

  const genreId = genres.filter(el => el.name === genre).map(el => el.id).join('');
  
  dispatch({ type: TYPES.FETCH_MOVIE_LOADING });
  const res = await moviedb.get('/discover/tv', {
    params: {
      sort_by: 'popularity.desc',
      page,
      with_genres: genreId
    }
  })
  await dispatch({
    type: TYPES.FETCH_LOAD_MOVIES,
    payload: res.data
  })
  dispatch({ type: TYPES.FETCH_MOVIE_FINISHED });
}

export const getSeries = (id, page) => async dispatch => {
  dispatch({ type: TYPES.FETCH_GET_TV_LOADING });

  const res = await moviedb.get(`/tv/${id}`, {
    params: {
      append_to_response: 'videos',
    }
  });
  await dispatch(getTvRecommendations(id, page))

  await dispatch({
    type: TYPES.FETCH_GET_TV,
    payload: res.data
  })

  // await dispatch(getCredits())

  dispatch({ type: TYPES.FETCH_GET_TV_FINISHED })
}

export const getTvRecommendations = (id, page) => async (dispatch) => {
  const res = await moviedb.get(`/tv/${id}/recommendations`, {
    params: {
      page
    }
  })
  dispatch({
    type: TYPES.FETCH_TV_RECOMMENDATIONS,
    payload: res.data
  })
}

export const clearTv = () => {
  return {
    type: TYPES.FETCH_GET_TV_LOADING
  }
}

