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
        {selectedPokemon.pokemon ? <MovesAlert moves={selectedPokemon}/> : null}
        {/* {selectedPokemon.id ? <div className="selected-pokemon"><img src={selectedPokemon.pokemon.back_image}></img></div> : null} */}
        </>
    );
}

export default BattlePage;
