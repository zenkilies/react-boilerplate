import * as types from "./index";

export function increase() {

  return function(dispatch) {

    setTimeout(function () {

      dispatch({
        type: types.COUNTER_INCREASE
      });

    }, 100);

  };

}
