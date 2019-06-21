import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TYPES.FETCH_SEARCH_MOVIE:
      return { ...state, ...action.payload };
    case TYPES.FETCH_SEARCH_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_SEARCH_FINISHED:
      return { ...state, loading: false }
    default:
      return state
  }
}