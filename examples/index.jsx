console.log('Welcome, This is react-components-bulma doc');

require('./index.scss');

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router';
import { createHashHistory, useBasename } from 'history';
import hljs from 'highlight.js'

import Buttons from './elements/buttons.jsx'

const App = React.createClass({
  render() {
    return(
      <div>
        <header className="header">
          <div className="container">
            <div className="header-left header-menu">
              <span className="header-item">
                <Link to="/">Home</Link>
              </span>
              <span className="header-item">
                <Link activeClassName="is-active" to="/elements">Elements</Link>
              </span>
            </div>
          </div>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
});

const Elements = React.createClass({
  render() {
    return(
      <div>
        <nav className="header">
          <div className="container">
            <div className="header-left">
              <span className="header-item">
                <Link activeClassName="is-active" to="/elements/buttons">Buttons</Link>
              </span>
            </div>
          </div>
        </nav>
        <section className="section">{this.props.children}</section>
      </div>
    )
  }
})

const history = createHashHistory({
  queryKey: false
});

render((
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="/elements" component={Elements}>
        <IndexRoute component={Buttons}/>
        <Route path="buttons" component={Buttons} />
      </Route>
    </Route>
  </Router>
), document.body)

hljs.initHighlightingOnLoad();
