import React, { Component } from 'react';

import HoverItem from './components/HoverItem'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>hey, i'm kevin</h1>
        <ul>
          <HoverItem
            top={3}
            left={10}
            page="about"
            text="about">
            <p>kevin zhang</p>
            <p>frontend engineer @ federated wireless</p>
            <p className="new">
              hey there - i'm a developer slash designer from boston, ma.
              i'm a graduate of rensselaer polytechnic institute's class of
              2017, though i entered with the class of 2018.
            </p>
            <p className="new">
              i have an unhealthy fascination with fountain pens.
              send help
            </p>
          </HoverItem>
          <HoverItem
            top={3}
            left={10}
            page="contact"
            text="contact">
            <p>hello [at] zhangkev.in</p>
            <p className="new">though i doubt anyone's gonna scrape that email...</p>
          </HoverItem>
          <HoverItem
            top={3}
            left={10}
            page="journal"
            text="journal">
            <p>personal thoughts and opinions are mine and mine alone</p>
          </HoverItem>
        </ul>
        <ul>
          <HoverItem
            top={3}
            left={10}
            page="github"
            text="github">
            <p>various codebases of questionable usefulness</p>
          </HoverItem>
          <HoverItem
            top={3}
            left={10}
            page="instagram"
            text="instagram">
            <p>personal stuff for now - but maybe i'll start posting art</p>
          </HoverItem>
        </ul>
      </div>
    );
  }
}

export default Main;
