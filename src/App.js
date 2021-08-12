import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Loading from './components/loading';
import  SignIn from './components/loginComponent/logInPage';
import SignUp from './components/loginComponent/SignUp';
import PokemonsContainer from './components/pokemon/PokemonsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/pokemon';
import Home from './components/Home/Home.js'
import BattlePage from './components/battle/BattlePage';
import BattleSelectContainer from './components/battle/BattleSelectContainer';
import { getUserPokemon } from './actions/userpokemon';
import NavBar from './components/Home/navBar.js';

import {fetchOauth} from './actions/authentication.js'


function App() {

  const pokemon = useSelector(state => state.pokemonReducer.pokemon)
  const moves = useSelector(state => state.movesReducer.moves)
  const user = useSelector(state => state.userReducer.details)
  const authenthicatedUser = useSelector(state => state.userReducer.authenthication)
  const current_user = user.uid
  const dispatch = useDispatch()
  const userOauth = localStorage.token
  const [authenthicated, setAuthenthicated] = useState(false)

console.log(authenthicatedUser)

  useEffect(() => {
    if (pokemon.length === 0) dispatch(getPokemon())

    if(userOauth){
      dispatch(fetchOauth(userOauth))
      setAuthenthicated(true)
    }else{
      <Redirect to="/Login"></Redirect>
      alert("Please Sign In")
    }
  }, []);


  return (
    <Router>
      <Switch>
        <Route path='/Login' component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
          <Route path={authenthicatedUser ? '/Home' : '/'}>
          <NavBar />
          <Home />
          </Route>
        <Route exact path={authenthicatedUser ? '/pokemon' : '/'}>
         <NavBar/>
         <PokemonsContainer />
        </Route>
        <Route exact path={authenthicatedUser ? '/battle' : '/'} >
          <NavBar/>
          <BattleSelectContainer />
        </Route>
      <Route exact path="/">
        {current_user !== '' ?  <Redirect to="/home" /> :  <Redirect to="/Login" />}
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
