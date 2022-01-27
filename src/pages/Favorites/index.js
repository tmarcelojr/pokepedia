import React from 'react';

const Favorites = ({ favorites }) => {
    return (
        <div id='pokemon-container'>
        {
            favorites &&
            favorites.map(pokemon => (
                <div className="card poke-card" key={pokemon.id}>
                    <img src={
                        pokemon.sprites.front_shiny ? 
                        pokemon.sprites.front_shiny : 
                        pokemon.sprites.front_default
                        } 
                        className="card-img-top" 
                        alt="..." 
                    />
                    <div className="card-body">
                        <h5 className="card-title">{pokemon.name}</h5>
                        <p className="card-text">Order: {pokemon.id}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))
        }
    </div>
    );
}

export default Favorites;
