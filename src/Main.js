import React, { Component } from 'react';

import HoverItem from './components/HoverItem'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h1>hey, i'm kevin</h1>
        <ul>
          <HoverItem
            hover={{}}
            top={0}
            left={0}
            text="about" />
          <li>contact</li>
          <li>instagram</li>
          <li>journal</li>
        </ul>
      </div>
    );
  }
}

export default Main;
