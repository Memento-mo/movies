import * as TYPES from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case TYPES.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  };
};