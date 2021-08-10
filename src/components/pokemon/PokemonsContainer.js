import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../actions/pokemon';
import Pokemon from './Pokemon';
import './pokemon.css'


const PokemonsContainer = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)

    useEffect(() => {
        if (pokemon.length === 0) dispatch(getPokemon())
    },[]);


return (
    <div className="pokedex-container">
    {pokemon.map(p => {
        return <Pokemon
            pokemon = {p}
            key = {p.id}

        />
    })
    }
    </div>
)

}

export default PokemonsContainer;
