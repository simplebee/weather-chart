import * as actionType from '../actions/action-type';

export default function weather(state = null, action) {
  switch (action.type) {
    case actionType.FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
}