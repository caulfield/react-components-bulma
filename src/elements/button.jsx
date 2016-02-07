import React from 'react';
import { default as cx } from 'classnames';

const Button = React.createClass({

  componentWillMount() {
    this.setState(this.props);
  },

  onClick(event) {
    this.loading(this.state.onClick(event));
  },

  loading(promise) {
    if (promise && promise.then) {
      this.setState({ loading: true });
      promise.then(() => {
        this.setState({ loading: false });
      });
    }
  },

  getClassName() {
    const className = cx(
      "button",
      {"is-loading": this.state.loading},
      {"is-disabled": this.state.disabled},
      {"is-outlined": this.state.outlined},
      {[`is-${this.state.size}`]: this.state.size},
      {[`is-${this.state.color}`]: this.state.color}
    );
    return className;
  },

  render() {
    return(
      <a
        className={this.getClassName()}
        onClick={this.onClick}
      >
        {this.state.children}
      </a>
    );
  }
});


export default Button
