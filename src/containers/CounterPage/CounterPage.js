import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import * as actions from "./../../actions/counterActions";

class CounterPage extends React.Component {

  constructor(props, context) {

    super(props, context);

    this.onClickCounter = this.onClickCounter.bind(this);

  }

  onClickCounter() {
    this.props.actions.increase();
  }

  render() {

    return (
      <div>
        <p>
          This is Counter Page, an example for Redux usage.
        </p>
        <p>
          <button className="btn btn-primary" onClick={this.onClickCounter}>
            Counter: {this.props.counter}
          </button>
        </p>
      </div>
    );

  }

}

CounterPage.propTypes = {
  actions: PropTypes.shape({
    increase: PropTypes.func
  }),
  counter: PropTypes.number
};

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(CounterPage);
