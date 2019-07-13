import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from '../components/Nav';

function Index() {
  return <h2>nothing to see but us chickens</h2>;
}

function About() {
  return <h2>about</h2>;
}

function Projects() {
  return <h2>projects</h2>;
}

function Drawings() {
  return <h2>drawings</h2>;
}

function Compositions() {
  return <h2>comps</h2>;
}

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
      <Route path="/who" component={About} />
    </div>
  </Router>
);

export default Main;
