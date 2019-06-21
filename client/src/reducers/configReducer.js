import * as TYPES from '../actions/types';

const INITAL_STATE = {
  loading: true
}

export default (state = INITAL_STATE, action) => {
  switch(action.type) {
    case TYPES.START_LOADER:
      return { ...state, loading: true };
    case TYPES.FINISH_LOADER:
      return { ...state, loading: false };
    case TYPES.GET_CONFIG:
      return { ...state, base: action.payload };
    case TYPES.GET_GENRES:
      return { ...state, movie: action.movie, tv: action.tv };
    default:
      return state
  }
}
