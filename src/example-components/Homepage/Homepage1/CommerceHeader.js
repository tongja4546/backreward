import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Collapse,
  Grid,
  Container,
  Dialog,
  Button,
  List,
  ListItem,
  TextField
} from '@material-ui/core';

import projectLogo from '../../../assets/images/react.svg';
import { NavLink } from 'react-router-dom';
import people2 from '../../../assets/images/stock-photos/people-2.jpg';

import { FlagIcon } from 'react-flag-kit';

export default function LivePreviewExample() {
  const [loginModal, setLoginModal] = useState(false);
  const toggleLogin = () => setLoginModal(!loginModal);

  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <>
      <div className="bg-white shadow-xxl flex-column header-nav-wrapper navbar-light">
        <Container className="header-top-section pt-2 d-block">
          <div className="d-flex header-nav-menu justify-content-between align-items-center navbar-dark">
            <ul className="d-flex">
              <li className="ml-0">
                <Button
                  variant="text"
                  className="rounded-sm d-30 p-0 btn-icon btn-transition-none"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['fas', 'user']}
                      className="font-size-sm"
                    />
                  </span>
                </Button>
              </li>
              <li>
                <Button
                  variant="text"
                  className="rounded-sm d-30 p-0 btn-icon btn-transition-none"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="font-size-sm"
                    />
                  </span>
                </Button>
              </li>
            </ul>
            <ul className="d-flex">
              <li>
                <a
                  className="rounded-sm py-1 px-3 font-size-xs text-uppercase"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  Languages
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown submenu-dropdown--sm">
                  <div className="shadow-sm-dark bg-white rounded-sm">
                    <List
                      component="div"
                      className="nav-pills nav-neutral-primary flex-column p-2">
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-3 d-flex align-items-center">
                        <span className="mr-3">
                          <FlagIcon code="US" size={28} />
                        </span>
                        <span>English</span>
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-3 d-flex align-items-center">
                        <span className="mr-3">
                          <FlagIcon code="ES" size={28} />
                        </span>
                        <span>Spanish</span>
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-3 d-flex align-items-center">
                        <span className="mr-3">
                          <FlagIcon code="DE" size={28} />
                        </span>
                        <span>German</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </li>
              <li className="mr-0">
                <NavLink
                  className="rounded-sm py-1 px-3 font-size-xs text-uppercase"
                  to="/PageLoginIllustration">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="divider mt-2" />
        </Container>
        <Container className="d-flex align-items-center py-4">
          <div className="app-nav-logo flex-grow-0">
            <NavLink
              to="/Homepage"
              title="Reward"
              className="app-nav-logo app-nav-logo--dark">
              <div className="app-nav-logo--icon bg-white">
                <img
                  alt="Reward"
                  src={projectLogo}
                />
              </div>
              <div className="app-nav-logo--text">
                <span>Commerce</span>

                <b>Reward</b>
              </div>
            </NavLink>
          </div>
          <div className="header-nav-menu flex-grow-0 ml-auto d-none d-lg-block">
            <ul className="d-flex justify-content-center">
              <li>
                <NavLink
                  to="/Dashboard"
                  className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Products"
                  className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ProductsFilters"
                  className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                  Filters
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Orders"
                  className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                  Orders
                </NavLink>
              </li>
              <li>
                <a
                  href="#/"
                  onClick={(e) => e.preventDefault()}
                  className="font-weight-bold rounded py-2 text-primary font-size-md px-3">
                  Apps
                  <span className="opacity-5 dropdown-arrow">
                    <FontAwesomeIcon icon={['fas', 'angle-down']} />
                  </span>
                </a>
                <div className="submenu-dropdown submenu-dropdown--md">
                  <div className="shadow-sm-dark w-100 bg-sunrise-purple p-4 rounded">
                    <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                      Individual Apps
                    </div>
                    <List
                      component="div"
                      className="nav-pills nav-transparent nav-pills-rounded flex-column">
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/Reward-react-admin-dashboard-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 text-white-50 d-flex align-items-center">
                        <span>General</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/Reward-react-crypto-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Crypto</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/Reward-react-messenger-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Messenger</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        selected
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Commerce</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Learning</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Monitoring</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Fleet Manager</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Banking</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-nav-actions ml-auto ml-lg-3 ml-lg-4 flex-grow-0">
            <span className="d-none d-lg-flex">
              <Button
                component={NavLink}
                to="/Dashboard"
                className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm btn-primary">
                Dashboard
              </Button>
              <Button
                onClick={toggleLogin}
                className="rounded-sm text-nowrap font-size-xs font-weight-bold text-uppercase shadow-second-sm ml-3 btn-dark">
                Register
              </Button>
            </span>
            <span className="d-block d-lg-none">
              <button
                onClick={toggle}
                className={clsx('navbar-toggler hamburger hamburger--elastic', {
                  'is-active': collapse
                })}>
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </span>
          </div>
          <div className="d-flex d-lg-none">
            <Collapse
              in={collapse}
              className="nav-collapsed-wrapper navbar-collapse">
              <div className="nav-inner-wrapper">
                <Button
                  onClick={toggle}
                  className="btn-danger btn-icon d-40 shadow-sm hover-scale-lg btn-animated-icon-sm nav-toggle-inner-btn p-0">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'times']} />
                  </span>
                </Button>

                <div className="p-3">
                  <div className="px-4 text-uppercase py-2 text-second font-weight-bold font-size-sm">
                    Navigation Menu
                  </div>
                  <List
                    component="div"
                    className="nav-pills nav-neutral-primary nav-pills-rounded flex-column">
                    <ListItem
                      button
                      component={NavLink}
                      to="/Dashboard"
                      className="px-4 d-flex align-items-center">
                      <span>Dashboard</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      component={NavLink}
                      to="/Products"
                      className="px-4 d-flex align-items-center">
                      <span>Products</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      component={NavLink}
                      to="/ProductsFilters"
                      className="px-4 d-flex align-items-center">
                      <span>Filters</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                    <ListItem
                      button
                      component={NavLink}
                      to="/Orders"
                      className="px-4 d-flex align-items-center">
                      <span>Orders</span>
                      <FontAwesomeIcon
                        icon={['fas', 'angle-right']}
                        className="opacity-6 ml-auto"
                      />
                    </ListItem>
                  </List>
                </div>
                <div className="divider" />
                <div className="m-3">
                  <div className="bg-sunrise-purple px-3 py-4 rounded">
                    <div className="px-4 text-uppercase pb-2 text-white font-weight-bold font-size-sm">
                      Individual Apps
                    </div>
                    <List
                      component="div"
                      className="nav-pills nav-transparent nav-pills-rounded flex-column">
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/Reward-react-admin-dashboard-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 text-white-50 d-flex align-items-center">
                        <span>General</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/Reward-react-crypto-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Crypto</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="https://demo.uifort.com/Reward-react-messenger-application-material-ui-pro-demo"
                        target="_blank"
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Messenger</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        selected
                        className="px-4 d-flex text-white-50 align-items-center">
                        <span>Commerce</span>
                        <FontAwesomeIcon
                          icon={['fas', 'angle-right']}
                          className="opacity-6 ml-auto"
                        />
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Learning</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Monitoring</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Fleet Manager</span>
                      </ListItem>
                      <ListItem
                        component="a"
                        button
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="px-4 d-flex text-white-50 align-items-center"
                        disabled>
                        <span>Banking</span>
                      </ListItem>
                    </List>
                  </div>
                </div>
                <div className="divider" />
                <div className="card-footer bg-secondary text-center p-3">
                  <Button
                    component="a"
                    href="https://uifort.com/template/Reward-react-commerce-application-material-ui-pro"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="font-weight-bold text-nowrap font-size-sm btn-success">
                    Buy Now
                  </Button>
                </div>
              </div>
            </Collapse>
          </div>
        </Container>
      </div>
      <div
        className={clsx('collapse-page-trigger', { 'is-active': collapse })}
        onClick={toggle}
      />
      <Dialog
        scroll="body"
        maxWidth="lg"
        open={loginModal}
        onClose={toggleLogin}
        classes={{
          paper: 'rounded border-0 shadow-sm-dark bg-white p-3 p-xl-0'
        }}>
        <Grid container spacing={0}>
          <Grid item xl={5}>
            <div className="hero-wrapper bg-composed-wrapper bg-skim-blue h-100 rounded br-xl-right-0">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded br-xl-right-0 opacity-7"
                  style={{ backgroundImage: 'url(' + people2 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-1 rounded br-xl-right-0" />
                <div className="bg-composed-wrapper--bg bg-slick-carbon opacity-5 rounded br-xl-right-0" />
                <div className="bg-composed-wrapper--content justify-content-center text-center text-xl-left p-5">
                  <div className="text-white text-center">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Register
                    </h1>
                    <p className="font-size-lg mb-0 px-4 text-white-50">
                      All components from the General dashboard template can be
                      used in the individual applications pages, without
                      modifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xl={7}>
            <Grid item lg={8} xl={10} className="mx-auto">
              <div className="bg-white p-4 rounded">
                <div className="text-center my-4">
                  <h1 className="display-4 mb-1 font-weight-bold">
                    Create your account
                  </h1>
                  <p className="font-size-lg mb-0 text-black-50">
                    Start benefiting from our tools right away
                  </p>
                </div>
                <div className="mb-3">
                  <label className="font-weight-bold mb-2">Email address</label>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Enter your email address"
                    type="email"
                  />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between">
                    <label className="font-weight-bold mb-2">Password</label>
                  </div>
                  <TextField
                    variant="outlined"
                    size="small"
                    fullWidth
                    placeholder="Enter your password"
                    type="password"
                  />
                </div>
                <Grid container spacing={6}>
                  <Grid item md={6}>
                    <div className="mb-3">
                      <label className="font-weight-bold mb-2">
                        First name
                      </label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your first name"
                      />
                    </div>
                  </Grid>
                  <Grid item md={6}>
                    <div className="mb-3">
                      <label className="font-weight-bold mb-2">Last name</label>
                      <TextField
                        variant="outlined"
                        size="small"
                        fullWidth
                        placeholder="Enter your last name"
                      />
                    </div>
                  </Grid>
                </Grid>
                <div className="mb-4">
                  By clicking the <strong>Create account</strong> button below
                  you agree to our terms of service and privacy statement.
                </div>
                <div className="text-center mb-4">
                  <Button className="btn-primary text-uppercase font-weight-bold font-size-sm my-3">
                    Create account
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
}
