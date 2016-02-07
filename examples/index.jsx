console.log('Welcome, This is react-components-bulma doc');

require('./index.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router';

const App = React.createClass({
  render() {
    return(
      <h1>doc app</h1>
    );
  }
});

render((

  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.body)
