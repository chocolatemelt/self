import React, { Component } from 'react';

import HoverItem from './components/HoverItem'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>hey, i'm kevin</h1>
        <ul>
          <HoverItem
            top={0}
            left={0}
            text="about">
            <p>new england based developer</p>
          </HoverItem>
          <li>contact</li>
          <li>journal</li>
        </ul>
        <ul>
          <li>github</li>
          <li>instagram</li>
        </ul>
      </div>
    );
  }
}

export default Main;
