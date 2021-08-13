import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOauth } from '../../actions/authentication';
import { getUserPokemon } from '../../actions/userpokemon';
import UserPokemon from '../pokemon/UserPokemon';
import BattlePage from './BattlePage';

const BattleSelectContainer = () => {
    const dispatch = useDispatch()
    const [battlePokemon, setBattlePokemon] = useState([{}, {}, {}, {}, {}, {}])
    const [aIPokemon, setaIPokemon] = useState([{}, {}, {}, {}, {}, {}])
    const [count, setCount] = useState(0)
    const [battleTime, setBattleTime] = useState(false)
    const pokemon = useSelector(state => state.pokemonReducer.pokemon)
    const user = useSelector(state => state.userReducer.details)
    const userPokemon = useSelector(state => state.userReducer.userPokemon)
    const moves = useSelector(state => state.movesReducer.moves)


    useEffect(() => {


    }, [battlePokemon, userPokemon]);



    const createAITeam = (p, i) => {
        if (p.pokemon) {
            let filteredPokemon = pokemon.filter(poke => poke.tier === p.pokemon.tier)
            let randomNumber = Math.floor(Math.random() * filteredPokemon.length)
            aIPokemon[i] = filteredPokemon[randomNumber]
            let totalMoves = aIPokemon[i]["moves"]
            let activeMoves = []
            let count = 0
            while (count < 4) {
                let randomNum = Math.floor(Math.random() * totalMoves.length)
                activeMoves.push(totalMoves[randomNum])
                count++
            }
            aIPokemon[i]["moves"] = activeMoves
        }
    }

    const handleBattleClick = (event) => {
        event.preventDefault()
        setBattleTime(true)
        for (let i = 0; i < battlePokemon.length; i++) {
            createAITeam(battlePokemon[i], i)
        }
    }
    const renderMoveFromStringToObject = (array, p) => {
        for (let i in array) {
            let move = p.moves.find((m) => m.name === array[i])
            array[i] = move
        }

    }

    const handleClick = (event) => {
        if (battlePokemon[5].id === undefined) {
            event.target.style.display = "none"
            let selected = userPokemon.find((p) => p.id === parseInt(event.target.id))
            let pickedMoves = selected.active_moves
            for (let i in pickedMoves){
                pickedMoves[i] = moves.find((m) => m.name === pickedMoves[i])
            }
            selected.active_moves = pickedMoves
            battlePokemon[count] = selected
            setCount(count + 1)

        }
    }
    if (battleTime === true) {

        return (<BattlePage userBattleTeam={battlePokemon} aITeam={aIPokemon} />)
    } else if (userPokemon) {

        return (
            <>
                <h1>Select Team</h1><br></br>
                {battlePokemon[0].id !== undefined ? <div className="battle-button"><button onClick={handleBattleClick}>BATTLE!</button></div> : null}
                <div className="battle-select-pokemon">
                    {battlePokemon.map(p => {
                        if (p.pokemon && p.pokemon.front_image) {
                            return (
                                <div>
                                    <img src={p.pokemon.front_image} style={{ maxHeight: "96px", maxWidth: "96px" }}></img>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <img src={"https://www.pngitem.com/pimgs/m/492-4923347_pokemon-question-mark-sprite-hd-png-download.png"} style={{ maxWidth: "50px", maxHeight: "50px" }}></img>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className="pokedex-container">

                    {
                        userPokemon.map(p => {
                            return (
                                <ul className="user-pokemon">
                                    <li><button id={p.id} onClick={handleClick}>Select</button><br></br></li>
                                    <UserPokemon
                                        name={p.pokemon.name}
                                        id={p.id}
                                        frontImage={p.pokemon.front_image}
                                        uid={p.pokemon.uid}
                                        attack={p.pokemon.attack}
                                        defense={p.pokemon.defense}
                                        specialAttack={p.pokemon.special_attack}
                                        specialDefense={p.pokemon.special_defense}
                                        speed={p.pokemon.speed}
                                        tier={p.pokemon.tier}
                                        key={p.pokemon.id}
                                        description={p.pokemon.description}
                                        types={p.pokemon.types}
                                        activeMoves={p.active_moves}
                                    />
                                </ul>
                            )
                        })
                    }
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Select  Team</h1><br></br>
                {battlePokemon[0].id !== undefined ? <div className="battle-button"><button onClick={handleBattleClick}>BATTLE!</button></div> : null}
                <div className="battle-select-pokemon">
                    {battlePokemon.map(p => {
                        if (p.pokemon && p.pokemon.front_image) {
                            return (
                                <div>
                                    <img src={p.pokemon.front_image} style={{ maxHeight: "96px", maxWidth: "96px" }}></img>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <img src={"https://www.pngitem.com/pimgs/m/492-4923347_pokemon-question-mark-sprite-hd-png-download.png"} style={{ maxWidth: "50px", maxHeight: "50px" }}></img>
                                </div>
                            )
                        }
                    })}
                </div>
            </>
        )
    }
}

export default BattleSelectContainer;
