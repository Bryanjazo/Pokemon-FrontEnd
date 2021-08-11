
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';
import  SignIn from './components/loginComponent/logInPage';
import SignUp from './components/loginComponent/SignUp';
import Login from './Oauth/SignIn.js'
import PokemonsContainer from './components/pokemon/PokemonsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/pokemon';
import Home from './components/Home/Home.js'
import BattlePage from './components/battle/BattlePage';
import BattleSelectContainer from './components/battle/BattleSelectContainer';
import { getUserPokemon } from './actions/userpokemon';


function App() {

  const pokemon = useSelector(state => state.pokemonReducer.pokemon)
  const moves = useSelector(state => state.movesReducer.moves)
  const user = useSelector(state => state.userReducer.details)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pokemon.length === 0) dispatch(getPokemon())
    if(user) dispatch(getUserPokemon())

  }, []);

  return (
    <Router>
        <Route path='/Login' component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
        <Route path="/Home" component={Home}/>
        <Route exact path='/pokemon' component={PokemonsContainer}/>
        <Route exact path="/battle" component={BattleSelectContainer}></Route>
    </Router>
  );
}

export default App;
