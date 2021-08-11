import React, { useEffect, useState } from 'react';
import BattleMenu from './BattleMenu';
import './battle.css'

const BattlePage = (props) => {
    const [selectedPokemon, setSelectedPokemon] = useState({})

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
                    else return (
                        <img id={index} src={p.front_image} onClick={handleImageClick}/>
                    )
                })}
            </div>
        </div>
        {selectedPokemon.id ? <div className="selected-pokemon"><img src={selectedPokemon.back_image}></img></div> : null}
        </>
    );
}

export default BattlePage;
