const React = require('react');
const { Page, Example } = require('../components/page.jsx');

const Colors = {
 main: <a className="button">button example</a>
}
const Sizes = Colors;

const ButtonsPage = React.createClass({

  render() {
    return (
      <Page>
        <h1 className="title"> Buttons </h1>
        <hr/>
        <Example title="Colors" example={Colors.main} />
        <Example title="Sizes" example={Colors.main} />
      </Page>
    )
  }
});

module.exports = ButtonsPage
