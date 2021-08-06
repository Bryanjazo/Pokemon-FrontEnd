import React from 'react';

const Pokemon = (props) => {
    return (
        <div>
        <ul className="pokedex">
            <li key ={props.pokemon.uid}>
                <b>{props.pokemon.name}</b><br />
                <img src={props.pokemon.front_image}></img>
            </li>
            </ul>
        </div>
    );
}

export default Pokemon;

