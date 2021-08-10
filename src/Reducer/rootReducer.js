import {combineReducers} from 'redux'
import pokemonReducer from './pokemonReducer'
import movesReducer from './movesReducer'
import userReducer from './userReducer.js'

const rootReducer = combineReducers({
    pokemonReducer: pokemonReducer,
    movesReducer: movesReducer,
    userReducer: userReducer
})

export default rootReducer
