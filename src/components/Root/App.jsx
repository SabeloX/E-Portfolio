import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from '../Work/Work';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/work' component={Work}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
