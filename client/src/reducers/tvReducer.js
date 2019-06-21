import * as TYPES from '../actions/types';

const INITIAL_STATE = {
  loading: true
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TYPES.FETCH_GET_TV:
      return { ...state, ...action.payload };
    case TYPES.FETCH_GET_TV_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_GET_TV_FINISHED:
      return { ...state, loading: false };
    case TYPES.FETCH_TV_RECOMMENDATIONS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
}