import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import PropTypes from "prop-types";
import React from "react";

import * as counterActions from "./../../actions/counterActions";

class CounterPage extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.onClickIncrease = this.onClickIncrease.bind(this);

  }

  onClickIncrease(e) {

    e.preventDefault();

    this.props.actions.increaseCounter();

  }

  render() {

    return (
      <p>
        This is Counter Page, a simple example for Redux integration. <br/>
        Counter is {this.props.counter}. Click <a href="#" onClick={this.onClickIncrease}>here</a> to increase it.
      </p>
    );

  }

}

CounterPage.propTypes = {
  actions: PropTypes.shape({
    increaseCounter: PropTypes.func.isRequired
  }),
  counter: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);

/**
 * mapStateToProps()
 * @reference https://github.com/reactjs/react-redux/blob/master/docs/api.md
 * @param {Object} state
 * @returns {{counter: *}}
 */
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

/**
 * mapDispatchToProps()
 * @reference https://github.com/reactjs/react-redux/blob/master/docs/api.md
 * @param dispatch
 * @returns {{counterActions: {increaseCounter?}}|ActionCreator<any>|ActionCreatorsMapObject}
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  };
}
