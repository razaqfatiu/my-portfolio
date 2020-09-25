import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Contact from './Components/Pages/Contact';
import Loading from './Components/Pages/Loading';
import NavBar from './Components/Pages/NavBar';
import Projects from './Components/Pages/Projects';
import Blog from './Components/Pages/Blog';
import About from './Components/Pages/About';

function App() {
  return (
    (<Loading /> &&
      <Router>
        <NavBar />

        <Switch>
          <Route exact path='/'>
            <Home />
            <About />
            <Projects />
            <Contact />
          </Route>

          <Route path='/blog'>
            <Blog />
          </Route>

        </Switch>

      </Router>
    ));
}

export default App;
