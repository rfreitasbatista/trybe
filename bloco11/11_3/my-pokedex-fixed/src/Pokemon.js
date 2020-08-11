import React from 'react'

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight:{value}, image, averageWeight:{measurementUnit}} = this.props.pokemoninfo
  return (
    <div>
      <div>
        <img className='PokemonImage' src= {image} alt={name + ' Picture'}></img>
      </div>
      <div className='PokemonText'>
        <p>
        Name: {name}
        </p>
        <p>
        Type: {type}
        </p>
        <p>
        Average weight: {value} {measurementUnit}
        </p>
      </div>
    </div>
  );
  }
}

export default Pokemon;