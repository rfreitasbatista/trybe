import React from 'react';
import Pokemon from './Pokemon'
import Botao from './BotaoNextPrevious'
import data from './data'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      filter : data,
      index : 0,
    }
    this.setFilteredPokemon = this.setFilteredPokemon.bind(this)
  }

  setFilteredPokemon = (event) => {
    this.setState ({
      index : 0,
      filter : data.filter(pokemon => (event.target.value === 'All') ? data : pokemon.type === event.target.value)
    })
  }

  NextPokemon = () => {
    this.setState({
      index: (this.state.index === this.state.filter.length - 1) ? 0 :(this.state.index + 1) 
    });
  }
  
  PreviousPokemon = () => {
    this.setState({
      index: (this.state.index === 0) ? this.state.filter.length - 1 : this.state.index - 1
    })
  }


  render () {
  const pokemonTypes = ['All'];
  data.forEach(poke =>
    (pokemonTypes.includes(poke.type)) ? 0 : pokemonTypes.push(poke.type)
   )

  return (
    <div className="App">
      <Pokemon pokemoninfo = {this.state.filter[this.state.index]}/> 
      {this.state.filter.length > 1 ? 
        <div>
          <button onClick={this.PreviousPokemon}>Previous</button>
          <button onClick={this.NextPokemon}>Next</button>
        </div>
        : null}
      
      
      <br></br>
      {pokemonTypes.map( type =>
        <button onClick={this.setFilteredPokemon} value={type}>{type}</button>
      )}
    </div>
  );
}
}
export default App;
