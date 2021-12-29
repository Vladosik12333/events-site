import React, { Component } from 'react';
import Template from './Template';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  toggleDisabled = () => {
    this.setState(state => {
      return {
        disabled: !state.disabled,
      };
    });
  };

  render() {
    return (
      <Template>
        <button
          type="button"
          className="btn"
          disabled={this.state.disabled}
          onClick={this.toggleDisabled}
        >
          Нажми на меня
        </button>
      </Template>
    );
  }
}
