import * as types from "./index";

/**
 * @function increaseCounter
 * @returns {{type}}
 */
export function increaseCounter() {

  return function(dispatch) {

    setTimeout(function () {

      dispatch({
        type: types.INCREASE_COUNTER
      });

    }, 100);

  };

}
