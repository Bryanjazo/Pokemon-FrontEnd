import React, { useEffect, useState } from 'react';
import BattleMenu from './BattleMenu';
import MovesAlert from './MovesAlert';
import './battle.css'
import OpponentSelectedPokemon from './OpponentSelectedPokemon';
import { incrementCounter, setUserMove } from '../../actions/battle';
import { useDispatch, useSelector } from 'react-redux';
import { Place } from '@material-ui/icons';
import { makeid } from '../../actions/authentication';

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
        gamePlay()
    }, [turnCount, aITeam]);

    const checkTurn = () =>{
        if (turnCount % 2 === 0){
            return selectedPokemon
        } else {
            return selectedAIPokemon
        }
    }

    const gamePlay = () => {
        let winner = ""
        let gameEnd = false
        while (gameEnd === false){
            if (!aITeam[0].name && selectedAIPokemon.hp <= 0){
                gameEnd = true
                winner = "player"
                console.log("You WON!")
            }
            if (userBattleTeam.length === 1 && selectedPokemon.hp <= 0){
                gameEnd = true
                winner = "AI"
                console.log("You LOSE.")
            }

            // if (selectedPokemon.pokemon.hp <= 0){
            //     setUserBattleTeam(userBattleTeam.filter((p) => p.id !== selectedPokemon.pokemon.id))
            //     setSelectedPokemon(userBattleTeam[0])
            // }

            // if (selectedAIPokemon.hp <= 0){
            //     setAITeam(aITeam.filter((p) => p.id !== selectedAIPokemon.id))
            //     setSelectedAIPokemon(aITeam.filter((p) => p.id !== selectedAIPokemon.id)[0])
            // }
            let pokemon = checkTurn()

            if(turnCount % 2 == 0){
                // if(selectedPokemon.pokemon.hp <= 0){
                //     setUserBattleTeam(userBattleTeam.filter((p) => p.id !== selectedPokemon.pokemon.id))
                //     setSelectedPokemon(userBattleTeam[0]) 
                // }

                if(selectedUserMove != ""){
                    let statChange = selectedAIPokemon.hp - selectedUserMove.power
      
                    selectedAIPokemon.hp = statChange
                    // setSelectedAIPokemon({...selectedAIPokemon, hp: statChange})
                    dispatch(setUserMove(""))
                    if(selectedAIPokemon.hp <= 0 && aITeam.length > 1){
                
                    let newAITeam = aITeam.filter((p) => p.id !== selectedAIPokemon.id)
                    setAITeam(newAITeam)
                    if (newAITeam[0].name) {
                        setSelectedAIPokemon(aITeam.filter((p) => p.id !== selectedAIPokemon.id)[0])
                    }
                } 
                }
                 
                // if(selectedPokemon.pokemon.hp <= 0){
                //     setUserBattleTeam(userBattleTeam.filter((p) => p.id !== selectedPokemon.pokemon.id))
                //     setSelectedPokemon(userBattleTeam[0]) 
                // }
            } else if(turnCount % 2 != 0) {
                // if(selectedAIPokemon.hp <= 0 && aITeam.length > 1){
                //     {debugger}
                //     let newAITeam = aITeam.filter((p) => p.id !== selectedAIPokemon.id)
                //     setAITeam(newAITeam)
                //     setSelectedAIPokemon(aITeam.filter((p) => p.id !== selectedAIPokemon.id)[0])
        
                // }   
    
                let randomNum = Math.floor((Math.random() * parseInt(pokemon.moves.length))) 
                let chosenMove = selectedAIPokemon.moves[randomNum]
                let statChange = selectedPokemon.pokemon.hp - chosenMove.power
                selectedPokemon.pokemon.hp = statChange
                
                // setSelectedPokemon({...selectedPokemon, pokemon: {...selectedPokemon.pokemon, hp: statChange}})
                dispatch(incrementCounter(turnCount))

                if(selectedPokemon.pokemon.hp <= 0){
                    let newUserTeam = userBattleTeam.filter((p) => p.pokemon_id !== selectedPokemon.pokemon.id)
                    setUserBattleTeam(newUserTeam)
                    if (newUserTeam[0].pokemon) {
                        setSelectedPokemon(newUserTeam[0])
                    }
                    // setSelectedPokemon(userBattleTeam[0]) 
                }
            }
            
            gameEnd = true
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
        {selectedPokemon.pokemon ? <MovesAlert key={() => makeid(20)} selectedPokemon={selectedPokemon}/> : null}
        
        {selectedPokemon.pokemon ? <OpponentSelectedPokemon selectedAIPokemon={selectedAIPokemon}/> : null}
        </>
    );
}


export default BattlePage;
