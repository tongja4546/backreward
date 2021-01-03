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


export default function LivePreviewExample() {

  const [files, setFiles] = useState([]);
  const {
    isDragActive,
    isDragAccept,
    isDragReject,
    open,
    getRootProps,
    getInputProps
  } = useDropzone({
    noClick: true,
    noKeyboard: true,
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }
  });

  const thumbs = files.map((file) => (
    <div
      {...console.log(file)}
      key={file.name}
      className="rounded avatar-image overflow-hidden d-140 bg-neutral-success text-center font-weight-bold text-success d-flex justify-content-center align-items-center">
      <img
        className="img-fluid img-fit-container rounded-sm"
        src={file.preview}
        alt="..."
      />
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
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

  function checkstatus(status,listitem) {
    if (status == 0) return <Button onClick={() => handleClickdisable(listitem)} className="btn-success mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon
        icon={['fas', 'check']}
        className="font-size-sm"
      />
    </Button>;
    else  return <Button onClick={() => handleClickdisable(listitem)} className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
      <FontAwesomeIcon
        icon={['fas', 'times']}
        className="font-size-sm"
      />
    </Button>
    // else return <div className='px-4 py-1 h-auto text-success border-1 border-success badge badge-neutral-success'> Normal </div>;
  }

  const handleClicksave = async () => {
    try {
      let payload = {
        name: namesec,
        point: pointsec,
        description: descriptionsec,
        Cat_ID: selectlist.Cat_ID,
        qty: qtysec,
        productname: productnamesec,
        cash: pricesec,
        rewardid: selectlist.id,
        type: 1,
      };
      let headerss = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
      };
      await axios.post('https://dafarewards.com:7002/api/v1/editdetailreward', payload, { headers: headerss }).then((res) => {
        getreward(1);
        setModal(!modal);
      }).catch((error) => {
        console.log(error)
      });
    }
    catch (error) {
      console.log(error)
    }

  };


  const handleClickdisable = async (evals) => {
    try {

      let payload = {
        status: (evals.status == 1) ? 0 : 1,
        rewardid: evals.id,
        type: 2,
      };
      let headerss = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
      };
      console.log(payload);
      await axios.post('https://dafarewards.com:7002/api/v1/editdetailreward', payload, { headers: headerss }).then((res) => {
        getreward(1);
      }).catch((error) => {
        console.log(error)
      });
    }
    catch (error) {
      console.log(error)
    }

  };

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

  const onchanges = (event) => {
    setqtysec(event.target.value);
  };

  const onchangesprice = (event) => {
    setqtyPrice(event.target.value);
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);
  const [status, setStatus] = useState('0');
  const [categorylist, SetCat] = useState(null);
  const [rewardlists, Setreward] = useState(null);
  const [pagingcount, Setrepaging] = useState(0);
  const [page, setPage] = React.useState(1);
  const rewardcat = (event) => {
    axios
      .post("https://dafarewards.com:7001/api/v1/tabcategory",)
      .then((res) => {
        SetCat(res.data.message)
      });
  };
  const handleChange = (event, value) => {
    setPage(value);
    getreward(value);
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
    getreward(1);
  }, []);

  const getreward = (value) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/rewardlistadmin", {
        params: {
          Cat_ID: 0,
          page: value,
          type:1
        }
      })
      .then((res) => {
        Setreward(res.data.message.products)
        Setrepaging(res.data.message.pagecount)
      });
  };
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
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                  </th>
                  <th
                    className="font-size-lg font-weight-normal pb-4 text-capitalize text-dark"
                    scope="col">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {(rewardlists == null) ? <tr><td></td></tr> : rewardlists.map(listitem => (
                  <tr key={listitem.id}>
                    <td className="text-center text-black-50">
                      <FormControlLabel
                        control={<Checkbox name="checked" />}
                        id="CustomCheckbox1"
                        className="ml-3"
                      />
                    </td>
                    <td className="text-center">
                      <span className="font-weight-bold">#{listitem.id}</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {listitem.name}
                          </a>
                          <span className="text-black-50 d-block">
                            {listitem.description}
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
                            src={listitem.image}
                            style={{ width: 90 }}
                          />
                        </a>
                        <div className="pl-3">
                          <a
                            href="#/"
                            onClick={(e) => e.preventDefault()}
                            className="font-weight-bold text-black"
                            title="...">
                            {listitem.productname}
                          </a>
                          <span className="text-black-50 d-block">
                            In stock: <b> {listitem.qty}</b>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      {statusandstock(listitem.status, listitem.qty)}
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <span> {listitem.point}</span>
                      <small>P</small>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <small>฿</small>
                      <span> {listitem.cash}</span>
                    </td>
                    <td className="text-right">
                      <Button onClick={() => toggleModal(listitem)} className="btn-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>

                      {checkstatus(listitem.status, listitem)}
                      {/* <Button onClick={() => handleClickdisable(listitem)} className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button> */}
                    </td>
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
      <Dialog
        open={modal}
        scroll="body"
        maxWidth="md"
        onClose={toggleModal}
        classes={{ paper: 'border-0 bg-white' }}>
        <div className="p-4 text-center">
          <div className="py-4 d-flex align-items-center justify-content-center" >
            <div className="dropzone rounded shadow-xxl">
              <div {...getRootProps({ className: 'dropzone-upload-wrapper' })}>
                <input {...getInputProps()} />
                <div className="dropzone-inner-wrapper d-140 rounded dropzone-avatar">
                  <div className="avatar-icon-wrapper d-140 rounded m-2">
                    <Button
                      onClick={open}
                      className="avatar-button badge shadow-sm btn-icon badge-position badge-position--top-right border-0 text-indent-0 d-40 badge-circle btn-second text-white">
                      <PublishTwoToneIcon className="d-20" />
                    </Button>
                    <div>
                      {isDragAccept && (
                        <div className="rounded overflow-hidden d-140 bg-success text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                          <CheckIcon className="d-40" />
                        </div>
                      )}
                      {isDragReject && (
                        <div className="rounded overflow-hidden d-140 bg-danger text-center font-weight-bold text-white d-flex justify-content-center align-items-center">
                          <CloseTwoToneIcon className="d-60" />
                        </div>
                      )}
                      {!isDragActive && (
                        <div className="rounded overflow-hidden d-140 bg-neutral-dark text-center font-weight-bold text-black-50 d-flex justify-content-center align-items-center">
                          <AccountCircleTwoToneIcon className="d-50" />
                        </div>
                      )}
                    </div>
                    {/* <div>{thumbs}</div> */}
                    {thumbs.length > 0 && <div>{thumbs}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Container>
            <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              General
              </div>
            <div className="py-4">
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Product Name'
                      value={(productnamesec === null) ? '' : productnamesec}
                      onChange={onchangesproductname}
                      variant="outlined"
                      fullWidth
                      placeholder="Product name..."
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Show Name'
                      value={(namesec === null) ? '' : namesec}
                      onChange={onchangesname}
                      variant="outlined"
                      fullWidth
                      placeholder="Show Name..."
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Description'
                      value={(descriptionsec === null) ? '' : descriptionsec}
                      onChange={onchangesdesc}
                      variant="outlined"
                      fullWidth
                      placeholder="Description..."
                    />
                  </div>
                  <Grid container spacing={6}>
                    <Grid item md={4}>
                      <div className="mb-4">
                        <TextField
                          label='Point'
                          value={(pointsec === null) ? '' : pointsec}
                          onChange={onchangespoint}
                          variant="outlined"
                          fullWidth
                          placeholder="Point..."
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="mb-4">
                        <TextField
                          label='Price'
                          value={(pricesec === null) ? '' : pricesec}
                          onChange={onchangesprice}
                          variant="outlined"
                          fullWidth
                          placeholder="Price..."
                        />
                      </div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="mb-4">
                        <TextField
                          label='Stock'
                          value={(qtysec === null) ? '' : qtysec}
                          onChange={onchanges}
                          variant="outlined"
                          fullWidth
                          placeholder="Stock..."
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Container>
          <div className="divider my-4" />
          <Button size="large" className="btn-success font-weight-bold" onClick={handleClicksave} >
            Save details
                </Button>
        </div>
      </Dialog>

    </>
  );
}
