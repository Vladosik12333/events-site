import React, { Component } from 'react';
import './App.scss';

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
      <button
        type="button"
        className="btn"
        disabled={this.state.disabled}
        onClick={this.toggleDisabled}
        onKeyDown={this.toggleDisabled}
      >
        Нажми на меня
      </button>
    );
  }
}
