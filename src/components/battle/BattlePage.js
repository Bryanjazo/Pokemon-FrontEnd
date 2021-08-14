import React, { useEffect, useState } from 'react';
import BattleMenu from './BattleMenu';
import MovesAlert from './MovesAlert';
import './battle.css'
import OpponentSelectedPokemon from './OpponentSelectedPokemon';
import { incrementCounter } from '../../actions/battle';
import { useDispatch, useSelector } from 'react-redux';
import { Place } from '@material-ui/icons';

const BattlePage = (props) => {

    const [winCheck, setWinCheck] = useState(props.aITeam)
    const [userBattleTeam, setUserBattleTeam] = useState(props.userBattleTeam)
    const [aITeam, setAITeam] = useState(props.aITeam)
    const [selectedPokemon, setSelectedPokemon] = useState(userBattleTeam[0])
    const [selectedAIPokemon, setSelectedAIPokemon] = useState(aITeam[0])
    let turnCount = useSelector(state => state.battleReducer.turnCount)
    const dispatch = useDispatch()
    let selectedUserMove = useSelector(state => state.battleReducer.selectedUserMove)

    useEffect(() => {
        return () => { 
        };
    }, [selectedPokemon]);

    const checkTurn = () =>{
        if (turnCount % 2 === 0){
            return selectedPokemon
        } else {
            return selectedAIPokemon
        }
    }

    const gamePlay = () => {
        let gameEnd = false
        let winner = ""
        while (gameEnd === false){
            if (aITeam.length === 1 && selectedAIPokemon.hp === 0){
                gameEnd = true
                winner = "player"
            }
            if (userBattleTeam.length === 1 && selectedPokemon.hp === 0){
                gameEnd = true
                winner = "AI"
            }
            let pokemon = checkTurn()

            if(pokemon != selectedAIPokemon){
                if(pokemon.hp === 0){
                    setUserBattleTeam(userBattleTeam.filter((p) => p.id !== pokemon.id))
                    setSelectedPokemon(userBattleTeam[0])
                    pokemon = selectedPokemon
                }

                if(selectedUserMove != {}){
                    setSelectedAIPokemon({...selectedAIPokemon, hp: selectedAIPokemon.hp - selectedUserMove.damage})
                    dispatch(incrementCounter(turnCount))
                }
            } 
            else {
                if(pokemon.hp === 0 && aITeam.length > 1){
                    setAITeam(aITeam.filter((p) => p.id !== pokemon.id))
                    setSelectedAIPokemon(aITeam[0])
                    pokemon = selectedAIPokemon
                }   
                let randomNum = Math.floor((Math.random * pokemon.moves.length)) 
                let chosenMove = pokemon.moves[randomNum]
                setSelectedPokemon({...selectedPokemon, hp: selectedPokemon.hp - chosenMove.damage})
                dispatch(incrementCounter(turnCount))

            }
        }
    }

    const handleImageClick = (event) => {
        event.preventDefault()
        setSelectedPokemon(props.userBattleTeam[event.target.id])
        dispatch(incrementCounter(turnCount))
    }
    return (
        <>
        <div className="battle-page">
        <div className="battle-menus">
            <div className="user-battle-menu">
                {<BattleMenu userTeam={props.userTeam} selectedPokemon={selectedPokemon.pokemon}/>}
            </div>  
            <div className="ai-battle-menu">
                {<BattleMenu selectedPokemon={selectedAIPokemon}/>}
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
                    if (selectedAIPokemon.id === p.id) return (<p></p>)

                    else return (
                        <img id={index} src={p.front_image} onClick={handleImageClick}/>
                    )
                    }
                )}
            </div>
            </div> 
        </div>
        {selectedPokemon.pokemon ? <MovesAlert key={selectedPokemon.uid + selectedPokemon.name} selectedPokemon={selectedPokemon}/> : null}
        {selectedPokemon.pokemon ? <OpponentSelectedPokemon selectedAIPokemon={selectedAIPokemon}/> : null}
        </>
    );
}

export default BattlePage;
