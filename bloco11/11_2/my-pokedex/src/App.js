import React from 'react';
import Pokedex from './Pokedex';
import Botao from './Botao'
import './App.css';

function App() {

  let contador = 0
  function NextPokemon () {
    const shown = document.getElementsByClassName('Square')[0];
    const hiddens = document.getElementsByClassName('Hide')
    if (contador === hiddens.length) {
    contador = 0
    } else {
      contador += 1
    }
    shown.className = 'Hide'
    hiddens[contador].className = 'Square Position'
  }

  function PreviousPokemon () {
    const shown = document.getElementsByClassName('Square')[0];
    const hiddens = document.getElementsByClassName('Hide')
    if (contador === 0) {
      contador = hiddens.length
    } else {
      contador -= 1
    }
    shown.className = 'Hide'
    hiddens[contador].className = 'Square Position'
  }

  
  return (
    <div className="App OutsideBox">
      <Pokedex /> 
      {Botao('Previous', PreviousPokemon)}
      {Botao('Next', NextPokemon)}
    </div>
  );
}

export default App;
