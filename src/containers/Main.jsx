import { connect } from 'react-redux';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
import Illustration2021 from './pages/illustration/Illustration2021';
import CompBranding from './pages/compositions/CompBranding';

const RedirectIndex = () => <Navigate to="/" />;
const Redirect404 = () => <Navigate to="/whereami" />;

const onClick = (opened, dispatch) => {
  if (opened) {
    dispatch(closeSide());
  } else {
    dispatch(openSide());
  }
};

const Main = ({ dispatch, link }) => {
  const location = useLocation();

  return (
    <>
      <div className="side">
        <h1>
          <Link className="lead" to="/who">
            kevin zhang
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
                  <Link to="/d/illustration2021">illustrations 2021</Link>
                </Nav>
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
              <a href="https://github.com/chocolatemelt" target="_blank">github</a>
            </Nav>
            <Nav page="pixiv">
              <a href="https://www.pixiv.net/en/users/12219627" target="_blank">pixiv</a>
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
          <Routes location={location}>
            <Route path="/" exact element={<Index />} />
            <Route path="/p/kadopon" element={<ProjectKadopon />} />
            <Route path="/p/self" element={<ProjectSelf />} />
            <Route path="/p/notte" element={<Notte />} />
            <Route path="/d/misc" element={<DrawingsAssorted />} />
            <Route path="/d/ezelith" element={<Ezelith2019 />} />
            <Route path="/d/nian" element={<Nian />} />
            <Route path="/d/illustration2021" element={<Illustration2021 />} />
            <Route path="/c/branding" element={<CompBranding />} />
            <Route path="/who" element={<Who />} />
            <Route path="/cv" element={<CurriculumVitae />} />
            <Route path="/whereami" element={<Where />} />
            <Route path="/(p|d|c)" exact element={<RedirectIndex />} />
            <Route path="*" element={<Redirect404 />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  link: PropTypes.shape({
    opened: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  link: state.link,
});

export default connect(mapStateToProps)(Main);
