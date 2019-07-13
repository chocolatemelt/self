import React from 'react';

import HoverItem from '../components/HoverItem';

const Main = () => (
  <div className="main">
    <h1>
      <a className="lead" href="/who">
        hey, i'm kevin
      </a>
    </h1>
    <ul>
      <HoverItem text="projects" link="/projects" />
      <HoverItem text="drawings" link="/drawings" />
      <HoverItem text="compositions" link="compositions" />
    </ul>
    <ul>
      <HoverItem text="github" link="https://github.com/chocolatemelt" />
      <HoverItem text="instagram" link="https://www.instagram.com/itsuwaru" />
    </ul>
  </div>
);

export default Main;
