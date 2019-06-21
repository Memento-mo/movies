import * as TYPES from '../actions/types';

const INITAL_STATE = {
  loading: true
}

export default (state = INITAL_STATE, action) => {
  switch(action.type) {
    case TYPES.FETCH_GET_MOVIE:
      return { ...state, ...action.payload };
    case TYPES.FETCH_GET_MOVIE_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_GET_MOVIE_FINISHED:
      return { ...state, loading: false }
    case TYPES.FETCH_GET_CAST:
      return { ...state, ...action.payload }
    case TYPES.FETCH_MOVIE_RECOMMENDATIONS:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}