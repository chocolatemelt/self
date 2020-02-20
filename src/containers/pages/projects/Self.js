import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const ProjectSelf = () => (
  <div className="page">
    <Case>
      <CaseHead title="self—" subheading="the personal portfolio" />
      <p>
        one of my biggest challenges is building a personal portfolio. never satisfied, it is always
        in a state of "work-in-progress." the result you see now is the present iteration—a snapshot
        of my current artistic direction.
      </p>
      <p>
        my influences have been primarily brutalist and asian type design. for my portfolio, i
        focused on conveying the content respectfully. i'm still not satisfied, but i hope i've
        expressed myself properly.
      </p>
      <p>built with react+redux.</p>
    </Case>
  </div>
);

export default ProjectSelf;
