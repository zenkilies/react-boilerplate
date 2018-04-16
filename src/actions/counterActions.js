import * as types from "./actionTypes";

/**
 * @returns {{type: string}}
 */
export function increaseCounter() {
  return {
    type: types.COUNTER_INCREASE
  };
}
