import React from 'react';

const Pokemon = (props) => {
    return (
        <li key ={props.pokemon.uid}>
            <b>{props.pokemon.name}</b><br />
            <img src={props.pokemon.front_image}></img><br />
            {`Tier: ${props.pokemon.tier}`}
        </li>

    );
}

export default Pokemon;

