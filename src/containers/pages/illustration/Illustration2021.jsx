import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const Illustration2021 = () => (
  <div className="page mobile-center">
    <Case>
      <img src="/raw/d/2021/coco-sotsugyou.jpg" alt="kiryu coco sotsugyou" />
      <img src="/raw/d/2021/carnelian.jpg" alt="carnelian" />
      <img src="/raw/d/2021/pallas.jpg" alt="pallas" />
      <img src="/raw/d/2021/goldenglow.jpg" alt="goldenglow" />
      <CaseHead
        title="assorted illustrations"
        sibling="2021"
        subheading="photoshop, clip studio paint, procreate"
      />
      <p>some of my illustrations done over 2021, sorted chronologically.</p>
    </Case>
  </div>
);

export default Illustration2021;
