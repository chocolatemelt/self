import React from 'react';

import HoverItem from '../components/HoverItem';

const Main = () => (
  <div className="main">
    <h1>hey, i'm kevin</h1>
    <ul>
      <HoverItem page="work" text="work">
        xdxd
      </HoverItem>
      <HoverItem page="about" text="about">
        <p>kevin zhang</p>
        <p>frontend engineer @ federated wireless</p>
        <p className="new">
          hey there - i'm a developer slash designer from boston, ma. i did three years doing
          computer science at rensselaer polytechnic institute, graduating in 2017.
        </p>
        <p className="new">
          i'm passionate about art and weird design, despite all evidence pointing to the contrary.
          i'm big on traditional art, which may or may not be related to my inability to use
          tablets. my primary tools are pencil, photoshop, and indesign.
        </p>
        <p className="new">i also have an unhealthy fascination with fountain pens. send help</p>
      </HoverItem>
      <HoverItem page="journal" text="journal" link="/journal">
        <p>[ wave emoji ]</p>
      </HoverItem>
    </ul>
    <ul>
      <HoverItem text="github" link="https://github.com/chocolatemelt">
        <p>spaghetti code with a side of failing builds</p>
      </HoverItem>
      <HoverItem text="instagram" link="https://www.instagram.com/itsuwaru">
        <p>art, food, and other generic instagram stuff</p>
      </HoverItem>
    </ul>
  </div>
);

export default Main;
