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
      .get("https://dafarewards.com:7002/api/v1/redeemlist", {
        params: {
          Cat_ID: 0,
          page: 1,
          type: 1,
          status: event.target.value
        }
      })
      .then((res) => {
        console.log(res)
        Setreward(res.data.message.orderlist)
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
  const handleClicksave = async () => {
    try {
      try {
        let payload = {
          txnid: txnredeem,
          status: statussel,
          trackingid: Tracking

        };
        let headerss = {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
        }; axios
          .post("https://dafarewards.com:7002/api/v1/editdetailrewardstat", payload, {
          })
          .then((res) => {
            getreward(1);
            setModal2(modal2);
          }).catch((error) => {
            console.log(error)
          });
      }
      catch (error) {
        console.log(error)
      }

    }
    catch (error) {
    }

  };


  const handleClickcancel = async () => {
    setModal2(!modal2);
    //  setModal(!modal);
  };
  const handleClickcancelmd1 = async () => {
    setModal(!modal);
    //  setModal(!modal);
  };

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
    getreward(value);
  };
  useEffect(() => {
    getreward(1);
    getstatus(0);
  }, []);
  const [rewardlists, Setreward] = useState(null);
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

  const getreward = (value) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/redeemlist", {
        params: {
          Cat_ID: 0,
          page: value,
          type: 1,
          status: (window.location.pathname.split("/")[2] === undefined) ? status : window.location.pathname.split("/")[2]
        }
      })
      .then((res) => {
        console.log(res)
        Setreward(res.data.message.orderlist)
        Setrepaging(res.data.message.pagecount)
      });
  };

  const getstatus = (value) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/getstatus", {
      })
      .then((res) => {
        console.log(res)
        setgetstatuslist(res.data.message)
      });
  };


  const onChange = event => {
    console.log("event", event.target);

  };


  const handleChanges = async (e) => {
    setcountry(e.target.value);
    const Amphuresss = Amphures.filter((auto) => auto.province_id === e.target.value)
    setAmphureslist(Amphuresss);
  };

  const handleChangeamphure = async (e) => {
    setamphure(e.target.value)
    const District = Districts.filter((auto) => auto.amphur_id === e.target.value)
    setDistrictslist(District)
  };

  const handleChangedistrict = async (e) => {
    setdistrict(e.target.value)
    const Zipcode = Zipcodes.filter((auto) => auto.district_code === e.target.value)
    setZipcodeslist(Zipcode)
  };

  const handleChangezipcode = async (e) => {
    setzipcode(e.target.value)
  };

  const handleChangestatus = async (e) => {
    console.log(e.target.value);
    setstatussel(e.target.value)
  };


  const [type, setType] = useState('');
  const handleType = (event) => {
    setType(event.target.value);
  };


  const SearchononChange = (event) => {
    // gettxnloguser(1, event.target.value);
    setSearchtxt(event.target.value)
  };


  const [searchtxt, setSearchtxt] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  return (
    <>
      <Card className="card-box">

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
              placeholder="Search Player..."
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
        </div>
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
                <React.Fragment key={listitem.TxnID}>
                  <tr key={listitem.TxnID}>
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
                      <Button onClick={() => toggleModal(listitem)} className="btn-neutral-primary mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'search']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button onClick={() => toggleModal2(listitem)} className="btn-neutral-first mx-1 shadow-none d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
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
      <Dialog
        open={modal}
        scroll="body"
        maxWidth="md"
        onClose={toggleModal}
        classes={{ paper: 'border-0 bg-white' }}>
        <div className="p-4 text-center">
          <Container>
            <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              Infomation
              </div>
            <div className="py-4">
              <Grid container spacing={2}>
                <Grid item md={12} >
                  <Grid container spacing={6} className="show-detail-input">
                    <Grid item md={6} >
                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          ชื่อ -นามสกุล
                         </label>
                        <TextField
                          disabled
                          value={firstname + " " + lastname}
                          id="name"
                          name="lastname"
                          variant="outlined"
                          fullWidth
                          placeholder="First-Last name..."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          บ้านเลขที่
                        </label>
                        <TextField
                          onChange={onChange}
                          variant="outlined"
                          id="homeno"
                          value={homeno}
                          name="homeno"
                          fullWidth
                          placeholder="No..."
                        />
                      </div>
                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          ตรอกซอย
                        </label>
                        <TextField
                          variant="outlined"
                          onChange={onChange}
                          id="alley"
                          value={alley}
                          name="alley"
                          fullWidth
                          placeholder="alley..."
                        />
                      </div>

                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          ถนน
                        </label>
                        <TextField
                          onChange={onChange}
                          id="roadname"
                          value={roadname}
                          name="roadname"
                          variant="outlined"
                          fullWidth
                          placeholder="Road..."
                        />
                      </div>
                    </Grid>
                    <Grid item md={6}>

                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          จังหวัด
                        </label>
                        <Select
                          fullWidth
                          variant="outlined"
                          size="small"
                          value={country}
                          onChange={handleChanges}
                          labelWidth={0}>
                          <MenuItem key={0} className="mx-2" value={0}>
                            โปรดเลือก จังหวัด
                          </MenuItem>
                          {Provinceslist.map(key => (
                            <MenuItem key={key.province_id} className="mx-2" value={key.province_id}>
                              {key.province_name}
                            </MenuItem>)
                          )}
                        </Select>
                      </div>
                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          อำเภอ / เขต
                                               </label>
                        <Select
                          fullWidth
                          variant="outlined"
                          size="small"
                          value={amphure}
                          onChange={handleChangeamphure}
                          labelWidth={0}>
                          <MenuItem key={0} className="mx-2" value={0}>
                            โปรดเลือก อำเภอ / เขต
                          </MenuItem>
                          {Amphureslist.map(key => (
                            <MenuItem key={key.amphur_id} className="mx-2" value={key.amphur_id}>
                              {key.amphur_name}
                            </MenuItem>)
                          )}
                        </Select>
                      </div>
                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          ตำบล / แขวง
                                               </label>
                        <Select
                          fullWidth
                          variant="outlined"
                          size="small"
                          value={district}
                          onChange={handleChangedistrict}
                          labelWidth={0}>
                          <MenuItem key={0} className="mx-2" value={0}>
                            โปรดเลือก ตำบล / แขวง
                                                    </MenuItem>
                          {Districtslist.map(key => (
                            <MenuItem key={key.district_code} className="mx-2" value={key.district_code}>
                              {key.district_name}
                            </MenuItem>)
                          )}
                        </Select>
                      </div>
                      <div className="mb-4">
                        <label className="font-weight-bold mb-2">
                          รหัสไปรษณีย์
                        </label>
                        <Select
                          fullWidth
                          variant="outlined"
                          size="small"
                          value={zipcode}
                          onChange={handleChangezipcode}
                          labelWidth={0}>
                          <MenuItem key={0} className="mx-2" value={0}>
                            โปรดเลือก  รหัสไปรษณีย์
                          </MenuItem>
                          {Zipcodeslist.map(key => (
                            <MenuItem key={key.zipcode_id} className="mx-2" value={key.zipcode_id}>
                              {key.zipcode_name}
                            </MenuItem>)
                          )}
                        </Select>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Container>
          <div className="divider my-4" />
          <Button size="large" className="btn-danger font-weight-bold" style={{ marginRight: "20px" }} onClick={handleClickcancelmd1} >
            Cancel
          </Button>
          <Button size="large" className="btn-success font-weight-bold"  >
            Save details
                </Button>
        </div>
      </Dialog>
      <Dialog
        open={modal2}
        scroll="body"
        maxWidth="md"
        onClose={toggleModal2}
        classes={{ paper: 'border-0 bg-white' }}>
        <div className="p-4 text-center">
          <Container>
            <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              Change Status
              </div>
            <div className="py-4">
              <Grid container spacing={2}>
                <Grid item md={12} >
                  <Grid item md={12} >
                    <Select
                      fullWidth
                      variant="outlined"
                      size="small"
                      value={statussel}
                      onChange={handleChangestatus}
                      labelWidth={0}>
                      <MenuItem key={0} className="mx-2" value={0}>
                        โปรดเลือกสถานะ
                   </MenuItem>
                      {getstatuslist.map(key => (
                        <MenuItem key={key.no} className="mx-2" value={key.no}>
                          {key.status}
                        </MenuItem>)
                      )}
                    </Select>
                  </Grid>
                  <Grid item md={12} style={{ display: (statussel === 4) ? "" : "none" }} >
                    <div className="mb-4" style={{ marginTop: "10px" }}>
                      <label className="font-weight-bold mb-2">
                        Tracking ID
                        </label>
                      <TextField
                        onChange={onChangetracking}
                        variant="outlined"
                        id="Tracking"
                        value={Tracking}
                        name="Tracking"
                        fullWidth
                        placeholder="No..."
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Container>
          <div className="divider my-4" />
          <Button size="large" className="btn-danger font-weight-bold" style={{ marginRight: "20px" }} onClick={handleClickcancel} >
            Cancel
          </Button>
          <Button size="large" className="btn-success font-weight-bold" onClick={handleClicksave} >
            Save
          </Button>
        </div>
      </Dialog>
    </>
  );
}
