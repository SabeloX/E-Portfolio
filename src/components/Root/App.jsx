import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Work from '../Work/Work';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/work' component={Work}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
