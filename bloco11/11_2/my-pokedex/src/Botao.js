import React from 'react';

function ButtonCreation (text, funcao) {
  return (<button onClick={funcao} className={text + ' Button'}>{text}</button>)
}

export default ButtonCreation;