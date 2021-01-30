import React, { useState } from 'react';

import clsx from 'clsx';

import { Collapse } from '@material-ui/core';

import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChevronRightTwoToneIcon from '@material-ui/icons/ChevronRightTwoTone';
import EmojiEventsTwoToneIcon from '@material-ui/icons/EmojiEventsTwoTone';
import AttachMoneyTwoToneIcon from '@material-ui/icons/AttachMoneyTwoTone';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import ViewColumnTwoToneIcon from '@material-ui/icons/ViewColumnTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

import { SidebarWidget } from '../../layout-components';

const SidebarMenu = (props) => {
  const { setSidebarToggleMobile } = props;

  const toggleSidebarMobile = () => setSidebarToggleMobile(false);

  const [pagesOpen, setPagesOpen] = useState(false);
  const togglePages = (event) => {
    setPagesOpen(!pagesOpen);
    event.preventDefault();
  };

  return (
    <>
      <PerfectScrollbar>
        <div className="sidebar-navigation">
          <SidebarWidget />
          <div className="sidebar-header">
            <span>Navigation</span>
          </div>
          <ul>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Dashboard">
                <span className="sidebar-icon">
                  <AccountBalanceTwoToneIcon />
                </span>
                Dashboard
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Reward">
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                Reward
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Category">
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                Category
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Orders">
                <span className="sidebar-icon">
                  <AttachMoneyTwoToneIcon />
                </span>
                Orders
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Products">
                <span className="sidebar-icon">
                  <BusinessCenterTwoToneIcon />
                </span>
                Products
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Customers">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Customers
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Setting">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Setting
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Promotion">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Promotion
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <a
                href="#/"
                onClick={togglePages}
                className={clsx({ active: pagesOpen })}>
                <span className="sidebar-icon">
                  <ViewColumnTwoToneIcon />
                </span>
                <span className="sidebar-item-label">All Log</span>
                <span className="sidebar-icon-indicator">
                  <ChevronRightTwoToneIcon />
                </span>
              </a>
              <Collapse in={pagesOpen}>
                <ul>
                <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Gamelog">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Game log
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Userlog">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                User log
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
       
            
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Pointlog">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Point log
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Depositlog">
                <span className="sidebar-icon">
                  <PeopleAltTwoToneIcon />
                </span>
                Deposit log
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
           
                </ul>
              </Collapse>
            </li>
      
           
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Transactions">
                <span className="sidebar-icon">
                  <FilterListTwoToneIcon />
                </span>
                Redeem list
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Settings">
                <span className="sidebar-icon">
                  <SettingsTwoToneIcon />
                </span>
                Settings
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li> */}
            <li>
              <NavLink
                onClick={toggleSidebarMobile}
                activeClassName="active"
                className="nav-link-simple"
                to="/Infomation">
                <span className="sidebar-icon">
                  <SettingsTwoToneIcon />
                </span>
                Infomation
                <span className="sidebar-icon-indicator sidebar-icon-indicator-right">
                  <ChevronRightTwoToneIcon />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </PerfectScrollbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = (dispatch) => ({
  setSidebarToggleMobile: (enable) => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarMenu);
