import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App page-wrapper with-navbar">
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
