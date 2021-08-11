import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from '../pokemon/Pokemon';
import BattlePage from './BattlePage';

const BattleSelectContainer = () => {
    const dispatch = useDispatch()
    const [battlePokemon, setBattlePokemon] = useState([{}, {}, {}, {}, {}, {}])
    const [count, setCount] = useState(0)
    const [battleTime, setBattleTime] = useState(false)
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)
    
    const handleBattleClick = (event) => {
        event.preventDefault()
        setBattleTime(true)
    }
    const handleClick = (event) => {
        if (battlePokemon[5].id === undefined) {
            event.target.style.display = "none"
            let selected = pokemon.find(({id}) => id === parseInt(event.target.id))
            battlePokemon[count] = selected
            setCount(count + 1)
        }
    }
    if (battleTime === true) {
        return (<BattlePage userBattleTeam={battlePokemon}/>)
    } else {
    return (
        <>
        <h1>Select Team</h1><br></br>
        {battlePokemon[0].id !== undefined ? <div className="battle-button"><button onClick={handleBattleClick}>BATTLE!</button></div> : null}
        <div className="battle-select-pokemon">
        {battlePokemon.map(p => {
            if (p.front_image) {
            return (
                <div>
                    <img src={p.front_image} style={{maxHeight: "96px", maxWidth: "96px"}}></img>
                </div>
            )
            } else {
                return (
                    <div>
                    <img src={"https://www.pngitem.com/pimgs/m/492-4923347_pokemon-question-mark-sprite-hd-png-download.png"} style={{maxWidth: "50px", maxHeight: "50px"}}></img>
                    </div> 
                )
            }
        })}
        </div>
        <div className="pokedex-container">

    {
        pokemon.map(p => {
        return (
           <ul className="user-pokemon">
            <li><button id={p.id} onClick={handleClick}>Select</button><br></br></li>
            <Pokemon
            pokemon = {p}
            key = {p.id}
        />
        </ul>
        )
    })
    }
    </div>
        </>
    );
}
}

export default BattleSelectContainer;
