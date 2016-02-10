const React = require('react');
const jsxToString = require('jsx-to-string');

const Page = React.createClass({
  render() {
    return(
      <div className="container">
        {this.props.children}
      </div>
    )
  }
});

const Example = React.createClass({
  getCode() {
    return (this.props.code || jsxToString(this.props.example))
  },

  render() {
    return (
      <div>
        <h3 className="subtitle">{this.props.title}</h3>
        <div className="columns"> 
          <div className="column">
            {this.props.example}
          </div>
        
          <div className="column">
            <figure>
              <pre>
                <code className="html">{this.getCode()}</code>
              </pre>
            </figure>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
});

module.exports = { Page, Example }
