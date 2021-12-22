import { Component } from "react";
import propTypes from "prop-types";

export default class App extends Component {
  static defaultProps = {
    cons: "",
  };

  static propTypes = {
    cons: propTypes.string.isRequired,
  };

  state = {
    disabled: false,
  };

  toggleDisabled = () => {
    this.setState((state) => {
      return {
        disabled: !state.disabled,
      };
    });
  };

  render() {
    return (
      <button disabled={this.state.disabled} onClick={this.toggleDisabled}>
        Нажми на меня
      </button>
    );
  }
}
