import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  Menu,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  Select
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import product1 from '../../../assets/images/stock-products/product-1.png';
import product2 from '../../../assets/images/stock-products/product-2.png';
import product3 from '../../../assets/images/stock-products/product-3.png';
import product4 from '../../../assets/images/stock-products/product-4.png';

import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';

export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const [status, setStatus] = useState('0');

  const handleStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <>
      <Card className="card-box shadow-none">
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
        <div className="divider" />
        <div className="p-4">
          <div className="table-responsive-md">
            <Table className="table table-alternate-spaced mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{ width: '50px' }}
                    className="pb-4 text-center">
                    <FormControlLabel
                      control={<Checkbox name="checked" />}
                      id="CustomCheckbox123"
                      className="ml-3"
                    />
                  </th>
                  <th
                    style={{ width: '110px' }}
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark text-center"
                    scope="col">
                    Order
                  </th>
                  <th
                    style={{ width: '300px' }}
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Client
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Product
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Status
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center text-black-50">
                    <FormControlLabel
                      control={<Checkbox name="checked" />}
                      id="CustomCheckbox1"
                      className="ml-3"
                    />
                  </td>
                  <td className="text-center">
                    <span className="font-weight-bold">#954</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-initials mr-3">
                        <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                          SW
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          Customer since 2019
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#/" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="hover-scale-lg rounded-sm"
                          src={product1}
                          style={{ width: 90 }}
                        />
                      </a>
                      <div className="pl-3">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Apple TV Gen. 4
                        </a>
                        <span className="text-black-50 d-block">
                          In stock: <b>23</b>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success">
                      Completed
                    </div>
                  </td>
                  <td className="font-size-lg font-weight-bold">
                    <small>$</small>
                    <span>2,495</span>
                  </td>
                  <td className="text-right">
                    <Button className="btn-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'search']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['far', 'edit']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-sm"
                      />
                    </Button>
                  </td>
                </tr>
                <tr className="divider"></tr>
                <tr>
                  <td className="text-center text-black-50">
                    <FormControlLabel
                      control={<Checkbox name="checked" />}
                      id="CustomCheckbox2"
                      className="ml-3"
                    />
                  </td>
                  <td className="text-center">
                    <span className="font-weight-bold">#955</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-initials mr-3">
                        <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                          BC
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Brax Childs
                        </a>
                        <span className="text-black-50 d-block">
                          Customer since 2019
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#/" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="hover-scale-lg rounded-sm"
                          src={product2}
                          style={{ width: 90 }}
                        />
                      </a>
                      <div className="pl-3">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          iPhone 11 PRO Max
                        </a>
                        <span className="text-black-50 d-block">
                          In stock: <b>5</b>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success">
                      Completed
                    </div>
                  </td>
                  <td className="font-size-lg font-weight-bold">
                    <small>$</small>
                    <span>$999</span>
                  </td>
                  <td className="text-right">
                    <Button className="btn-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'search']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['far', 'edit']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-sm"
                      />
                    </Button>
                  </td>
                </tr>
                <tr className="divider"></tr>
                <tr>
                  <td className="text-center text-black-50">
                    <FormControlLabel
                      control={<Checkbox name="checked" />}
                      id="CustomCheckbox3"
                      className="ml-3"
                    />
                  </td>
                  <td className="text-center">
                    <span className="font-weight-bold">#956</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-initials mr-3">
                        <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                          AW
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Amin Waller
                        </a>
                        <span className="text-black-50 d-block">
                          Customer since 2018
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#/" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="hover-scale-lg rounded-sm"
                          src={product3}
                          style={{ width: 90 }}
                        />
                      </a>
                      <div className="pl-3">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Apple Macbook PRO 3
                        </a>
                        <span className="text-black-50 d-block">
                          In stock: <b>23</b>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger">
                      Failed
                    </div>
                  </td>
                  <td className="font-size-lg font-weight-bold">
                    <small>$</small>
                    <span>1999</span>
                  </td>
                  <td className="text-right">
                    <Button className="btn-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'search']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['far', 'edit']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-sm"
                      />
                    </Button>
                  </td>
                </tr>
                <tr className="divider"></tr>
                <tr>
                  <td className="text-center text-black-50">
                    <FormControlLabel
                      control={<Checkbox name="checked" />}
                      id="CustomCheckbox4"
                      className="ml-3"
                    />
                  </td>
                  <td className="text-center">
                    <span className="font-weight-bold">#957</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper avatar-initials mr-3">
                        <div className="avatar-icon text-white bg-neutral-dark text-dark font-size-sm d-50 font-weight-bold">
                          GP
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Gerald Parker
                        </a>
                        <span className="text-black-50 d-block">
                          Customer since Feb 2020
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <a href="#/" onClick={(e) => e.preventDefault()}>
                        <img
                          alt="..."
                          className="hover-scale-lg rounded-sm"
                          src={product4}
                          style={{ width: 90 }}
                        />
                      </a>
                      <div className="pl-3">
                        <a
                          href="#/"
                          onClick={(e) => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Professional Headphones
                        </a>
                        <span className="text-black-50 d-block">
                          In stock: <b>126</b>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success">
                      Completed
                    </div>
                  </td>
                  <td className="font-size-lg font-weight-bold">
                    <small>$</small>
                    <span>89</span>
                  </td>
                  <td className="text-right">
                    <Button className="btn-primary mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'search']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['far', 'edit']}
                        className="font-size-sm"
                      />
                    </Button>
                    <Button className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                      <FontAwesomeIcon
                        icon={['fas', 'times']}
                        className="font-size-sm"
                      />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center pt-3 mb-5">
          <Pagination
            className="pagination-primary"
            count={8}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Card>
    </>
  );
}
