import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button, Tooltip } from '@material-ui/core';

import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';

import { NavLink } from 'react-router-dom';

import hero8 from '../../../assets/images/hero-bg/hero-7.jpg';

import product1 from '../../../assets/images/stock-products/product-1.png';
import product2 from '../../../assets/images/stock-products/product-2.png';
import product3 from '../../../assets/images/stock-products/product-3.png';
import product4 from '../../../assets/images/stock-products/product-4.png';
import product5 from '../../../assets/images/stock-products/product-5.png';
import product6 from '../../../assets/images/stock-products/product-6.png';

import CommerceHeader from './CommerceHeader.js';

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
      data: [47, 38, 56, 24, 45, 65, 72, 81, 76, 87, 91, 93, 110, 115, 125]
    }
  ];

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
            <Container className="text-white py-0 py-lg-5 z-over">
              <Grid container spacing={6} className="py-5">
                <Grid item lg={6} xl={7}>
                  <div className="pr-0 pr-xl-5">
                    <div className="d-flex align-items-center">
                      <div className="badge-pill badge badge-success px-4 h-auto py-1">
                        New version
                      </div>
                      <Tooltip
                        placement="right"
                        title="These pages were included in current version"
                        arrow>
                        <span className="text-black-50 ml-3">
                          <FontAwesomeIcon icon={['far', 'question-circle']} />
                        </span>
                      </Tooltip>
                    </div>
                    <div className="text-black mt-3">
                      <h1 className="display-2 mb-3 font-weight-bold">
                      Reward
                      </h1>
                      <p>
                        Fully coded, perfectly responsive on all screen sizes.
                        Start working on your project today!
                      </p>
                      <p className="font-size-lg text-black-50">
                        Use this individual application for a head start in
                        building a product that is related to the commerce
                        niche. This template comes with pre-built pages for
                        orders, customers and various sales releated analytics.
                      </p>
                      <div className="divider border-2 border-dark my-4 border-light opacity-2 rounded-circle w-25" />
                      <div>
                        <Button
                          component={NavLink}
                          to="/Dashboard"
                          size="large"
                          className="btn-primary d-block d-sm-inline-block">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'tachometer-alt']} />
                          </span>
                          <span className="btn-wrapper--label">Dashboard</span>
                        </Button>
                        <Button
                          component={NavLink}
                          to="/ProductsFilters"
                          className="btn-outline-primary d-block d-sm-inline-block ml-0 mt-3 mt-sm-0 ml-sm-3">
                          <span>Products Filters</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={6} xl={5} className="d-flex align-items-center">
                  <Card className="card-box w-100 mb-5 mt-5 mt-xl-0">
                    <div className="card-tr-actions">
                      <Button
                        variant="text"
                        className="p-0 d-30 border-0 btn-transition-none text-second"
                        disableRipple>
                        <FontAwesomeIcon
                          icon={['fas', 'ellipsis-h']}
                          className="font-size-lg"
                        />
                      </Button>
                    </div>
                    <div className="card-header-alt d-flex justify-content-center px-4 pt-4">
                      <div className="text-center">
                        <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                          Shopping Cart
                        </h6>
                        <p className="text-black-50 mb-0">
                          Checkout is almost done!
                        </p>
                      </div>
                    </div>
                    <div className="divider mt-4" />
                    <div className="scroll-area shadow-overflow">
                      <PerfectScrollbar options={{ wheelPropagation: false }}>
                        <div className="d-flex p-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div>
                              <Card className="card-transparent mb-3 mb-sm-0">
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="card-img-wrapper card-box-hover rounded">
                                  <img
                                    alt="..."
                                    className="card-img-top rounded-sm"
                                    src={product1}
                                    style={{ width: 110 }}
                                  />
                                </a>
                              </Card>
                            </div>
                            <div className="pl-3">
                              <b className="font-weight-bold font-size-lg text-black">
                                Apple TV Gen 5
                              </b>
                              <div className="d-flex pt-1 align-items-center">
                                <div className="badge badge-neutral-first text-first font-weight-normal font-size-sm h-auto py-1 px-2">
                                  $299
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="btn-primary p-0 btn-icon btn-animated-icon-sm hover-scale-sm mr-2 d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                            <Button className="btn-neutral-danger p-0 btn-icon btn-animated-icon-sm hover-scale-sm d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'times']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="divider opacity-7" />
                        <div className="d-flex p-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div>
                              <Card className="card-transparent mb-3 mb-sm-0">
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="card-img-wrapper card-box-hover rounded">
                                  <img
                                    alt="..."
                                    className="card-img-top rounded-sm"
                                    src={product2}
                                    style={{ width: 110 }}
                                  />
                                </a>
                              </Card>
                            </div>
                            <div className="pl-3">
                              <b className="font-weight-bold font-size-lg text-black">
                                iPhone 11 Pro Max
                              </b>
                              <div className="d-flex pt-1 align-items-center">
                                <div className="badge badge-neutral-first text-first font-weight-normal font-size-sm h-auto py-1 px-2">
                                  <b>$1999</b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="btn-primary p-0 btn-icon btn-animated-icon-sm hover-scale-sm mr-2 d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                            <Button className="btn-neutral-danger p-0 btn-icon btn-animated-icon-sm hover-scale-sm d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'times']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="divider opacity-7" />
                        <div className="d-flex p-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div>
                              <Card className="card-transparent mb-3 mb-sm-0">
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="card-img-wrapper card-box-hover rounded">
                                  <img
                                    alt="..."
                                    className="card-img-top rounded-sm"
                                    src={product3}
                                    style={{ width: 110 }}
                                  />
                                </a>
                              </Card>
                            </div>
                            <div className="pl-3">
                              <b className="font-weight-bold font-size-lg text-black">
                                IPad Pro Gen. 3
                              </b>
                              <div className="d-flex pt-1 align-items-center">
                                <div className="badge badge-neutral-first text-first font-weight-normal font-size-sm h-auto py-1 px-2">
                                  $299
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="btn-primary p-0 btn-icon btn-animated-icon-sm hover-scale-sm mr-2 d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                            <Button className="btn-neutral-danger p-0 btn-icon btn-animated-icon-sm hover-scale-sm d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'times']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="divider opacity-7" />
                        <div className="d-flex p-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div>
                              <Card className="card-transparent mb-3 mb-sm-0">
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="card-img-wrapper card-box-hover rounded">
                                  <img
                                    alt="..."
                                    className="card-img-top rounded-sm"
                                    src={product4}
                                    style={{ width: 110 }}
                                  />
                                </a>
                              </Card>
                            </div>
                            <div className="pl-3">
                              <b className="font-weight-bold font-size-lg text-black">
                                Apple Macbook PRO
                              </b>
                              <div className="d-flex pt-1 align-items-center">
                                <div className="badge badge-neutral-first text-first font-weight-normal font-size-sm h-auto py-1 px-2">
                                  $299
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="btn-primary p-0 btn-icon btn-animated-icon-sm hover-scale-sm mr-2 d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                            <Button className="btn-neutral-danger p-0 btn-icon btn-animated-icon-sm hover-scale-sm d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'times']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="divider opacity-7" />
                        <div className="d-flex p-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div>
                              <Card className="card-transparent mb-3 mb-sm-0">
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="card-img-wrapper card-box-hover rounded">
                                  <img
                                    alt="..."
                                    className="card-img-top rounded-sm"
                                    src={product5}
                                    style={{ width: 110 }}
                                  />
                                </a>
                              </Card>
                            </div>
                            <div className="pl-3">
                              <b className="font-weight-bold font-size-lg text-black">
                                PRO Headphones V3
                              </b>
                              <div className="d-flex pt-1 align-items-center">
                                <div className="badge badge-neutral-first text-first font-weight-normal font-size-sm h-auto py-1 px-2">
                                  $1199
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="btn-primary p-0 btn-icon btn-animated-icon-sm hover-scale-sm mr-2 d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                            <Button className="btn-neutral-danger p-0 btn-icon btn-animated-icon-sm hover-scale-sm d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'times']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="divider opacity-7" />
                        <div className="d-flex p-4 align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <div>
                              <Card className="card-transparent mb-3 mb-sm-0">
                                <a
                                  href="#/"
                                  onClick={(e) => e.preventDefault()}
                                  className="card-img-wrapper card-box-hover rounded">
                                  <img
                                    alt="..."
                                    className="card-img-top rounded-sm"
                                    src={product6}
                                    style={{ width: 110 }}
                                  />
                                </a>
                              </Card>
                            </div>
                            <div className="pl-3">
                              <b className="font-weight-bold font-size-lg text-black">
                                Apple Watch 42mm
                              </b>
                              <div className="d-flex pt-1 align-items-center">
                                <div className="badge badge-neutral-first text-first font-weight-normal font-size-sm h-auto py-1 px-2">
                                  $699
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <Button className="btn-primary p-0 btn-icon btn-animated-icon-sm hover-scale-sm mr-2 d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'plus']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                            <Button className="btn-neutral-danger p-0 btn-icon btn-animated-icon-sm hover-scale-sm d-30">
                              <span className="btn-wrapper--icon">
                                <FontAwesomeIcon
                                  icon={['fas', 'times']}
                                  className="font-size-xs"
                                />
                              </span>
                            </Button>
                          </div>
                        </div>
                      </PerfectScrollbar>
                    </div>
                    <div className="divider" />
                    <div className="bg-secondary text-black py-3 px-4 text-right">
                      <Grid container spacing={6}>
                        <Grid item md={9}>
                          <div className="text-black-50 text-uppercase">
                            Total
                          </div>
                        </Grid>
                        <Grid item md={3}>
                          $12,549
                        </Grid>
                      </Grid>
                    </div>
                    <div className="divider" />
                    <div className="p-4">
                      <Button
                        size="large"
                        fullWidth
                        className="btn-primary font-weight-bold font-size-sm text-uppercase">
                        Proceed to checkout
                      </Button>
                    </div>
                  </Card>
                </Grid>
              </Grid>
            </Container>
            <div className="shadow-container-blocks-2 z-below">
              <Chart
                options={chartHomepage1AOptions}
                series={chartHomepage1AData}
                type="area"
                height={350}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
