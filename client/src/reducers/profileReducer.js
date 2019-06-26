import * as TYPES from '../actions/types';

const INITAL_STATE = {
  loading: true,
  results: []
}

export default (state = INITAL_STATE, action) => {
  switch(action.type) {
    case TYPES.FETCH_LOAD_BOOKMARKS:
      return { ...state, results: action.payload}
    case TYPES.FETCH_MOVIE_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_MOVIE_FINISHED:
      return { ...state, loading: false };
    default:
      return state
  }
}
