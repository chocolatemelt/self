import { Link } from 'react-router-dom';

const Who = () => (
  <div className="page who">
    <p>
      hi! i'm a software engineer currently located in Los Angeles.
    </p>
    <p>
      i'm passionate about all things visual: illustration, photography, design, and more. i'm
      a largely self-taught illustrator, and i love finding the intersections between the
      visual arts and engineering.
    </p>
    <p>
      currently shooting on a leica m4 with a 35/50mm summilux kit.
    </p>
    <div className="block">
      <p>come say hi:</p>
      <p>hello [at] kevinzha.ng</p>
    </div>
    <p>
      <a href="/raw/Kevin_Zhang_Résumé.pdf">résumé</a> | <Link to="/cv">cv</Link>
    </p>
    <p>
      <strong>･ &#3869; ･</strong>
    </p>
  </div>
);

export default Who;
