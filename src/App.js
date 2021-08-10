
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';
import { LoginPage } from './components/loginComponent/logInPage';
import Login from './Oauth/SignIn.js'
import PokemonsContainer from './components/pokemon/PokemonsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/pokemon';




function App() {

  const pokemon = useSelector(state => state.pokemonReducer.pokemon)

  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/pokemon' component={PokemonsContainer}/>
    </Router>
  );
}

export default App;
