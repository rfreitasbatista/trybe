import React from 'react'
import Pokemon from './Pokemon'
import data from './data'

class Pokedex extends React.Component {
  render() {
  const pokemons = data.map( poke => (poke.name === 'Pikachu') ? <Pokemon pokemoninfo={poke} /> : <Pokemon pokemoninfo={poke} className='Hide' /> )

    return (
      <div className='Flex PokedexImage'>
        {pokemons}
      </div>
    )
}
}

export default Pokedex;