import React from 'react';

const PokemonList = ({ pokeList }) => {
    console.log('props', pokeList)

    const pokemon = pokeList.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)

    return (
        <div>
            POKEMON LIST
            {pokemon}
        </div>
    )
}

export default PokemonList;
