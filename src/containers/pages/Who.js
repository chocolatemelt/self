import React from 'react';
import { Link } from 'react-router-dom';

const Who = () => (
  <div className="page who">
    <p>
      hi! i'm a multi-disciplinary software engineer hanging out in the greater boston area of
      massachusetts.
    </p>
    <p>
      i'm passionate about all things visual: illustration, games, animation, design, and more. i'm
      a mostly self-taught illustrator by hobby, and i love finding the intersections between the
      visual arts and engineering.
    </p>
    <p>
      i also like to tinker with watches in my spare time, purely out of love for the engineering
      that goes into them. currently smitten with the santos de cartier medium (WSSA0029) ;;
    </p>
    <div className="block">
      <p>come say hi:</p>
      <p>hello [at] kevinzha.ng</p>
    </div>
    <p>
      <a href="/raw/Kevin_Zhang_Résumé.pdf">résumé</a> | <Link to="/cv">cv</Link>
    </p>
  </div>
);

export default Who;
