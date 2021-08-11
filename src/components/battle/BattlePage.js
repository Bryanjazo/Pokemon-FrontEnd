import React, { useEffect, useState } from 'react';
import BattleMenu from './BattleMenu';
import MovesAlert from './MovesAlert';
import './battle.css'

const BattlePage = (props) => {

    const renderMoveFromStringToObject = (array, p) =>{
        for(let i in array){
            let move = p.moves.find((m) => m.name === array[i])
            array[i] = move
        }
    
    }
    const [selectedPokemon, setSelectedPokemon] = useState({})

    useEffect(() => {
        return () => { 
        };
    }, [selectedPokemon]);

    const handleImageClick = (event) => {
        event.preventDefault()
        setSelectedPokemon(props.userBattleTeam[event.target.id])
    }
    return (
        <>
        <div className="battle-page">
            <div className="battle-menu">
                {<BattleMenu/>}
            </div>  
            <div className="user-battle-team">
            <h3>My Team</h3>
                {props.userBattleTeam.map((p, index) => {
                    if (selectedPokemon.id === p.id) return (<p></p>)
                    else if (p.pokemon) {return (
                        <img id={index} src={p.pokemon.front_image} onClick={handleImageClick}/>
                    )
                    }
                })}
            </div>
        </div>
        {selectedPokemon.pokemon ? <MovesAlert moves={selectedPokemon}/> : null}
        {/* {selectedPokemon.id ? <div className="selected-pokemon"><img src={selectedPokemon.pokemon.back_image}></img></div> : null} */}
        </>
    );
}

export default BattlePage;
