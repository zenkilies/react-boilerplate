import * as types from "./../actions";
import initialState from "./initialState";

export default function counterReducer(state = initialState.counter, action) {

  switch (action.type) {

    case types.INCREASE_COUNTER:

      return state + 1;

    default:

      return state;

  }

}
