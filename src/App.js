import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Loading from './Components/Pages/Loading';
import NavBar from './Components/Pages/NavBar';

function App() {
  return (
    ( <Loading /> &&
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

      </Switch>
    </Router>
  ));
}

export default App;
