import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Grid,
  Container,
  LinearProgress,
  Card,
  Button
} from '@material-ui/core';

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Chart from 'react-apexcharts';

import logo1 from '../../../assets/images/stock-logos/netflix.svg';
import logo2 from '../../../assets/images/stock-logos/airbnb.svg';
import logo3 from '../../../assets/images/stock-logos/instagram.svg';
import logo4 from '../../../assets/images/stock-logos/slack.svg';
import logo5 from '../../../assets/images/stock-logos/google.svg';

export default function LivePreviewExample() {
  const chartHomepage4Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    colors: ['rgba(255,255,255,.75)'],
    stroke: {
      color: 'rgba(255,255,255,.75)',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chartHomepage4Data = [
    {
      name: 'Orders',
      data: [47, 54, 38, 56, 25, 19, 56, 27, 45, 54, 38, 26, 56, 65]
    }
  ];

  return (
    <>
      <div className="bg-secondary py-5">
        <Container>
          <div className="d-flex align-items-center justify-content-center flex-wrap">
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="bg-filter-grayscale opacity-5 hover-scale-lg">
                <img
                  src={logo1}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="bg-filter-grayscale opacity-5 hover-scale-lg">
                <img
                  src={logo2}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="bg-filter-grayscale opacity-5 hover-scale-lg">
                <img
                  src={logo3}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="bg-filter-grayscale opacity-5 hover-scale-lg">
                <img
                  src={logo4}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <div className="p-3 m-3 d-flex align-self-stretch">
              <div className="bg-filter-grayscale opacity-5 hover-scale-lg">
                <img
                  src={logo5}
                  style={{ height: 40 }}
                  className="m-auto img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5 feature-box">
        <Container className="py-5">
          <div className="mb-4 text-center">
            <div className="badge badge-neutral-success text-success mb-3 h-auto py-2 px-4 font-size-xs badge-pill font-weight-normal">
              Unlimited Options
            </div>
            <h4 className="font-weight-bold text-second display-3">
              Build anything you want
            </h4>
            <Grid item md={11} lg={10} className="mx-auto">
              <p className="text-second opacity-6 mt-3 mb-5 font-size-xxl">
                We've got you covered with over 500 custom components ready to
                use
              </p>
            </Grid>
          </div>
          <div className="divider mb-4" />
          <Grid container spacing={6}>
            <Grid item md={6} xl={3}>
              <div className="feature-box text-center">
                <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                  Marketing Sections
                </h3>
                <p className="text-black-50 mb-3">
                  These can be used to build presentation websites in the same
                  consistent style like your application.
                </p>
              </div>
            </Grid>
            <Grid item md={6} xl={3}>
              <div className="feature-box text-center">
                <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                  Data Display
                </h3>
                <p className="text-black-50 mb-3">
                  We've built a plethora of component blocks that can be
                  composed to form new elements or sections.
                </p>
              </div>
            </Grid>
            <Grid item md={6} xl={3}>
              <div className="feature-box text-center">
                <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                  UI Widgets
                </h3>
                <p className="text-black-50 mb-3">
                  Interaction is important in all apps, this being the reason
                  we've built over 200 examples with the 80+ integrated widgets.
                </p>
              </div>
            </Grid>
            <Grid item md={6} xl={3}>
              <div className="feature-box text-center">
                <h3 className="font-size-xl font-weight-bold my-3 text-primary">
                  Forms Plugins
                </h3>
                <p className="text-black-50 mb-3">
                  Custom upload forms, multiple style sliders, tabs, accordions
                  - you'll get them all with this template.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={6} className="mt-4">
            <Grid item md={8} xl={5} className="d-flex align-items-center">
              <Card className="card-box mb-5 w-100 d-flex align-items-center">
                <div className="d-flex flex-column flex-grow-1 justify-content-center w-100">
                  <div className="card-header-alt d-flex justify-content-center px-4 pt-4 pb-2">
                    <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                      Email Marketing
                    </h6>
                  </div>
                  <div className="mx-auto">
                    <CircularProgressbarWithChildren
                      value={78}
                      strokeWidth={6}
                      className="m-3 circular-progress-xl circular-progress-warning">
                      <span className="text-warning font-size-xxl font-weight-normal">
                        78
                      </span>
                    </CircularProgressbarWithChildren>
                  </div>
                  <div className="px-5 mt-2">
                    <Grid
                      container
                      spacing={6}
                      className="text-black-50 font-size-sm">
                      <Grid
                        item
                        md={6}
                        className="d-flex justify-content-center">
                        <div>
                          <div className="d-flex p-1 align-items-center">
                            <div className="badge badge-success badge-circle mr-2">
                              success
                            </div>
                            <span className="d-20 w-auto">successful</span>
                          </div>
                          <div className="d-flex p-1 align-items-center">
                            <div className="badge badge-first badge-circle mr-2">
                              fail
                            </div>
                            <span className="d-20 w-auto">failed</span>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        item
                        md={6}
                        className="d-flex justify-content-center">
                        <div>
                          <div className="d-flex p-1 align-items-center">
                            <div className="badge badge-warning badge-circle mr-2">
                              success
                            </div>
                            <span className="d-20 w-auto">opened</span>
                          </div>
                          <div className="d-flex p-1 align-items-center">
                            <div className="badge badge-danger badge-circle mr-2">
                              fail
                            </div>
                            <span className="d-20 w-auto">reported</span>
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </div>
                  <div className="p-4">
                    <Button
                      fullWidth
                      className="btn-neutral-dark font-weight-bold text-uppercase font-size-sm hover-scale-sm">
                      Generate Report
                    </Button>
                  </div>
                </div>
              </Card>
            </Grid>
            <Grid item md={4} xl={3} className="d-flex align-items-center">
              <div className="py-2 py-xl-4">
                <div className="d-flex align-items-end flex-column">
                  <div className="feature-box">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <div className="display-4 text-primary font-weight-bold">
                        Circular Progress
                      </div>
                    </h3>
                    <p className="text-black-50 font-size-lg mb-0">
                      This is just one example of what comes packed in this
                      template.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={6}
            className="d-flex justify-content-end mt-4">
            <Grid item md={4} xl={3} className="d-flex align-items-center">
              <div className="py-2 py-xl-4">
                <div className="d-flex align-items-end flex-column">
                  <div className="feature-box text-right">
                    <h3 className="font-size-lg font-weight-bold my-3">
                      <div className="display-4 text-primary font-weight-bold">
                        Statistics
                      </div>
                    </h3>
                    <p className="text-black-50 font-size-lg mb-0">
                      Another example that comes built-in.
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item md={10} xl={7} className="d-flex align-items-center">
              <Card className="card-box bg-deep-sky w-100">
                <div className="card-header-alt d-flex justify-content-between p-4">
                  <div>
                    <h6 className="font-weight-bold font-size-lg mb-1 text-white">
                      Total Orders
                    </h6>
                    <p className="text-white-50 mb-0">
                      These are the order totals for last month
                    </p>
                  </div>
                  <div className="d-flex align-items-center">
                    <Button className="btn-link d-40 btn-icon text-white p-0 font-size-xl">
                      <FontAwesomeIcon
                        icon={['fas', 'ellipsis-h']}
                        className="font-size-lg"
                      />
                    </Button>
                  </div>
                </div>
                <div className="divider opacity-3" />
                <div className="bg-white-10 px-3 px-lg-5 py-2 m-0">
                  <Chart
                    options={chartHomepage4Options}
                    series={chartHomepage4Data}
                    type="line"
                    height={110}
                  />
                </div>
                <div className="divider opacity-3" />
                <div className="p-4 text-center">
                  <Grid container spacing={6}>
                    <Grid item md={4}>
                      <div className="mb-1 font-weight-bold font-size-xl text-white">
                        88%
                      </div>
                      <LinearProgress
                        variant="determinate"
                        className="bg-white-10 progress-constrained progress-bar-rounded progress-bar-success"
                        value={88}
                      />
                      <div className="text-white-50 pt-2">Sales</div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="mb-1 font-weight-bold font-size-xl text-white">
                        61%
                      </div>
                      <LinearProgress
                        variant="determinate"
                        className="bg-white-10 progress-constrained progress-bar-rounded progress-bar-warning"
                        value={61}
                      />
                      <div className="text-white-50 pt-2">Profiles</div>
                    </Grid>
                    <Grid item md={4}>
                      <div className="mb-1 font-weight-bold font-size-xl text-white">
                        53%
                      </div>
                      <LinearProgress
                        variant="determinate"
                        className="bg-white-10 progress-constrained progress-bar-rounded progress-bar-first"
                        value={53}
                      />
                      <div className="text-white-50 pt-2">Tickets</div>
                    </Grid>
                  </Grid>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
