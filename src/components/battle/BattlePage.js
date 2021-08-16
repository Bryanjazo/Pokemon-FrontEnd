import React, { useEffect, useState } from 'react';
import BattleMenu from './BattleMenu';
import MovesAlert from './MovesAlert';
import './battle.css'
import OpponentSelectedPokemon from './OpponentSelectedPokemon';
import { addTokensToUser, incrementCounter, setUserMove } from '../../actions/battle';
import { useDispatch, useSelector } from 'react-redux';
import { Place } from '@material-ui/icons';
import { makeid } from '../../actions/authentication';
import {SimpleModal} from '../SimpleModal';
import { Redirect, useHistory } from 'react-router-dom';
import {userWins, userLoses} from '../../actions/UserWins.js'
const BattlePage = (props) => {

    const [winCheck, setWinCheck] = useState(props.aITeam)
    const [userBattleTeam, setUserBattleTeam] = useState(props.userBattleTeam)
    const [aITeam, setAITeam] = useState(props.aITeam)
    const [selectedPokemon, setSelectedPokemon] = useState(userBattleTeam[0])
    const [selectedAIPokemon, setSelectedAIPokemon] = useState(aITeam[0])
    const [AIWin, setAIWin] = useState(false);
    const [userWin, setUserWin] = useState(false)
    let turnCount = useSelector(state => state.battleReducer.turnCount)
    const dispatch = useDispatch()
    let selectedUserMove = useSelector(state => state.battleReducer.selectedUserMove)
    let history = useHistory()
    let user = useSelector(state => state.userReducer.details)
    let wins = user.wins
    let uid = user.uid
    let win_streak = user.win_streak
    useEffect(() => {

    }, [turnCount, aITeam]);


    const checkTurn = () =>{
        if (turnCount % 2 === 0){
            return selectedPokemon
        } else {
            return selectedAIPokemon
        }
    }
    console.log(uid,wins, win_streak)
    const coinMultiplier = (array) => {
        let coinTotal = 0
        for (let i in array){
            if(array[i].tier === 1) coinTotal += 10
            if(array[i].tier === 2) coinTotal += 20
            if(array[i].tier === 3) coinTotal += 30
        }
        return coinTotal
    }
    console.log(user)

    const gamePlay = () => {
        let winner = ""
        let gameEnd = false
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
                    } else if (AIWin !== true) {

                            setUserWin(true)
                            winner = "player"
                            let outcome = "win"
                            let coins = coinMultiplier(winCheck)
                            let totalCoins = coins + user.tokens
                            dispatch(addTokensToUser(user.id, totalCoins))
                            // dispatch(userWins(uid, wins + 1, win_streak + 1))

                            console.log("You win")
                            alert("You won")
                            window.location.reload('/Home')
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
                    } else if (userWin !== true) {
                        {debugger}
                            setAIWin(true)
                            winner = "AI"
                            // dispatch(userLoses(uid, win_streak = 0))
                            console.log("You LOSE.")
                            window.location.reload('/Home')
                                alert("You lost")

                    }
                    // setSelectedPokemon(userBattleTeam[0])
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
        {selectedPokemon.pokemon ? <MovesAlert key={() => makeid(20)} selectedPokemon={selectedPokemon}/> : null}

        {selectedPokemon.pokemon ? <OpponentSelectedPokemon selectedAIPokemon={selectedAIPokemon}/> : null}
        {gamePlay()}
        </>
    );
}


export default BattlePage;
