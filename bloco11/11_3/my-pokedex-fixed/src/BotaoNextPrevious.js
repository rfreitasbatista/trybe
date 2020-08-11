import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.funcao} value={this.props.text}>{this.props.text}</button>
    )
  }
}

export default Button;