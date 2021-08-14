import {  InputLabel, makeStyles, MenuItem, Radio, RadioGroup, Select, TextField } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { assignMoves, getPokemon } from '../../actions/pokemon';
import { addPokemonToUser, getUserPokemon } from '../../actions/userpokemon';
import Pokemon from './Pokemon';
import './pokemon.css'



const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const PokemonsContainer = () => {
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)
    const [tier, setTier] = React.useState('');
    const [filteredPokemon, setFilteredPokemon] = React.useState(pokemon)
    const [pokemonName, setPokemonName] = React.useState("")
    const user = useSelector(state => state.userReducer.details)
    const userPokemon = useSelector(state => state.userReducer.userPokemon)

    const handleChange = (event) => {
        setTier(event.target.value);
      };


      useEffect(() => {
        dispatch(getUserPokemon(user.id))
        if (filteredPokemon.length === 0 && tier == "" && pokemonName == ""){
         setFilteredPokemon(pokemon)
        }
        filteredSearch()
          return () => {

          };
      }, [pokemon, tier, pokemonName, filteredPokemon]);

    const handleNameChange = async (event) => {
        setPokemonName(event.target.value)

    }

    const filteredSearch = () => {
        if (pokemonName){
            setFilteredPokemon(pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())))
            console.log(pokemonName)
        } else {
            setFilteredPokemon(pokemon)
        }

        if(tier){
            setFilteredPokemon(pokemon.filter((pokemon) => pokemon.tier === tier && pokemon.name.toLowerCase().includes(pokemonName.toLowerCase())))
        }
    }
return (
    <div className="pokemon-page">
    <form className="pokedex-search-form" noValidate autoComplete="off">

    <TextField id="standard-basic" label="Pokemon" onChange={(event) => setPokemonName(event.target.value)} />
    <InputLabel id="demo-simple-select-label">Tier</InputLabel>



        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tier}

          onChange={(e) => setTier(e.target.value)}

          onChange={handleChange}

        >
          <MenuItem value={""}>All Tiers</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
</form>


<div className="pokedex-container">

    {
        filteredPokemon.map(p => {
        return <Pokemon
            pokemon = {p}
            key = {p.id}

        />
    })
    }
    </div>
    </div>
)

}

export default PokemonsContainer;
