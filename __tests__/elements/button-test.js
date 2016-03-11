const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');

const { Button } = require('../../src/index.js');

describe('Button', () => {
  it("sets loading class name for loading component", () => {
    const button = TestUtils.renderIntoDocument(
      <Button loading>hello</Button>
    );
    const el = ReactDOM.findDOMNode(button);
    expect(el.classList).toContain("is-loading");
  });

  it("sets disabled class name for disabled component", () => {
    const button = TestUtils.renderIntoDocument(
      <Button disabled>hello</Button>
    );
    const el = ReactDOM.findDOMNode(button);
    expect(el.classList).toContain("is-disabled");
  });

  it("adds passed classNames", () => {
    const button = TestUtils.renderIntoDocument(
      <Button disabled className="active">hello</Button>
    );
    const el = ReactDOM.findDOMNode(button);
    expect(el.classList).toContain("active");
  });
});
