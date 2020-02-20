import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const CompBranding = () => (
  <div className="page mobile-center">
    <Case>
      <img src="/raw/c/branding/splash.png" alt="branding splash" />
      <CaseHead
        title="self-branding study"
        sibling="2017"
        subheading="rensselaer polytechnic institute"
      />
      <p>
        a semester-end study on self-branding. focused on a strong identity around <em>Futura</em>'s
        capital letter glyph set. <em>Interstate</em> was used as a secondary font to complement the
        sharp terminals.
      </p>
      <img src="/raw/c/branding/businesscards.png" alt="business cards" />
      <p>
        inDesign was used to mock up initial drafts, playing with negative space and different
        <em>Futura</em> weights; medium was finally chosen to allow the type to breathe. my aim was
        primarily on balancing the silhouette for an aesthetically interesting design.
      </p>
      <img src="/raw/c/branding/process.png" alt="business card process" />
    </Case>
  </div>
);

export default CompBranding;
