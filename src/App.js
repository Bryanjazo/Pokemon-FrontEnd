
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';
import { LoginPage } from './components/loginComponent/logInPage';
import Login from './Oauth/SignIn.js'
import PokemonsContainer from './components/pokemon/PokemonsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/pokemon';
import { getMoves } from './actions/moves';



function App() {

  const pokemon = useSelector(state => state.pokemonReducer.pokemon)
  const moves = useSelector(state => state.movesReducer.moves)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pokemon.length === 0) dispatch(getPokemon())
    if (moves.length === 0) dispatch(getMoves())
  }, []);

  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/pokemon' component={PokemonsContainer}/>
    </Router>
  );
}

export default App;
