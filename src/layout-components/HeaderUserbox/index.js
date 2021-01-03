import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Button, List, ListItem } from '@material-ui/core';

import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import CountUp from 'react-countup';

import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';

const HeaderUserbox = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="user-box position-relative mr-2">
        <Button
          onClick={handleClick}
          className="btn-link p-0 text-left d-flex align-items-center">
          <div className="d-block p-0 avatar-icon-wrapper">
            <div className="badge badge-success badge-circle p-top-a">
              Online
            </div>
            <div className="avatar-icon rounded-sm">
              <img src={avatar4} alt="..." />
            </div>
          </div>
          <div className="d-none d-xl-block pl-2">
            <span className="text-danger">
              <small>Shop Owner</small>
            </span>
            <div className="font-weight-bold">Brian Bowden</div>
          </div>
          <span className="pl-1 pl-xl-3">
            <FontAwesomeIcon
              icon={['fas', 'angle-down']}
              className="opacity-5"
            />
          </span>
        </Button>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorEl)}
          classes={{ list: 'p-0' }}
          onClose={handleClose}>
          <div className="dropdown-menu-lg overflow-hidden p-0">
            <div className="d-flex p-4">
              <div className="avatar-icon rounded mr-3">
                <img src={avatar4} alt="..." />
              </div>
              <div>
                <h6 className="font-weight-bold mb-1 text-black">
                  Brian Bowden
                </h6>
                <p className="text-black-50 mb-0">brian@bowden.com</p>
              </div>
            </div>
            <div className="divider" />
            <div className="divider" />
            <div className="bg-secondary d-flex align-items-center flex-column p-4">
              <div className="display-3 mb-0 text-center font-weight-bold">
                <small className="opacity-6">$</small>
                <span className="pl-1">
                  <CountUp
                    start={0}
                    end={458.695}
                    duration={6}
                    separator=""
                    delay={1}
                    decimals={3}
                    decimal=","
                    prefix=""
                    suffix=""
                  />
                  <small>
                    <sup>.65</sup>
                  </small>
                </span>
              </div>
              <small className="text-center font-weight-bold opacity-6 text-uppercase">
                Total balance
              </small>
            </div>
            <div className="divider" />
            <List
              component="div"
              className="nav-neutral-first nav-pills-rounded flex-column p-3">
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="mr-2">
                  <SettingsTwoToneIcon />
                </div>
                <span className="font-size-md">Settings</span>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="mr-2">
                  <VerifiedUserTwoToneIcon />
                </div>
                <span className="font-size-md">Profile</span>
              </ListItem>
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="mr-2">
                  <BusinessCenterTwoToneIcon />
                </div>
                <span className="font-size-md">Wallets</span>
              </ListItem>
            </List>
            <div className="divider" />
            <List
              component="div"
              className="nav-neutral-danger nav-pills-rounded flex-column p-3">
              <ListItem
                component="a"
                button
                href="#/"
                onClick={(e) => e.preventDefault()}>
                <div className="mr-2">
                  <ExitToAppTwoToneIcon />
                </div>
                <span>Log out</span>
              </ListItem>
            </List>
          </div>
        </Menu>
      </div>
    </>
  );
};

export default HeaderUserbox;
