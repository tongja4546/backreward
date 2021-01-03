import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Table,
  Grid,
  InputLabel,
  Card,
  Menu,
  MenuItem,
  Button,
  List,
  ListItem,
  FormControl,
  Select
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';
import moment from 'moment';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';

import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';
import TrendingDownTwoToneIcon from '@material-ui/icons/TrendingDownTwoTone';
import axios from 'axios';


export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [status, setStatus] = useState('');
  const handleStatus = (event) => {
    setStatus(event.target.value);
  };


  function statusandstock(status) {
    if (status == 1) return <div className="px-4 py-1 h-auto text-warning text-capitalize font-size-sm border-0 badge badge-neutral-warning">
      Pending
  </div>;
    else if (status == 2) return <div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'>Apporve </div>
    else if (status == 3) return <div className='px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger'> Cancel </div>;
  }

  const handleChange = (event, value) => {
    setPage(value);
    getreward(value);
  };
  useEffect(() => {
    getreward(1);
  }, []);
  const [rewardlists, Setreward] = useState(null);
  const [pagingcount, Setrepaging] = useState(0);
  const [page, setPage] = React.useState(1);

  const getreward = (value) => {

    axios
      .get("https://dafarewards.com:7002/api/v1/redeemlist", {
        params: {
          Cat_ID: 0,
          page: value,
          type: 1
        }
      })
      .then((res) => {
        console.log(res)
        Setreward(res.data.message.orderlist)
        Setrepaging(res.data.message.pagecount)
      });
  };

  const [type, setType] = useState('');
  const handleType = (event) => {
    setType(event.target.value);
  };

  return (
    <>
      <Card className="card-box">
        <div className="p-4">
          <Grid container spacing={6}>
            <Grid item md={4}>
              <FormControl variant="outlined" size="small" className="w-100">
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select-label-id"
                  fullWidth
                  label="Status"
                  value={status}
                  onChange={handleStatus}>
                  <MenuItem value={0}>All statuses</MenuItem>
                  <MenuItem value={1}>Pending</MenuItem>
                  <MenuItem value={2}>Completed</MenuItem>
                  <MenuItem value={3}>Cancelled</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className="divider" />
        <div className="p-3">
          <Grid container spacing={6}>
            <Grid item md={4}>
              <List className="nav-neutral-danger flex-column p-0">
                <ListItem
                  button
                  className="d-flex rounded-sm justify-content-center"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="font-weight-bold">Last Week</span>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={4}>
              <List className="nav-neutral-warning flex-column p-0">
                <ListItem
                  button
                  className="d-flex rounded-sm justify-content-center"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="font-weight-bold">Yesterday</span>
                </ListItem>
              </List>
            </Grid>
            <Grid item md={4}>
              <List className="nav-neutral-success flex-column p-0">
                <ListItem
                  button
                  selected
                  className="d-flex rounded-sm justify-content-center"
                  href="#/"
                  onClick={(e) => e.preventDefault()}>
                  <span className="font-weight-bold">Today</span>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
        <div className="divider" />

        <div className="pt-4 px-4">
          <Table className="table table-alternate-spaced mb-0">
            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
              <tr>
                <th className="text-left px-4">Order details</th>
                <th className="text-left">Player ID</th>
                <th className="text-left">Order ID</th>
                <th className="text-right">Status</th>
                <th className="text-right">Amount</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {(rewardlists == null) ? <tr><td></td></tr> : rewardlists.map(listitem => (
                <React.Fragment>
                  <tr>
                    <td className="px-4">
                      <div className="d-flex align-items-center">
                        <img
                          alt="..."
                          className="hover-scale-lg rounded-sm"
                          src={listitem.image}
                          style={{ width: 90 }}
                        />
                        <div>
                          <div className="font-size-sm font-weight-bold">
                            {listitem.name}
                          </div>
                          <div className="font-size-sm opacity-7">
                            {moment(listitem.datecreate).format('YYYY-MM-DD hh:mm:ss')}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-left">
                      <div>
                        <div className="font-size-sm font-weight-bold">
                          Player ID
                    </div>
                        <div className="font-size-sm opacity-7">  {listitem.playerid}</div>
                      </div>
                    </td>
                    <td className="text-left">
                      <div>
                        <div className="font-size-sm font-weight-bold">
                          {listitem.orderid}
                        </div>
                        <div className="font-size-sm opacity-7 text-success d-flex align-items-center">
                          <div className="badge badge-success mr-1 border-0 badge-circle">
                            Redeem
                      </div>
                      Redeem
                    </div>
                      </div>
                    </td>
                    <td className="text-right">
                      {statusandstock(listitem.rewardstats)}
                    </td>
                    <td className="text-right">
                      <div className="font-size-sm font-weight-bold">
                        {listitem.amount}
                      </div>
                      <div className="font-size-sm opacity-7">{listitem.qty}</div>
                    </td>
                    <td className="text-center">
                      <Button className="btn-neutral-primary mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-neutral-danger mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
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
              {/* <tr className="divider"></tr> */}

            </tbody>
          </Table>
        </div>
        <div className="mt-3" />
        <div className="card-footer bg-secondary p-4 d-flex justify-content-center">
          <Pagination
            onChange={handleChange}
            page={page}
            className="pagination-primary"
            count={pagingcount}
            variant="outlined"
            shape="rounded"
          />
        </div>
      </Card>
    </>
  );
}
