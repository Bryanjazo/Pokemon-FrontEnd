
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';
import { LoginPage } from './components/loginComponent/logInPage';
import Login from './Oauth/SignIn.js'
import PokemonsContainer from './components/pokemon/PokemonsContainer';


function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/pokemon' component={PokemonsContainer}/>
    </Router>
  );
}

export default App;
