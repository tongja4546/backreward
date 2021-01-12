import React, { useState, useEffect } from 'react';

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
  InputLabel,
  Select, Dialog, Tooltip
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
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
import axios from 'axios';
import Provinces from "../../../data/provinces.json";
import Zipcodes from "../../../data/zipcodes.json";
import Amphures from "../../../data/amphures.json";
import Districts from "../../../data/districts.json";
import NumberFormat from 'react-number-format';
export default function LivePreviewExample() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleStatus = async (event) => {
    await setStatus(event.target.value);
    axios
      .get("https://dafarewards.com:7002/api/v1/finduserhistorypay", {
        params: {
          memberid: null,
          page: page,
        }
      })
      .then((res) => {
        console.log(res)
        gamelists(res.data.message.orderlist)
        Setrepaging(res.data.message.pagecount)
      });
  };


  function statusandstock(status) {
    if (status == 1) return <div className="px-4 py-1 h-auto text-warning text-capitalize font-size-sm border-0 badge badge-neutral-warning"> Pending</div>;
    else if (status == 2) return <div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'>Apporve </div>
    else if (status == 3) return <div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'>Process </div>
    else if (status == 4) return <div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'>Deliver </div>
    else if (status == 0) return <div className='px-4 py-1 h-auto text-danger border-1 border-danger badge badge-neutral-danger'> Cancel </div>;
  }

  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggleModal2 = (evals) => {
    setModal2(!modal2);
    setstatussel(evals.status)
    settxnredeem(evals.txnredeem)
    setTracking(evals.trackingid)
  };
  const handleChange = (event, value) => {
    setPage(value);
    getgamelog(value);
  };


  useEffect(() => {
    getgamelog(1);
  }, []);

  const [pagingcount, Setrepaging] = useState(0);
  const [page, setPage] = React.useState(1);
  const [txnredeem, settxnredeem] = useState("");

  const [Provinceslist, setProvinceslist] = useState(Provinces);
  const [country, setcountry] = useState("");
  const [Amphureslist, setAmphureslist] = useState(Amphures);
  const [amphure, setamphure] = useState("");
  const [Districtslist, setDistrictslist] = useState(Districts);
  const [district, setdistrict] = useState("");
  const [Zipcodeslist, setZipcodeslist] = useState(Zipcodes);
  const [zipcode, setzipcode] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [homeno, sethomeno] = useState("");
  const [alley, setalley] = useState("");
  const [roadname, setroadname] = useState("");
  const [getstatuslist, setgetstatuslist] = useState([]);
  const [status, setStatus] = useState(-1);
  const [statussel, setstatussel] = useState('');
  const [Tracking, setTracking] = useState('');

  const onChangetracking = (e) => {
    setTracking(e.target.value)
  }
  const toggleModal = (evals) => {
    setfirstname(evals.firstname);
    setlastname(evals.lastname);
    sethomeno(evals.homeno);
    setroadname(evals.roadname);
    setcountry(evals.city);
    setamphure(evals.district);
    setdistrict(evals.subdistrict);
    setzipcode(evals.province);
    setalley(evals.alley);
    setModal(!modal);
  };
  const [gamelists, Setgamelist] = useState(null);
  const getgamelog = (value) => {
    var user = window.location.search.replace("?", "")
    axios.post("https://dafarewards.com:7002/api/v1/findplayeridhistorypay", {
      memberid: user,
      page: value
    })
      .then((res) => {
        console.log(res.data.message)
        Setgamelist(res.data.message.products)
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
                  <MenuItem value={-1}>All statuses</MenuItem>
                  {getstatuslist.map(key => (
                    <MenuItem key={key.no} className="mx-2" value={key.no}>
                      {key.status}
                    </MenuItem>)
                  )}
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
                <th className="text-left">Date/Time</th>
                <th className="text-left px-4">TxnID</th>
                <th className="text-left px-4">REFID</th>
                <th className="text-left">Detail </th>
                <th className="text-left px-4">Debit</th>
                <th className="text-left px-4">Credit</th>
                <th className="text-left px-4">Balnce</th>
              </tr>
            </thead>
            <tbody>
              {(gamelists == null) ? <tr><td></td></tr> : gamelists.map(listitem => (
                <React.Fragment key={listitem.orderid}>
                  <tr key={listitem.orderid}>
                    <td className="text-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {moment(listitem.DateUpdate).format('YYYY-MM-DD HH:mm:ss')}
                          </span>
                        </div>
                      </div>

                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            #{listitem.TxnID}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            #{listitem.TxnID}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-weight-bold">{listitem.typename} {(listitem.typeid == 1) ? <NumberFormat value={listitem.bath} displayType={'text'} thousandSeparator={true} /> : ""}</span>
                    </td>
                    <td>
                      <span className={(listitem.state === 1) ? "text-black-50-his d-block-his green" : "text-black-50-his d-block-his red"} >
                        {(listitem.state === 1) ? "" : + listitem.point + "  คะแนน"}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className={(listitem.state === 1) ? "text-black-50-his d-block-his green" : "text-black-50-his d-block-his red"} >
                            {(listitem.state === 2) ? "" : + listitem.point + "  คะแนน"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className={"text-black-50-his d-block-his"} >
                            <NumberFormat value={listitem.balance} displayType={'text'} thousandSeparator={true} />  คะแนน
                                                                                </span>
                        </div>
                      </div>
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
