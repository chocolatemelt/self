import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HoverItem from '../components/HoverItem';

const Main = () => (
  <Router>
    <div className="main">
      <h1>
        <a className="lead" href="/who">
          hey, i'm kevin
        </a>
      </h1>
      <ul>
        <HoverItem link="/projects">projects</HoverItem>
        <HoverItem link="/drawings">drawings</HoverItem>
        <HoverItem link="/compositions">compositions</HoverItem>
      </ul>
      <ul>
        <HoverItem href="https://github.com/chocolatemelt">github</HoverItem>
        <HoverItem href="https://instagram.com/itsuwaru">instagram</HoverItem>
      </ul>
    </div>
  </Router>
);

export default Main;
