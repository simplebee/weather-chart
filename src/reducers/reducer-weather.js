import * as actionType from '../actions/action-type';

export default function weather(state = [], action) {
  switch (action.type) {
    case actionType.FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return  state;
  }
}