import React from 'react';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Drawer from '../components/Drawer';
import Nav from '../components/Nav';
import Index from './pages/Index';
import Projects from './pages/Projects';
import Drawings from './pages/Drawings';
import Compositions from './pages/Compositions';
import Who from './pages/Who';
import CurriculumVitae from './pages/CurriculumVitae';
import Where from './pages/Where';

const Redirect404 = () => <Redirect to="/whereami" />;

const Main = ({ location }) => (
  <>
    <div className="side">
      <h1>
        <Link className="lead" to="/who">
          hey, i'm kevin
        </Link>
      </h1>
      <ul>
        <Nav page="projects">projects</Nav>
        <li>
          <Drawer page="projects" {...location}>
            <li>hi</li>
          </Drawer>
        </li>
        <Nav page="drawings" link="/drawings">
          drawings
        </Nav>
        <Nav page="compositions" link="/compositions">
          compositions
        </Nav>
      </ul>
      <ul>
        <Nav page="github" href="https://github.com/chocolatemelt">
          github
        </Nav>
        <Nav page="instagram" href="https://instagram.com/itsuwaru">
          instagram
        </Nav>
      </ul>

      {location.pathname !== '/' && (
        <Link className="x" to="/">
          [x]
        </Link>
      )}
    </div>

    <TransitionGroup>
      <CSSTransition key={location.key} timeout={100} classNames="fade">
        <Switch location={location}>
          <Route path="/" exact component={Index} />
          <Route path="/projects" component={Projects} />
          <Route path="/drawings" component={Drawings} />
          <Route path="/compositions" component={Compositions} />
          <Route path="/who" component={Who} />
          <Route path="/cv" component={CurriculumVitae} />
          <Route path="/whereami" component={Where} />
          <Route path="*" component={Redirect404} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  </>
);

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }),
};

export default withRouter(Main);
