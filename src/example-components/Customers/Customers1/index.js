import React, { useState, useEffect } from 'react';

import clsx from 'clsx';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  Menu,
  Container,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  Select, Dialog, Tooltip
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

import { useDropzone } from 'react-dropzone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';
export default function LivePreviewExample() {

  useEffect(() => {
    getcustomer(1);
  }, []);
  const [pagingcount, Setrepaging] = useState(0);
  const [page, setPage] = React.useState(1);
  const [cuslist, setlist] = useState(null);
  const getcustomer = (event) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/userlist", {
        params: {
          Cat_ID: 0,
          page: event,
          type: 1
        }
      })
      .then((res) => {
        setlist(res.data.message.cuslist)
        Setrepaging(res.data.message.pagecount)
      });
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event, value) => {
    setPage(value);
    getcustomer(value);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const [status, setStatus] = useState('0');
  return (
    <>
      <Card className="overflow-hidden">
      <div className="d-flex justify-content-between px-4 py-3">
          <div
            className={clsx(
              'search-wrapper search-wrapper--alternate search-wrapper--grow',
              { 'is-active': searchOpen }
            )}>
            <TextField
              variant="outlined"
              size="small"
              id="input-with-icon-textfield22-2"
              placeholder="Search orders..."
              onFocus={openSearch}
              onBlur={closeSearch}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                )
              }}
            />
          </div>
          <div className="d-flex align-items-center">
            <div>
              <Button
                onClick={handleClick}
                className="btn-outline-primary d-flex align-items-center justify-content-center d-40 mr-2 p-0 rounded-pill">
                <FilterListTwoToneIcon className="w-50" />
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
                <div className="dropdown-menu-xxl overflow-hidden p-0">
                  <div className="p-3">
                    <Grid container spacing={6}>
                      <Grid item md={12}>
                        <small className="font-weight-bold pb-2 text-uppercase text-primary d-block">
                          Status
                        </small>
                        <FormControl variant="outlined" fullWidth size="small">
                          <Select
                            fullWidth
                            value={status}
                            onChange={handleStatus}
                            labelWidth={0}>
                            <MenuItem value={0}>All statuses</MenuItem>
                            <MenuItem value={1}>Pending</MenuItem>
                            <MenuItem value={2}>Completed</MenuItem>
                            <MenuItem value={3}>Rejected</MenuItem>
                            <MenuItem value={4}>Processing</MenuItem>
                            <MenuItem value={5}>Cancelled</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="divider" />
                  <div className="p-3 text-center bg-secondary">
                    <Button className="btn-primary" size="small">
                      Filter results
                    </Button>
                  </div>
                  <div className="divider" />
                  <div className="p-3">
                    <Grid container spacing={6}>
                      <Grid item md={6}>
                        <List className="nav-neutral-danger flex-column p-0">
                          <ListItem
                            button
                            className="d-flex rounded-sm justify-content-center"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            <div className="mr-2">
                              <DeleteTwoToneIcon />
                            </div>
                            <span>Cancel</span>
                          </ListItem>
                        </List>
                      </Grid>
                      <Grid item md={6}>
                        <List className="nav-neutral-success flex-column p-0">
                          <ListItem
                            button
                            className="d-flex rounded-sm justify-content-center"
                            href="#/"
                            onClick={(e) => e.preventDefault()}>
                            <div className="mr-2">
                              <SaveTwoToneIcon />
                            </div>
                            <span>Save filter</span>
                          </ListItem>
                        </List>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Menu>
            </div>
            <div>
              <Button
                onClick={handleClick2}
                className="btn-outline-primary d-flex align-items-center justify-content-center d-40 p-0 rounded-pill">
                <SettingsTwoToneIcon className="w-50" />
              </Button>
              <Menu
                anchorEl={anchorEl2}
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
                open={Boolean(anchorEl2)}
                classes={{ list: 'p-0' }}
                onClose={handleClose2}>
                <div className="dropdown-menu-lg overflow-hidden p-0">
                  <div className="font-weight-bold px-4 pt-3">Results</div>
                  <List className="nav-neutral-first nav-pills-rounded flex-column p-2">
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon mr-2">
                        <RadioButtonUncheckedTwoToneIcon />
                      </div>
                      <span className="font-size-md">
                        <b>10</b> results per page
                      </span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon mr-2">
                        <RadioButtonUncheckedTwoToneIcon />
                      </div>
                      <span className="font-size-md">
                        <b>20</b> results per page
                      </span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="nav-link-icon mr-2">
                        <RadioButtonUncheckedTwoToneIcon />
                      </div>
                      <span className="font-size-md">
                        <b>30</b> results per page
                      </span>
                    </ListItem>
                  </List>
                  <div className="divider" />
                  <div className="font-weight-bold px-4 pt-4">Order</div>
                  <List className="nav-neutral-first nav-pills-rounded flex-column p-2">
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <ArrowUpwardTwoToneIcon />
                      </div>
                      <span className="font-size-md">Ascending</span>
                    </ListItem>
                    <ListItem
                      button
                      href="#/"
                      onClick={(e) => e.preventDefault()}>
                      <div className="mr-2">
                        <ArrowDownwardTwoToneIcon />
                      </div>
                      <span className="font-size-md">Descending</span>
                    </ListItem>
                  </List>
                </div>
              </Menu>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="table-responsive-md">
            <Table className="table table-alternate-spaced mb-0">
              <thead>
                <tr>
                  <th
                    style={{ width: '300px' }}
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Name
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Username
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Last Active
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Point
                    </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col"></th>
                </tr>
              </thead>
              <tbody>

                {(cuslist == null) ? <tr><td></td></tr> : cuslist.map(listitem => (
                  <React.Fragment>
                    <tr key={listitem.member_id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="avatar-icon-wrapper avatar-initials mr-3">
                            <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                              {listitem.firstname.slice(0, 2)}
                            </div>
                          </div>
                          <div>
                            <a
                              href="#/"
                              onClick={(e) => e.preventDefault()}
                              className="font-weight-bold text-black"
                              title="...">
                              {listitem.firstname + ' ' + listitem.lastname}
                            </a>
                            <span className="text-black-50 d-block">
                              Customer since  {moment(listitem.DateCreate).format('YYYY-MM-DD')}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>{listitem.playerid} </span>
                      </td>
                      <td>
                        <span>  {moment(listitem.DateCreate).format('YYYY-MM-DD')}</span>
                      </td>
                      <td className="font-size-lg font-weight-bold">

                        <span>  {listitem.Point}</span>
                        <small>P</small>
                      </td>
                      <td className="text-right">
                        <Button className="btn-neutral-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'search']}
                            className="font-size-sm"
                          />
                        </Button>
                        <Button className="btn-neutral-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </Button>
                      </td>
                    </tr>
                    <tr className="divider"></tr>
                  </React.Fragment>
                ))}


              </tbody>
            </Table>
          </div>
          <div className="d-flex align-items-center justify-content-center pt-5 mb-4">
            <Pagination
              onChange={handleChange}
              page={page}
              className="pagination-primary"
              count={pagingcount}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </Card>

    </>
  );
}
