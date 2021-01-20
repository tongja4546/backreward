import React, { useState, useEffect } from 'react';

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
  Container,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  Select, Dialog, Tooltip
} from '@material-ui/core';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
// import Pagination from "react-js-pagination";
import product1 from '../../../assets/images/stock-products/product-1.png';
import product2 from '../../../assets/images/stock-products/product-2.png';
import product3 from '../../../assets/images/stock-products/product-3.png';
import product4 from '../../../assets/images/stock-products/product-4.png';


import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import moment from 'moment';
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
import NumberFormat from 'react-number-format';
export default function LivePreviewExample() {


  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const statusandstock = async (status, stock) => {
  //   //return "<div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'> Completed </div>"
  //  };

  function statusandstock(status, stock) {
    if (status == 0) return <div className='px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger'> Disable </div>;
    else if (stock == 0) return <div className='px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger'> Out of stock </div>
    else return <div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'> Normal </div>;
  }


  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = useState(null);

  const [modal, setModal] = useState(false);
  const [selectlist, setselectlist] = useState(null);
  const [qtysec, setqtysec] = useState(null);
  const [pointsec, setqtypoint] = useState(null);
  const [namesec, setname] = useState(null);
  const [productnamesec, setqtyproductname] = useState(null);
  const [descriptionsec, setqtydescription] = useState(null);
  const [pricesec, setqtyPrice] = useState(null);

  const toggleModal = (evals) => {
    setModal(!modal);
    setselectlist(evals);
    setqtysec(evals.qty);
    setqtypoint(evals.point);
    setqtyproductname(evals.productname);
    setqtydescription(evals.description);
    setqtyPrice(evals.cash);
    setname(evals.name);
  };

  const onchangesproductname = (event) => {
    setqtyproductname(event.target.value);
  };

  const onchangesname = (event) => {
    setname(event.target.value);
  };

  const onchangesdesc = (event) => {
    setqtydescription(event.target.value);
  };

  const onchangespoint = (event) => {
    setqtypoint(event.target.value);
  };


  const onchangesprice = (event) => {
    setqtyPrice(event.target.value);
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const [status, setStatus] = useState('0');
  const [categorylist, SetCat] = useState(null);
  const [txnlists, Settxn] = useState(null);
  const [pagingcount, Setrepaging] = useState(0);
  const [page, setPage] = React.useState(1);
  const [searchtxt, setSearchtxt] = useState('');
  const handleChange = (event, value) => {
    setPage(value);
    if (searchOpen) {
      gettxnlog(value);
    }
    else {
      console.log(searchtxt);
      gettxnloguser(value, searchtxt);
    }
  };

  const SearchononChange = (event) => {
    gettxnloguser(1, event.target.value);
    setSearchtxt(event.target.value)
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

  useEffect(() => {
    gettxnlog(1);
    // getbalance(0);
  }, []);


  const gettxnlog = async (value) => {
    let payload = {
      page: value,
    };
    let headerss = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
    };
    await axios.post('https://dafarewards.com:7002/api/v1/findhistorypay', payload, { headers: headerss }).then((res) => {
      console.log(res.data.message.products);
      Settxn(res.data.message.products)
      Setrepaging(res.data.message.pagecount)
    }).catch((error) => {
      console.log(error)
    });
  };


  const gettxnloguser = async (value, text) => {
    let payload = {
      page: value,
      memberid: text
    };
    let headerss = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
    };
    await axios.post('https://dafarewards.com:7002/api/v1/findhistorypay', payload, { headers: headerss }).then((res) => {
      console.log(res.data.message.products);
      Settxn(res.data.message.products)
      Setrepaging(res.data.message.pagecount)
    }).catch((error) => {
      console.log(error)
    });
  };



  const [Balance, Setbalance] = useState(0);
  // const getbalance = (value) => {
  //   axios
  //     .get("https://dafarewards.com:7002/api/v1/getbalance", {
  //       params: {
  //         system: 'xopay',
  //       }
  //     })
  //     .then((res) => {
  //       Setbalance(res.data.message.balance)
  //     });
  // };

  return (
    <>
      <Card className="card-box shadow-none"  >
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
              placeholder="Search Users..."
              onChange={SearchononChange}
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
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark text-center"
                    scope="col">
                    Date/Time
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark text-center"
                    scope="col">
                    TXN NO
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    PM
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Username
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Amount
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Point
                  </th>
                  {/* <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Fee 0.25%
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Fee 0.20%
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Fee 0.05%
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {(txnlists == null) ? <tr><td></td></tr> : txnlists.map(listitem => (
                  <tr key={listitem.TxnID}>
                    <td>
                      <span className="font-weight-bold"> {moment(listitem.Dateadd).format('YYYY-MM-DD HH:mm:ss')}</span>
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">#{listitem.TxnID}</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span>{listitem.systemname}</span> </td>
                    <td className="font-size-lg font-weight-bold">
                      <a href={"/Userlog?" + listitem.DF_ID}><span>{listitem.DF_ID}</span></a>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span><NumberFormat value={Number.parseFloat(listitem.Cash).toFixed(2)} displayType={'text'} prefix={'฿'} thousandSeparator={true} /></span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span> {Math.floor((parseInt(listitem.Cash) / 500))}</span>
                      <small>P</small>
                    </td>
                    {/* <td className="font-size-lg font-weight-bold">
                      <span> {<NumberFormat value={Number.parseFloat(listitem.Cash * 0.0025).toFixed(2)} displayType={'text'} prefix={'฿'} thousandSeparator={true} />} </span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span> {<NumberFormat value={Number.parseFloat(listitem.Cash * 0.0020).toFixed(2)} displayType={'text'} prefix={'฿'} thousandSeparator={true} />}</span>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span>  {<NumberFormat value={Number.parseFloat(listitem.Cash * 0.0005).toFixed(2)} displayType={'text'} prefix={'฿'} thousandSeparator={true} />} </span>
                    </td> */}
                  </tr>
                ))}
                <React.Fragment>
                  <tr className="divider"></tr>
                </React.Fragment>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center pt-3 mb-5">
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
