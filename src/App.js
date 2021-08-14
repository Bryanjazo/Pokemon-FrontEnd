import React, {useState} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory, withRouter} from 'react-router-dom';
import Loading from './components/loading';
import  SignIn from './components/loginComponent/logInPage';
import SignUp from './components/loginComponent/SignUp';
import PokemonsContainer from './components/pokemon/PokemonsContainer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemon } from './actions/pokemon';
import Home from './components/Home/Home.js'
import BattleSelectContainer from './components/battle/BattleSelectContainer';
import NavBar from './components/Home/navBar.js';
import {fetchOauth} from './actions/authentication.js'
import { getMoves } from './actions/moves';


function App() {
  const history = useHistory()
  const pokemon = useSelector(state => state.pokemonReducer.pokemon)
  const moves = useSelector(state => state.movesReducer.moves)
  const user = useSelector(state => state.userReducer.details)
  const current_user = user.uid
  const dispatch = useDispatch()
  const userOauth = localStorage.token
  const [authenthicated, setAuthenthicated] = useState(false)


console.log(authenthicated)
  useEffect(() => {
    dispatch(getMoves())
    dispatch(getPokemon())
    if(userOauth){
        dispatch(fetchOauth(userOauth))
        setAuthenthicated(true)
    }else{
      debugger
      <Redirect to="/"></Redirect>



    }
  }, []);


  console.log("User authenthication:", user)
  return (
    <Router>
      <Switch>
        <Route path='/Login' component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
          <Route path={authenthicated === true ? '/Home' : '/'}>
          <NavBar />
          <Home />
          </Route>
        <Route exact path={authenthicated ? '/pokemon' : '/'}>
         <NavBar/>
         <PokemonsContainer />
        </Route>
        <Route exact path={authenthicated ? '/battle' : '/'} >
          <NavBar/>
          <BattleSelectContainer />
        </Route>
      <Route exact path="/">
        {authenthicated === true ?  <Redirect to="/Home" /> :  <Redirect to="/Login" />}
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
