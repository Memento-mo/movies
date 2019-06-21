import * as TYPES from '../actions/types';

const INITAL_STATE = {
  loading: true
}

export default (state = INITAL_STATE, action) => {
  switch(action.type) {
    case TYPES.FETCH_LOAD_MOVIES:
      return { ...state, ...action.payload}
    case TYPES.FETCH_MOVIE_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_MOVIE_FINISHED:
      return { ...state, loading: false };
    default:
      return state
  }
}
