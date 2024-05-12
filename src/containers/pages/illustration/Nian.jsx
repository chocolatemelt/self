import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const Nian = () => (
  <div className="page mobile-center">
    <Case>
      <img src="/raw/d/2020/nian.jpg" alt="night shift" />
      <CaseHead title="night shift" sibling="2020" subheading="procreate" />
      <p>
        my second completed painting, submitted for the arknights dec 2020 fanart contest. nian, the
        character pictured, is my favorite character from the game, and as a fellow enjoyer of spicy
        chinese cuisine, i had to do her justice.
      </p>
      <p>
        this was my first attempt at photobashing for a full piece, and i found great difficulties
        in correctly keying and lighting the character in the set. looking back now, i find numerous
        flaws in the consistency of the lighting, and i certainly could have done better with the
        paintover stage. however, i'm pleased with the rendering of nian herself, and especially the
        hair.
      </p>
      <p>
        this painting marked a switch from primarily sketching to committing to fully painted
        pieces.
      </p>
    </Case>
  </div>
);

export default Nian;
