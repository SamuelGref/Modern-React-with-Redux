import React from 'react';
import LangugeContext from '../context/LangugeContext'

class Button extends React.Component {

  // creating context object 
  static contextType = LangugeContext

  render() {
    return <button className="ui button primary">Submit</button>;
  }
}
// another way of creating context object 
Button.contextType = LangugeContext

export default Button;
