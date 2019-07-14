import React from 'react';

import Case from '../../components/Case';

const Projects = () => (
  <div className="page">
    <Case>
      <h2>
        kadopon (<a href="https://github.com/chocolatemelt/kadopon-server">github</a>)
      </h2>
      <h3>ambitious arpg / tabletop crossover</h3>
      <p className="br">
        inspired by a wii cult classic,{' '}
        <a href="https://en.wikipedia.org/wiki/Dokapon_Kingdom">dokapon kingdom</a>, i set out to
        create a unique browser experience drawing heavily on the idea of "player-defined
        narratives." i also wanted to craft a more strategic combat system, drawing from the
        defining arpg games of our time,{' '}
        <a href="https://www.pathofexile.com/game">path of exile</a> and{' '}
        <a href="https://en.wikipedia.org/wiki/Diablo_(series)">diablo</a>.
      </p>
      <p className="br">
        the concept of kadopon is "abyss"—an endlessly descending dungeon, replete with all the
        hallmarks of an rpg. the abyss is split up into various unique "layers", all with their own
        fauna and flora. players descending into the abyss are not necessarily all allies, and the
        narrative is driven by the players and their actions.
      </p>
      <p className="br">
        kadopon is intended to be a server-client network model, targeting browsers and possibly
        desktop clients. the server is built on c++ for performance and the wide array of
        established libraries. message queues are handled by{' '}
        <a href="http://czmq.zeromq.org/">czmq</a>. the entity-component system is primarily{' '}
        <a href="https://github.com/skypjack/entt">entt</a>, a design choice made due to the
        complexity of the game mechanics. build and deployment run on{' '}
        <a href="https://cmake.org/">cmake</a> and <a href="https://www.docker.com/">docker</a>.
      </p>
    </Case>
    <Case>
      <h2>
        yuna (<a href="https://github.com/chocolatemelt/yuna">github</a>)
      </h2>
      <h3>epic 7 stat and damage calculator</h3>
      <p className="br">
        in november of 2018, i found myself sucked into the strangely compelling korean gacha game
        called <a href="https://www.smilegate.com/en/game/game.asp?cd_game=35">epic 7</a>. i took
        the opportunity to attempt to create a comprehensive unit calculator, as game mechanics at
        the time weren't well-understood and required some neat reverse engineering from the
        community.
      </p>
      <p className="br">
        yuna is built with{' '}
        <a href="https://facebook.github.io/create-react-app/">create-react-app</a>, and uses redux
        to handle state changes. it is no longer under active development.
      </p>
    </Case>
    <Case>
      <h2>
        fe-cli (<a href="https://github.com/chocolatemelt/fe-cli">github</a>)
      </h2>
      <h3>curses-based fire emblem</h3>
      <p className="br">
        bored in college and playing the recently-released{' '}
        <a href="https://en.wikipedia.org/wiki/Fire_Emblem_Fates">fire emblem: fates</a>, an
        incredible idea dawned on me: i should make fire emblem playable on linux, for the express
        purpose of looking busy during lectures. as a naïve college sophomore, this was my attempt
        to bring the popular strategy game to the terminal.
      </p>
      <p className="br">
        warning: the code is not good. i may revisit this idea in the near future. fe-cli primarily
        runs on the <a href="https://www.gnu.org/software/ncurses/">ncurses</a> library for terminal
        redrawing, which would ideally happen on every game tick. at the time, i had no concept of
        the entity-component system, and attempted to brute force the well-known game mechanics
        using my poorly understood object-oriented programming paradigms.
      </p>
    </Case>
  </div>
);

export default Projects;
