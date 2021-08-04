
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';
import { LoginPage } from './components/Login Component/logInPage';

function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
    </Router>
  );
}

export default App;
