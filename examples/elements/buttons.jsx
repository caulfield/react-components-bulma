const React = require('react');
const { Page, Example } = require('../components/page.jsx');

const Button = require('../../src/elements/button.jsx');

const Colors = {
 main: (
   <span>
     <Button>Button</Button>
     <Button type="primary">Primary</Button>
     <Button type="warning">Warning</Button>
     <Button type="danger">Danger</Button>
   </span>
 ),
 code: (
  `<Button>Button</Button>
<Button type="primary">Primary</Button>
<Button type="warning">Warning</Button>
<Button type="danger">Danger</Button>`
 )
}

const Sizes = {
 main: (
   <span>
     <Button type="primary" size="small">Small</Button>
     <Button type="success">Normal</Button>
     <Button type="info" size="medium">Medium</Button>
     <Button type="warning" size="large">Large</Button>
   </span>
 ),
 code: (
  `<Button type="primary" size="small">Small</Button>
<Button type="success">Normal</Button>
<Button type="info" size="medium">Medium</Button>
<Button type="warning" size="large">Large</Button>`
 )
}

const Outlined = {
  main: (
    <span>
       <Button outlined>Button</Button>
       <Button outlined type="danger">Danger</Button>
       <Button outlined type="warning">Warning</Button>
       <Button outlined type="success">Success</Button>
    </span>
  ),
  code: (
  `<Button outlined>Button</Button>
<Button outlined type="danger">Danger</Button>
<Button outlined type="warning">Warning</Button>
<Button outlined type="success">Success</Button>`
  )
}

const timeoutPromise = function() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("result");
    }, 1000)
  })
}

const click = function() {
  return timeoutPromise()
    .then(() => { alert('success!') })
}

const States = {
  main: (
    <span>
      <Button loading>Loading</Button>
      <Button onClick={click} type="primary">Promised click!</Button>
    </span>
  ),

  code: (
  `click() {
  return timeoutPromise(1000)
    .then(() => { alert('success!') })
}

<Button loading>Loading</Button>
<Button onClick={this.click} type="primary">Start!</Button>`
  )
}

const Disabled = {
  main: (
    <span>
      <Button disabled>Disabled</Button>
      <Button disabled type="info">Disabled</Button>
      <Button disabled type="warning">Disabled</Button>
      <Button disabled type="danger">Disabled</Button>
    </span>
  ),

  code: (
`<Button disabled>Disabled</Button>
<Button disabled type="info">Disabled</Button>
<Button disabled type="warning">Disabled</Button>
<Button disabled type="danger">Disabled</Button>`
  )
}

const disable = function(event) {
  event.target.setAttribute('disabled', true);
}

const Properties = {
  main: (
    <span>
      <Button onMouseEnter={disable}>Disable on mouseenter</Button>
    </span>
  ),

  code: (
`disable(event) {
  event.target.setAttribute('disabled', true);
}
<Button onMouseEnter={this.disable()}>Disable on enter</Button>`  
  )
}

const ButtonsPage = React.createClass({
  render() {
    return (
      <Page>
        <h1 className="title"> Buttons </h1>
        <hr/>
        <Example title="Colors" example={Colors.main} code={Colors.code}/>
        <Example title="Sizes" example={Sizes.main} code={Sizes.code} />
        <Example title="Outline" example={Outlined.main} code={Outlined.code} />
        <Example title="States" example={States.main} code={States.code} />
        <Example title="Disabled" example={Disabled.main} code={Disabled.code} />
        <Example title="With FA icons" example='TODO' code='TODO'></Example>
        <Example title="Events are supported" example={Properties.main} code={Properties.code}></Example>
      </Page>
    )
  }
});

module.exports = ButtonsPage
