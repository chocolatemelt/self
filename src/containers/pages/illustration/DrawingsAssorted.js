import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const DrawingsAssorted = () => (
  <div className="page mobile-center">
    <Case>
      <img src="/raw/d/misc/akali.png" alt="kda akali profile sketch" />
      <img src="/raw/d/misc/elisanne.png" alt="elisanne portrait" />
      <img src="/raw/d/misc/lyn.png" alt="lyn" />
      <img src="/raw/d/misc/freeform.png" alt="stretching girl" />
      <CaseHead
        title="assorted sketches"
        sibling="2019"
        subheading="photoshop, clip studio paint"
      />
      <p>four sketches done in my free time over the course of the year, listed chronologically.</p>
    </Case>
  </div>
);

export default DrawingsAssorted;
