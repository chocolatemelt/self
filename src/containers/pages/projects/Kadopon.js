import React from 'react';

import Case from '../../../components/Case';
import CaseHead from '../../../components/CaseHead';

const ProjectKadopon = () => (
  <div className="page">
    <Case>
      <CaseHead
        title="kadopon"
        sibling={
          <>
            (<a href="https://github.com/chocolatemelt/kadopon-server">github</a>)
          </>
        }
        subheading="ambitious arpg / tabletop crossover"
        comma={false}
      />
      <p>
        inspired by a wii cult classic,{' '}
        <a href="https://en.wikipedia.org/wiki/Dokapon_Kingdom">dokapon kingdom</a>, i set out to
        create a unique browser experience drawing heavily on the idea of "player-defined
        narratives." i also wanted to craft a more strategic combat system, drawing inspiration from
        the genre-defining arpg games <a href="https://www.pathofexile.com/game">path of exile</a>{' '}
        and <a href="https://en.wikipedia.org/wiki/Diablo_(series)">diablo</a>.
      </p>
      <p>
        the concept of kadopon is "abyss"—an endlessly descending dungeon, replete with all the
        hallmarks of an rpg. the abyss is defined by "layers," each described by its own unique
        environment and ecology. the core thematic revolves around player interaction: choosing to
        remain unopinionated about the tools provided.
      </p>
      <p>
        kadopon is designed as a client-server network model, targeting browsers and possibly
        desktop clients. the server is built primarily on c++: message queues are handled by{' '}
        <a href="http://czmq.zeromq.org/">czmq</a>, the entity-component system is managed by{' '}
        <a href="https://github.com/skypjack/entt">entt</a>, and ci/cd run on{' '}
        <a href="https://cmake.org/">cmake</a> and <a href="https://www.docker.com/">docker</a>.
      </p>
    </Case>
  </div>
);

export default ProjectKadopon;
