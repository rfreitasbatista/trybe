import React from 'react';
const Button = (props) => {
  const { showComponent, isDisable, content } = props;
  return (
    <div
      type="button"
      disabled={isDisable}
      onClick={() => showComponent()}
    >
      {content}
    </div>
  )
}
export default Button;