
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';
import { LoginPage } from './components/Login Component/logInPage';
import Login from './Oauth/SignIn.js'

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
        <Route exact path='/Login' component={Login}/>
    </Router>
  );
}

export default App;
