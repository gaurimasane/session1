import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, NavLink,Route} from 'react-router-dom';
import Home from './Components/Home';
import CreateBoard from './Components/CreateBoard';


function App() {
  return (
   
  <Router>
  <div>
  <div className="main">
  <h1 className="logo">Pro-Organizer</h1>
  <nav className="nav">
  <ul className="ul">
  <li className="li">
      <NavLink exact activeClassName="active" to="/">
      Home
      </NavLink>
  </li>
  <li className="li">
  <NavLink exact activeClassName="active" to="/createBoard">
     Create Board
      </NavLink>
  </li>
  </ul>
  </nav>
  </div>

  <Switch>
  <Route exact path="/" component={Home}></Route>
  <Route exact path="/createBoard" component={CreateBoard}></Route>
  </Switch>

  </div>
  </Router>
   
  );
}

export default App;
