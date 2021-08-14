import {combineReducers} from 'redux'
import pokemonReducer from './pokemonReducer'
import movesReducer from './movesReducer'
import userReducer from './userReducer.js'
import battleReducer from './battleReducer'

const rootReducer = combineReducers({
    pokemonReducer: pokemonReducer,
    movesReducer: movesReducer,
    userReducer: userReducer,
    battleReducer: battleReducer
})

export default rootReducer
