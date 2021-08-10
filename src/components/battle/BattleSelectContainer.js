import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pokemon from '../pokemon/Pokemon';

const BattleSelectContainer = () => {
    const dispatch = useDispatch()
    const [battlePokemon, setBattlePokemon] = useState([])
    
    return (
        <>
        <h1>Select Team</h1>
        {battlePokemon.map(p => {
            return (
                <div>
                </div>
            )
        })}
        <div className="battle-select-pokemon">
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}></img>
            </div>
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}></img>
            </div>
            <div>
                <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"}></img>
            </div>
            <div>
                <img src={"https://www.pngitem.com/pimgs/m/492-4923347_pokemon-question-mark-sprite-hd-png-download.png"} style={{maxHeight: "60px", maxWidth: "60px"}}></img>
            </div>
            <div>
                <img src={"https://www.pngitem.com/pimgs/m/492-4923347_pokemon-question-mark-sprite-hd-png-download.png"} style={{maxHeight: "60px", maxWidth: "60px"}}></img>
            </div>
            <div>
                <img src={"https://www.pngitem.com/pimgs/m/492-4923347_pokemon-question-mark-sprite-hd-png-download.png"} style={{maxHeight: "60px", maxWidth: "60px"}}></img>
            </div>
        </div>
        <div className="pokedex-container">

    {
        userPokemon.map(p => {
        return (
           <ul className="user-pokemon">
            <li><button>Select</button><br></br></li>
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

export default BattleSelectContainer;
