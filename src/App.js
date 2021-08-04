
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Loading from './components/loading';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Loading}/>
    </Router>
  );
}

export default App;
