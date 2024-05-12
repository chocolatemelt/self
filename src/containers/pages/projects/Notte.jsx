import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const Notte = () => (
  <div className="page">
    <Case>
      <CaseHead
        title="notte.moe"
        sibling={
          <>
            (<a href="https://notte.moe">link</a>)
          </>
        }
        comma={false}
      />
      <p>
        as an avid fan of the nintendo x cygames gacha game <em>dragalia lost</em>, i found myself
        wanting of higher quality articles and resources for what is one of the more complicated and
        difficult games in the market. i decided to create the journal myself, drawing on notable
        community members to help write various articles on the games we were all playing.
      </p>
      <p>
        notte.moe runs on an nginx-powered ghost blog, with a custom theme heavily modified from the
        original <a href="https://github.com/jbub/ghostwriter">ghostwriter</a> theme. it features
        git hook integration for auto-deployment and shortcodes to aid in technical write-ups.
      </p>
      <p>
        i also host a <a href="https://notte.moe/dl-fbx/">3d model dump</a> written by my friend,
        among various other small resources.
      </p>
      <p>
        this project is now defunct, so none of the links work, but for historical reasons i'll keep
        them in.
      </p>
    </Case>
  </div>
);

export default Notte;
