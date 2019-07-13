import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from '../components/Nav';
import Index from './pages/Index';
import Projects from './pages/Projects';
import Drawings from './pages/Drawings';
import Compositions from './pages/Compositions';
import Who from './pages/Who';

const Main = () => (
  <Router>
    <div className="main">
      <h1>
        <Link className="lead" to="/who">
          hey, i'm kevin
        </Link>
      </h1>
      <ul>
        <Nav link="/projects">projects</Nav>
        <Nav link="/drawings">drawings</Nav>
        <Nav link="/compositions">compositions</Nav>
      </ul>
      <ul>
        <Nav href link="https://github.com/chocolatemelt">
          github
        </Nav>
        <Nav href link="https://instagram.com/itsuwaru">
          instagram
        </Nav>
      </ul>

      <Route path="/" exact component={Index} />
      <Route path="/projects" component={Projects} />
      <Route path="/drawings" component={Drawings} />
      <Route path="/compositions" component={Compositions} />
      <Route path="/who" component={Who} />
    </div>
  </Router>
);

export default Main;
