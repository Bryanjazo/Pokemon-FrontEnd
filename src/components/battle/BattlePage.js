import React, { useEffect, useState } from 'react';
import BattleMenu from './BattleMenu';
import MovesAlert from './MovesAlert';
import './battle.css'

const BattlePage = (props) => {

   
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
        <div className="battle-menus">
            <div className="user-battle-menu">
                {<BattleMenu userTeam={props.userBattleTeam}/>}
            </div>  
            <div className="ai-battle-menu">
                {<BattleMenu aITeam={props.aITeam} selectedPokemon={selectedPokemon}/>}
            </div>
        </div> 
        <div className="teams">    
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
            <div className="ai-battle-team">
            <h3>Challengers</h3>
                {props.aITeam.map((p, index) => {
                    return (
                        <img id={index} src={p.front_image} onClick={handleImageClick}/>
                    )
                    }
                )}
            </div>
            </div> 
        </div>
        {selectedPokemon.pokemon ? <MovesAlert selectedPokemon={selectedPokemon}/> : null}
        </>
    );
}

export default BattlePage;
