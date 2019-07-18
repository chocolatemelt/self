import React from 'react';

import Case from '../../../components/Case';

const CompBranding = () => (
  <div className="page mobile-center">
    <Case>
      <img src="/raw/c/branding/splash.png" alt="branding splash" />
      <h2>self-branding study, 2017</h2>
      <h3>rensselaer polytechnic institute</h3>
      <p className="br">
        a semester-end study on self-branding. focused on a strong identity around Futura's capital
        letter glyph set. Interstate was used as a secondary font to complement the sharp terminals.
      </p>
      <img src="/raw/c/branding/businesscards.png" alt="business cards" />
      <p>
        used inDesign to mock up initial drafts, playing with negative space and different Futura
        weights. eventually settled on medium to allow the type to breathe. my focus was on
        balancing the silhouette for an aesthetically interesting design; readability was not a
        priority due to the information being located in plain formatting on the back.
      </p>
      <img src="/raw/c/branding/process.png" alt="business card process" />
    </Case>
  </div>
);

export default CompBranding;
