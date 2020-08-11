import React from 'react'
import Pokemon from './Pokemon'
import data from './data'

class Pokedex extends React.Component {
  render() {

    return (
      <div className='Flex PokedexImage'>
        {(this.props.pokemon).map( poke => <Pokemon pokemoninfo={poke} />)}
      </div>
    )
}
}

export default Pokedex;