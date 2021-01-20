import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, Button, List, ListItem } from '@material-ui/core';

import avatar4 from '../../assets/images/avatars/avatar4.jpg';
import CountUp from 'react-countup';

import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import BusinessCenterTwoToneIcon from '@material-ui/icons/BusinessCenterTwoTone';
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import axios from 'axios';
const HeaderUserbox = () => {
  const history = useHistory();
  useEffect(() => {
    try {
      var token = localStorage.getItem('token')
      var decoded = jwt_decode(token);
      if (token !== null) {
        axios
          .post("https://dafarewards.com:7002/api/v1/checklogin", { 'userid':decoded.message.userid}, {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then((res) => {
            setFirstname(decoded.message.firstname)
            setLastname(decoded.message.lastname)
            setPoint(decoded.message.Point)
            setMemberId(decoded.message.memberId)
            setUserId(decoded.message.userid)
            setState(decoded.message.state)


          }).catch((err) => {
            localStorage.clear()
            // window.location.reload(true)
          })

      }
      else {
        history.push("/Login");
      }
    } catch (ex) {
      console.log(ex);
    }
  })
  const [anchorEl, setAnchorEl] = useState(null);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [point, setPoint] = useState(0);
  const [memberId, setMemberId] = useState('');
  const [userId, setUserId] = useState('');
  const [state, setState] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token')
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
            <div className="avatar-icon-wrapper avatar-initials mr-3">
              <div className="avatar-icon text-white bg-neutral-primary text-primary font-size-sm d-50 font-weight-bold">
                {firstname.slice(0, 2)}
              </div>
            </div>
          </div>
          <div className="d-none d-xl-block pl-2">
            <span className="text-danger">
              <small>Admin Dafabet</small>
            </span>
            <div className="font-weight-bold">{firstname + ' ' + lastname}</div>
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
                  {firstname + ' ' + lastname}
                </h6>
                <p className="text-black-50 mb-0">Admin</p>
              </div>
            </div>
            <div className="divider" />
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
                href="/Login"
                onClick={handleLogout}>
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
