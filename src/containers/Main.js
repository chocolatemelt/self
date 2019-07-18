import React from 'react';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import Drawer from '../components/Drawer';
import DrawerLink from '../components/DrawerLink';
import Nav from '../components/Nav';
import Index from './pages/Index';
import Who from './pages/Who';
import CurriculumVitae from './pages/CurriculumVitae';
import Where from './pages/Where';
import ProjectKadopon from './pages/projects/Kadopon';
import ProjectSelf from './pages/projects/Self';
import DrawingsAssorted from './pages/drawings/DrawingsAssorted';
import CompBranding from './pages/compositions/CompBranding';

const RedirectIndex = () => <Redirect to="/" />;
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
        <Nav page="projects">
          <DrawerLink page="projects">projects</DrawerLink>
        </Nav>
        <li>
          <Drawer page="projects">
            <Nav page="projects">
              <Link to="/p/self">self</Link>
            </Nav>
            <Nav page="projects">
              <Link to="/p/kadopon">kadopon</Link>
            </Nav>
          </Drawer>
        </li>
        <DrawerLink page="drawings">drawings</DrawerLink>
        <li>
          <Drawer page="drawings">
            <Nav page="drawings">
              <Link to="/d/misc">assorted sketches</Link>
            </Nav>
          </Drawer>
        </li>
        <DrawerLink page="compositions">compositions</DrawerLink>
        <li>
          <Drawer page="compositions">
            <Nav page="compositions">
              <Link to="/c/branding">branding</Link>
            </Nav>
          </Drawer>
        </li>
      </ul>
      <ul>
        <Nav page="github">
          <a href="https://github.com/chocolatemelt">github</a>
        </Nav>
        <Nav page="instagram">
          <a href="https://instagram.com/itsuwaru">instagram</a>
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
          <Route path="/p/kadopon" component={ProjectKadopon} />
          <Route path="/p/self" component={ProjectSelf} />
          <Route path="/d/misc" component={DrawingsAssorted} />
          <Route path="/c/branding" component={CompBranding} />
          <Route path="/who" component={Who} />
          <Route path="/cv" component={CurriculumVitae} />
          <Route path="/whereami" component={Where} />
          <Route path="/(p|d|c)" exact component={RedirectIndex} />
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
