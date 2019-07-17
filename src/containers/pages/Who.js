import React from 'react';
import { Link } from 'react-router-dom';

const Who = () => (
  <div className="page who">
    <p>
      sup—i'm a multi-disciplinary developer hanging out in the greater boston area of
      massachusetts.
    </p>
    <p className="br">
      i'm passionate about all things visual. in addition, i'm something of a fountain pen
      connoisseur, which is about as nerdy as it gets.
    </p>
    <p className="br">come say hi:</p>
    <p>hello [at] kevinzha.ng</p>
    <p>
      <a href="/raw/Kevin_Zhang_Résumé.pdf">résumé</a> | <Link to="/cv">cv</Link>
    </p>
  </div>
);

export default Who;
