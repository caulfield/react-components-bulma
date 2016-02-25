const React = require('react');
const cx = require('classnames');

const Button = React.createClass({

  componentWillMount() {
    this.setState(this.props);
  },

  onClick(event) {
    if (this.state.onClick) {
      return this.loading(this.state.onClick(event));
    } else {
      return;
    }
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
      {[`is-${this.state.type}`]: this.state.type}
    );
    return className;
  },

  render() {
    return(
      <a
        {...this.state}
        className={this.getClassName()}
        onClick={this.onClick}
      >
        {this.props.children}
      </a>
    );
  }
});


module.exports = Button
