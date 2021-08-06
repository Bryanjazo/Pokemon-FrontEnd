import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../actions/pokemon';
import Pokemon from './Pokemon';

const PokemonsContainer = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)

    useEffect(() => {
        dispatch(getPokemon()) 
    });
return (
    pokemon.map(p => {
    return <Pokemon
        pokemon = {p}
        // name={p.name}
        // key={p.uid}
        // id={p.uid}
        // moves={p.moves}
        // types={p.types}
        // frontImage={p.front_image}
        // backImage={p.back_image}
        // hp={p.hp}
        // attack={p.attack}
        // defense={p.defense}
        // specialAttack={p.special_attack}
        // specialDefense={p.special_defense}
        // speed={p.speed}
        // tier={p.tier}
    />
        
    
    })
)
}

export default PokemonsContainer;
