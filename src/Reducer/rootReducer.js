import {combineReducers} from 'redux'
import pokemonReducer from './pokemonReducer'
import movesReducer from './movesReducer'

const rootReducer = combineReducers({
    pokemonReducer: pokemonReducer,
    movesReducer: movesReducer
})

export default rootReducer

