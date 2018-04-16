import * as types from "./../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.counter, action) {

  switch (action.type) {

    case types.COUNTER_INCREASE:

      return state + 1;

    default:

      return state;

  }

}
