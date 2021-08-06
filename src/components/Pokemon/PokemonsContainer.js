import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from '../../actions/pokemon';

const PokemonsContainer = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)

    useEffect(() => {
        dispatch(getPokemon())
        return () => {
            
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default PokemonsContainer;
