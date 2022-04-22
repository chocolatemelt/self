import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import className from 'classnames';

import { openSide, closeSide } from '../actions/Link';
import Drawer from '../components/Drawer';
import DrawerLink from '../components/DrawerLink';
import Nav from '../components/Nav';
import Index from './pages/Index';
import Who from './pages/Who';
import CurriculumVitae from './pages/CurriculumVitae';
import Where from './pages/Where';
import ProjectKadopon from './pages/projects/Kadopon';
import ProjectSelf from './pages/projects/Self';
import Notte from './pages/projects/Notte';
import DrawingsAssorted from './pages/illustration/DrawingsAssorted';
import Ezelith2019 from './pages/illustration/Ezelith2019';
import Nian from './pages/illustration/Nian';
import CompBranding from './pages/compositions/CompBranding';

const RedirectIndex = () => <Redirect to="/" />;
const Redirect404 = () => <Redirect to="/whereami" />;

const onClick = (opened, dispatch) => {
  if (opened) {
    dispatch(closeSide());
  } else {
    dispatch(openSide());
  }
};

const Main = ({ dispatch, location, link }) => (
  <>
    <div className="side">
      <h1>
        <Link className="lead" to="/who">
          hey, i'm kevin
        </Link>
      </h1>
      <div className="mobile-hamburger">
        <button
          type="button"
          className="a"
          onClick={() => onClick(link.opened, dispatch)}
          onKeyDown={() => onClick(link.opened, dispatch)}
        >
          {link.opened ? '<<' : '>>'}
        </button>
      </div>
      <div className={className(link.opened ? 'show' : 'hide', 'links')}>
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
                <Link to="/p/notte">notte.moe</Link>
              </Nav>
              <Nav page="projects">
                <Link to="/p/kadopon">kadopon</Link>
              </Nav>
            </Drawer>
          </li>
          <DrawerLink page="illustration">illustration</DrawerLink>
          <li>
            <Drawer page="illustration">
              <Nav page="illustration">
                <Link to="/d/nian">night shift</Link>
              </Nav>
              <Nav page="illustration">
                <Link to="/d/ezelith">ezelith</Link>
              </Nav>
              <Nav page="illustration">
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
            <a href="https://instagram.com/kaigainiki">instagram</a>
          </Nav>
        </ul>

        {location.pathname !== '/' && (
          <Link className="x" to="/">
            {link.opened ? 'home' : '[x]'}
          </Link>
        )}
      </div>
    </div>

    <TransitionGroup>
      <CSSTransition key={location.key} timeout={{ enter: 100, exit: 100 }} classNames="fade">
        <Switch location={location}>
          <Route path="/" exact component={Index} />
          <Route path="/p/kadopon" component={ProjectKadopon} />
          <Route path="/p/self" component={ProjectSelf} />
          <Route path="/p/notte" component={Notte} />
          <Route path="/d/misc" component={DrawingsAssorted} />
          <Route path="/d/ezelith" component={Ezelith2019} />
          <Route path="/d/nian" component={Nian} />
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
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    key: PropTypes.string,
  }),
  link: PropTypes.shape({
    opened: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  link: state.link,
});

export default withRouter(connect(mapStateToProps)(Main));
