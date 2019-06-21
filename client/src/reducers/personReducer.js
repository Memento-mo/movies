import * as TYPES from '../actions/types';

const INITITAL_STATE = {
  loading: true
}

export default (state = INITITAL_STATE, action) => {
  switch(action.type) {
    case TYPES.FETCH_GET_PERSON:
      return { ...state, ...action.payload };
    case TYPES.FETCH_MOVIES_WITH_PERSON:
      return { ...state, ...action.payload }
    case TYPES.FETCH_GET_PERSON_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_GET_PERSON_FINISHED:
      return { ...state, loading: false };
    default:
      return state;  
  }
}