import React, { useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  Card,
  Menu,
  MenuItem,
  Button,
  List,
  ListItem,
  Select
} from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';

import Chart from 'react-apexcharts';

import hero8 from '../../../assets/images/hero-bg/hero-7.jpg';

import product1 from '../../../assets/images/stock-products/product-1.png';
import product2 from '../../../assets/images/stock-products/product-2.png';
import product3 from '../../../assets/images/stock-products/product-3.png';
import product4 from '../../../assets/images/stock-products/product-4.png';
import product5 from '../../../assets/images/stock-products/product-5.png';
import product6 from '../../../assets/images/stock-products/product-6.png';

import CommerceHeader from '../../Homepage/Homepage1/CommerceHeader.js';
import HomepageFooter from '../../Homepage/Homepage6';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';

import Products1 from '../../Products/Products1';
import FilterListTwoToneIcon from '@material-ui/icons/FilterListTwoTone';
import ArrowUpwardTwoToneIcon from '@material-ui/icons/ArrowUpwardTwoTone';
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import RadioButtonUncheckedTwoToneIcon from '@material-ui/icons/RadioButtonUncheckedTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';

export default function LivePreviewExample() {
  const chartHomepage1AOptions = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      enabled: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    colors: ['#4191ff'],
    fill: {
      color: '#4191ff',
      opacity: 0.1,
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartHomepage1AData = [
    {
      name: 'USD Price:',
      data: [81, 76, 87, 91, 47, 38, 56, 24, 45, 65, 72, 93, 110, 115, 125]
    }
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl1, setAnchorEl1] = useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [stock, setStock] = useState('0');

  const handleStock = (event) => {
    setStock(event.target.value);
  };

  const [category, setCategory] = useState('0');

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <>
      <div className="hero-wrapper bg-composed-wrapper bg-white">
        <div className="header-top-section pb-2">
          <CommerceHeader />
        </div>
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-8"
            style={{ backgroundImage: 'url(' + hero8 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <Container className="text-black text-center py-0 py-lg-5 z-over">
              <Grid container spacing={6} className="py-5">
                <Grid item lg={10} xl={7} className="mx-auto pb-5">
                  <div className="font-size-xs text-first pb-3 text-uppercase font-weight-bold">
                    Products
                  </div>
                  <h3 className="display-2 font-weight-bold mb-3">
                    Products & Filters
                  </h3>
                  <p className="text-black-50 line-height-2 font-size-xl px-3 pb-5 px-xl-5 mb-0">
                    All components from the General dashboard template can be
                    used in the individual applications pages, without
                    modifications.
                  </p>
                </Grid>
              </Grid>
            </Container>
            <div className="shadow-container-blocks-2 opacity-4 z-below">
              <Chart
                options={chartHomepage1AOptions}
                series={chartHomepage1AData}
                type="area"
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <Container className="py-5">
        <Card className="shadow-xxl px-2 mb-5">
          <div className="nav-line d-flex align-items-center justify-content-between nav-tabs-primary">
            <div>
              <div>
                <Button
                  onClick={handleClick}
                  size="small"
                  className="btn-primary d-40 btn-pill btn-icon p-0 d-flex align-items-center justify-content-center">
                  <FilterListTwoToneIcon className="w-50" />
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  keepMounted
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  open={Boolean(anchorEl)}
                  classes={{ list: 'p-0', paper: 'rounded' }}
                  onClose={handleClose}>
                  <div className="dropdown-menu-xxl p-0">
                    <div className="p-3">
                      <Grid container spacing={6}>
                        <Grid item md={6}>
                          <small className="font-weight-bold pb-2 text-uppercase text-primary d-block">
                            Category
                          </small>
                          <Select
                            variant="outlined"
                            fullWidth
                            value={category}
                            onChange={handleCategory}
                            labelWidth={0}>
                            <MenuItem className="mx-2" value={0}>
                              All categories
                            </MenuItem>
                            <MenuItem className="mx-2" value={1}>
                              Laptops
                            </MenuItem>
                            <MenuItem className="mx-2" value={2}>
                              Mobile Phones
                            </MenuItem>
                            <MenuItem className="mx-2" value={3}>
                              Tablets
                            </MenuItem>
                            <MenuItem className="mx-2" value={4}>
                              Audio Devices
                            </MenuItem>
                            <MenuItem className="mx-2" value={5}>
                              Video Cameras
                            </MenuItem>
                          </Select>
                        </Grid>
                        <Grid item md={6}>
                          <small className="font-weight-bold pb-2 text-uppercase text-primary d-block">
                            Stock
                          </small>
                          <Select
                            variant="outlined"
                            fullWidth
                            value={stock}
                            onChange={handleStock}
                            labelWidth={0}>
                            <MenuItem className="mx-2" value={0}>
                              Any
                            </MenuItem>
                            <MenuItem className="mx-2" value={1}>
                              Out of stock
                            </MenuItem>
                            <MenuItem className="mx-2" value={2}>
                              In Stock
                            </MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                    </div>
                    <div className="divider" />
                    <div className="p-3 text-center rounded-bottom bg-secondary">
                      <Button className="btn-primary" size="small">
                        Filter results
                      </Button>
                    </div>
                  </div>
                </Menu>
              </div>
            </div>
            <List className="nav-line d-flex align-items-center justify-content-between nav-tabs-primary py-0">
              <ListItem
                button
                className="mx-3 px-0 py-3 my-0 h-auto d-block"
                selected={activeTab === '1'}
                disableRipple
                onClick={() => {
                  toggle('1');
                }}>
                <span className="font-size-sm font-weight-bold">Latest</span>
                <div className="divider left-0 w-100" />
              </ListItem>
              <ListItem
                button
                className="mx-3 px-0 py-3 my-0 h-auto d-block"
                selected={activeTab === '2'}
                disableRipple
                onClick={() => {
                  toggle('2');
                }}>
                <span className="font-size-sm font-weight-bold">Popular</span>
                <div className="divider left-0 w-100" />
              </ListItem>
              <ListItem
                button
                className="mx-3 px-0 py-3 my-0 h-auto d-block"
                selected={activeTab === '3'}
                disableRipple
                onClick={() => {
                  toggle('3');
                }}>
                <span className="font-size-sm font-weight-bold">
                  New Arrivals
                </span>
                <div className="divider left-0 w-100" />
              </ListItem>
            </List>
            <div>
              <div>
                <Button
                  onClick={handleClick1}
                  size="small"
                  className="btn-primary d-40 btn-pill btn-icon p-0 d-flex align-items-center justify-content-center">
                  <SettingsTwoToneIcon className="w-50" />
                </Button>
                <Menu
                  anchorEl={anchorEl1}
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
                  open={Boolean(anchorEl1)}
                  classes={{ list: 'p-0' }}
                  onClose={handleClose1}>
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
        </Card>
        <div className="mb-5">
          <div
            className={clsx('tab-item-wrapper overflow-visible d-none', {
              'active d-block': activeTab === '1'
            })}
            index={1}>
            <div className="mb-spacing-6-x2">
              <Grid container spacing={6}>
                <Grid item md={6} lg={4}>
                  <Card className="shadow-xxl">
                    <div className="card-tr-actions z-over">
                      <Button className="btn-link hover-scale-lg p-0 font-size-xl">
                        <FavoriteTwoToneIcon />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product1}
                          style={{ width: 200 }}
                        />
                      </a>
                    </Card>
                    <div className="p-3 d-flex justify-content-center">
                      <div>
                        <div className="font-weight-bold font-size-xl">
                          Apple TV Gen. 4
                        </div>
                        <div className="d-flex align-items-center justify-content-center pt-1">
                          <div className="d-20 rounded-pill border-success border-1 btn-icon font-size-xs bg-neutral-success text-success mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs"
                            />
                          </div>
                          <span className="font-size-xs text-black-50">
                            <b>31</b> left in stock
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                      <Button size="small" className="btn-primary">
                        Add to cart
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-4 card-footer bg-secondary text-black-50 font-size-sm">
                      <div className="d-flex align-items-start">
                        <div className="mr-3 text-danger">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                        <div>
                          <div className="font-size-sm">
                            <b>77%</b> Positive reviews
                          </div>
                          <div className="text-black-50 font-size-xs">
                            Above avarage
                          </div>
                        </div>
                        <div className="d-flex text-center ml-auto">
                          <div>
                            <div className="font-weight-bold">527</div>
                            <div className="text-black-50 font-size-xs">
                              orders
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} lg={4}>
                  <Card className="shadow-xxl">
                    <div className="card-tr-actions z-over">
                      <Button className="btn-link hover-scale-lg p-0 font-size-xl">
                        <FavoriteTwoToneIcon />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product2}
                          style={{ width: 200 }}
                        />
                      </a>
                    </Card>
                    <div className="p-3 d-flex justify-content-center">
                      <div>
                        <div className="font-weight-bold font-size-xl">
                          iPhone 11 PRO Max
                        </div>
                        <div className="d-flex align-items-center justify-content-center pt-1">
                          <div className="d-20 rounded-pill border-danger border-1 btn-icon font-size-xs bg-neutral-danger text-danger mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'times']}
                              className="font-size-xs"
                            />
                          </div>
                          <span className="font-size-xs text-black-50">
                            <b>0</b> left in stock
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                      <Button size="small" disabled color="primary">
                        Add to cart
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-4 card-footer bg-secondary text-black-50 font-size-sm">
                      <div className="d-flex align-items-start">
                        <div className="mr-3 text-danger">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                        <div>
                          <div className="font-size-sm">
                            <b>94%</b> Positive reviews
                          </div>
                          <div className="text-black-50 font-size-xs">
                            Above avarage
                          </div>
                        </div>
                        <div className="d-flex text-center ml-auto">
                          <div>
                            <div className="font-weight-bold">1,348</div>
                            <div className="text-black-50 font-size-xs">
                              orders
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} lg={4}>
                  <Card className="shadow-xxl">
                    <div className="card-tr-actions z-over">
                      <Button className="btn-link hover-scale-lg p-0 font-size-xl">
                        <FavoriteTwoToneIcon />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product3}
                          style={{ width: 200 }}
                        />
                      </a>
                    </Card>
                    <div className="p-3 d-flex justify-content-center">
                      <div>
                        <div className="font-weight-bold font-size-xl">
                          iPad PRO 13"
                        </div>
                        <div className="d-flex align-items-center justify-content-center pt-1">
                          <div className="d-20 rounded-pill border-success border-1 btn-icon font-size-xs bg-neutral-success text-success mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs"
                            />
                          </div>
                          <span className="font-size-xs text-black-50">
                            <b>85</b> left in stock
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                      <Button size="small" className="btn-primary">
                        Add to cart
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-4 card-footer bg-secondary text-black-50 font-size-sm">
                      <div className="d-flex align-items-start">
                        <div className="mr-3 text-danger">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                        <div>
                          <div className="font-size-sm">
                            <b>87%</b> Positive reviews
                          </div>
                          <div className="text-black-50 font-size-xs">
                            Above avarage
                          </div>
                        </div>
                        <div className="d-flex text-center ml-auto">
                          <div>
                            <div className="font-weight-bold">382</div>
                            <div className="text-black-50 font-size-xs">
                              orders
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} lg={4}>
                  <Card className="shadow-xxl">
                    <div className="card-tr-actions z-over">
                      <Button className="btn-link hover-scale-lg p-0 font-size-xl">
                        <FavoriteTwoToneIcon />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product4}
                          style={{ width: 200 }}
                        />
                      </a>
                    </Card>
                    <div className="p-3 d-flex justify-content-center">
                      <div>
                        <div className="font-weight-bold font-size-xl">
                          Apple Macbook Pro
                        </div>
                        <div className="d-flex align-items-center justify-content-center pt-1">
                          <div className="d-20 rounded-pill border-success border-1 btn-icon font-size-xs bg-neutral-success text-success mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs"
                            />
                          </div>
                          <span className="font-size-xs text-black-50">
                            <b>274</b> left in stock
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                      <Button size="small" className="btn-primary">
                        Add to cart
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-4 card-footer bg-secondary text-black-50 font-size-sm">
                      <div className="d-flex align-items-start">
                        <div className="mr-3 text-danger">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                        <div>
                          <div className="font-size-sm">
                            <b>89%</b> Positive reviews
                          </div>
                          <div className="text-black-50 font-size-xs">
                            Above avarage
                          </div>
                        </div>
                        <div className="d-flex text-center ml-auto">
                          <div>
                            <div className="font-weight-bold">485</div>
                            <div className="text-black-50 font-size-xs">
                              orders
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} lg={4}>
                  <Card className="shadow-xxl">
                    <div className="card-tr-actions z-over">
                      <Button className="btn-link hover-scale-lg p-0 font-size-xl">
                        <FavoriteTwoToneIcon />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product5}
                          style={{ width: 200 }}
                        />
                      </a>
                    </Card>
                    <div className="p-3 d-flex justify-content-center">
                      <div>
                        <div className="font-weight-bold font-size-xl">
                          Professional Headphones
                        </div>
                        <div className="d-flex align-items-center justify-content-center pt-1">
                          <div className="d-20 rounded-pill border-success border-1 btn-icon font-size-xs bg-neutral-success text-success mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs"
                            />
                          </div>
                          <span className="font-size-xs text-black-50">
                            <b>+99</b> left in stock
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                      <Button size="small" className="btn-primary">
                        Add to cart
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-4 card-footer bg-secondary text-black-50 font-size-sm">
                      <div className="d-flex align-items-start">
                        <div className="mr-3 text-danger">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                        <div>
                          <div className="font-size-sm">
                            <b>65%</b> Positive reviews
                          </div>
                          <div className="text-black-50 font-size-xs">
                            Above avarage
                          </div>
                        </div>
                        <div className="d-flex text-center ml-auto">
                          <div>
                            <div className="font-weight-bold">296</div>
                            <div className="text-black-50 font-size-xs">
                              orders
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
                <Grid item md={6} lg={4}>
                  <Card className="shadow-xxl">
                    <div className="card-tr-actions z-over">
                      <Button className="btn-link hover-scale-lg p-0 font-size-xl">
                        <FavoriteTwoToneIcon />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product6}
                          style={{ width: 200 }}
                        />
                      </a>
                    </Card>
                    <div className="p-3 d-flex justify-content-center">
                      <div>
                        <div className="font-weight-bold font-size-xl">
                          Apple iWatch Waterproof
                        </div>
                        <div className="d-flex align-items-center justify-content-center pt-1">
                          <div className="d-20 rounded-pill border-success border-1 btn-icon font-size-xs bg-neutral-success text-success mr-2">
                            <FontAwesomeIcon
                              icon={['fas', 'check']}
                              className="font-size-xs"
                            />
                          </div>
                          <span className="font-size-xs text-black-50">
                            <b>482</b> left in stock
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 pb-4 text-center">
                      <Button size="small" className="btn-primary">
                        Add to cart
                      </Button>
                    </div>
                    <div className="divider" />
                    <div className="p-4 card-footer bg-secondary text-black-50 font-size-sm">
                      <div className="d-flex align-items-start">
                        <div className="mr-3 text-danger">
                          <FontAwesomeIcon icon={['fas', 'heart']} />
                        </div>
                        <div>
                          <div className="font-size-sm">
                            <b>91%</b> Positive reviews
                          </div>
                          <div className="text-black-50 font-size-xs">
                            Above avarage
                          </div>
                        </div>
                        <div className="d-flex text-center ml-auto">
                          <div>
                            <div className="font-weight-bold">398</div>
                            <div className="text-black-50 font-size-xs">
                              orders
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>

            <div className="d-flex align-items-center justify-content-center pt-3">
              <Pagination
                className="pagination-primary"
                count={8}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
          <div
            className={clsx('tab-item-wrapper overflow-visible d-none', {
              'active d-block': activeTab === '2'
            })}
            index={2}>
            <div className="mb-spacing-6-x2">
              <Grid container spacing={6}>
                <Grid item lg={4}>
                  <Card className="card-box text-center">
                    <div className="card-tr-actions z-over">
                      <Button
                        variant="text"
                        className="p-0 d-30 btn-pill btn-link-danger p-0 font-size-xl">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-lg text-danger"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product1}
                          style={{ width: 100 }}
                        />
                      </a>
                    </Card>
                    <div className="card-header-alt d-flex flex-column justify-content-center p-3">
                      <h6 className="font-weight-bold font-size-lg mb-2 text-black">
                        Apple MacBook PRO
                      </h6>
                      <p className="text-black-50 font-size-sm mb-0">
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                    </div>

                    <div className="pb-3">
                      <div className="badge badge-neutral-primary text-primary badge-pill font-weight-normal font-size-sm font-weight-bold h-auto py-2 px-3">
                        $1287
                      </div>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-2 d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-first">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-warning">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-deep-blue">
                        &nbsp;
                      </a>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-3">
                      <Button className="btn-success text-uppercase font-weight-bold font-size-xs">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="card-box text-center">
                    <div className="card-tr-actions z-over">
                      <Button
                        variant="text"
                        className="p-0 d-30 btn-pill btn-link-danger p-0 font-size-xl">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-lg text-danger"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product3}
                          style={{ width: 100 }}
                        />
                      </a>
                    </Card>
                    <div className="card-header-alt d-flex flex-column justify-content-center p-3">
                      <h6 className="font-weight-bold font-size-lg mb-2 text-black">
                        Headphones Pro 3
                      </h6>
                      <p className="text-black-50 font-size-sm mb-0">
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                    </div>

                    <div className="pb-3">
                      <div className="badge badge-neutral-primary text-primary badge-pill font-weight-normal font-size-sm font-weight-bold h-auto py-2 px-3">
                        $149
                      </div>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-2 d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-first">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-warning">
                        &nbsp;
                      </a>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-3">
                      <Button className="btn-success text-uppercase font-weight-bold font-size-xs">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="card-box text-center">
                    <div className="card-tr-actions z-over">
                      <Button
                        variant="text"
                        className="p-0 d-30 btn-pill btn-link-danger p-0 font-size-xl">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-lg text-danger"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product5}
                          style={{ width: 100 }}
                        />
                      </a>
                    </Card>
                    <div className="card-header-alt d-flex flex-column justify-content-center p-3">
                      <h6 className="font-weight-bold font-size-lg mb-2 text-black">
                        Apple iWatch IV
                      </h6>
                      <p className="text-black-50 font-size-sm mb-0">
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                    </div>

                    <div className="pb-3">
                      <div className="badge badge-neutral-primary text-primary badge-pill font-weight-normal font-size-sm font-weight-bold h-auto py-2 px-3">
                        $329
                      </div>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-2 d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-warning">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-deep-blue">
                        &nbsp;
                      </a>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-3">
                      <Button className="btn-success text-uppercase font-weight-bold font-size-xs">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="card-box text-center">
                    <div className="card-tr-actions z-over">
                      <Button
                        variant="text"
                        className="p-0 d-30 btn-pill btn-link-danger p-0 font-size-xl">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-lg text-danger"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product2}
                          style={{ width: 100 }}
                        />
                      </a>
                    </Card>
                    <div className="card-header-alt d-flex flex-column justify-content-center p-3">
                      <h6 className="font-weight-bold font-size-lg mb-2 text-black">
                        Apple iWatch IV
                      </h6>
                      <p className="text-black-50 font-size-sm mb-0">
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                    </div>

                    <div className="pb-3">
                      <div className="badge badge-neutral-primary text-primary badge-pill font-weight-normal font-size-sm font-weight-bold h-auto py-2 px-3">
                        $329
                      </div>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-2 d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-warning">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-deep-blue">
                        &nbsp;
                      </a>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-3">
                      <Button className="btn-success text-uppercase font-weight-bold font-size-xs">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="card-box text-center">
                    <div className="card-tr-actions z-over">
                      <Button
                        variant="text"
                        className="p-0 d-30 btn-pill btn-link-danger p-0 font-size-xl">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-lg text-danger"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product4}
                          style={{ width: 100 }}
                        />
                      </a>
                    </Card>
                    <div className="card-header-alt d-flex flex-column justify-content-center p-3">
                      <h6 className="font-weight-bold font-size-lg mb-2 text-black">
                        Apple iWatch IV
                      </h6>
                      <p className="text-black-50 font-size-sm mb-0">
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                    </div>

                    <div className="pb-3">
                      <div className="badge badge-neutral-primary text-primary badge-pill font-weight-normal font-size-sm font-weight-bold h-auto py-2 px-3">
                        $329
                      </div>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-2 d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-warning">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-deep-blue">
                        &nbsp;
                      </a>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-3">
                      <Button className="btn-success text-uppercase font-weight-bold font-size-xs">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Grid>
                <Grid item lg={4}>
                  <Card className="card-box text-center">
                    <div className="card-tr-actions z-over">
                      <Button
                        variant="text"
                        className="p-0 d-30 btn-pill btn-link-danger p-0 font-size-xl">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-lg text-danger"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3 d-flex justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="card-img-wrapper card-box-hover rounded">
                        <img
                          alt="..."
                          className="card-img-top rounded-sm"
                          src={product6}
                          style={{ width: 100 }}
                        />
                      </a>
                    </Card>
                    <div className="card-header-alt d-flex flex-column justify-content-center p-3">
                      <h6 className="font-weight-bold font-size-lg mb-2 text-black">
                        Apple iWatch IV
                      </h6>
                      <p className="text-black-50 font-size-sm mb-0">
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                    </div>

                    <div className="pb-3">
                      <div className="badge badge-neutral-primary text-primary badge-pill font-weight-normal font-size-sm font-weight-bold h-auto py-2 px-3">
                        $329
                      </div>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-2 d-flex align-items-center justify-content-center">
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-danger">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-warning">
                        &nbsp;
                      </a>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="m-2 d-20 rounded-circle btn-swatch bg-deep-blue">
                        &nbsp;
                      </a>
                    </div>

                    <div className="divider w-50 mx-auto" />

                    <div className="py-3">
                      <Button className="btn-success text-uppercase font-weight-bold font-size-xs">
                        Buy Now
                      </Button>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </div>

            <div className="d-flex align-items-center justify-content-center pt-3">
              <Pagination
                className="pagination-primary"
                count={8}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </div>
          <div
            className={clsx('tab-item-wrapper overflow-visible d-none', {
              'active d-block': activeTab === '3'
            })}
            index={3}>
            <Products1 />
          </div>
        </div>
      </Container>
      <HomepageFooter />
    </>
  );
}
