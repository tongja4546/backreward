import React from 'react';

import { Table, Grid, Card, Button } from '@material-ui/core';

import PerfectScrollbar from 'react-perfect-scrollbar';
import CountUp from 'react-countup';
import Chart from 'react-apexcharts';

import { NavLink } from 'react-router-dom';

import product1 from '../../../assets/images/stock-products/product-4.png';
import product2 from '../../../assets/images/stock-products/product-5.png';
import product3 from '../../../assets/images/stock-products/product-6.png';
import product4 from '../../../assets/images/stock-products/product-3.png';

export default function LivePreviewExample() {
  const chartDashboard3Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    colors: ['#3c44b1', 'rgba(60, 68, 177, 0.27)'],
    fill: {
      opacity: 1
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    legend: {
      show: false
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartDashboard3Data = [
    {
      name: 'Net Profit',
      data: [3.3, 3.1, 4.0, 5.8, 2.1, 3.6, 3.2]
    },
    {
      name: 'Net Loss',
      data: [2.1, 2.1, 2.8, 2.8, 4.3, 2.7, 1.4]
    }
  ];

  return (
    <>
      <Grid container spacing={6}>
        <Grid item lg={5}>
          <div className="d-flex mb-4 align-items-center justify-content-between">
            <div className="font-size-xxl font-weight-bold">Top Selling</div>
            <div>
              <Button
                component={NavLink}
                to="/Transactions"
                className="btn-first"
                size="small">
                View all
              </Button>
            </div>
          </div>
          <Card className="shadow-xxl px-3 mb-5">
            <div className="scroll-area-xl shadow-overflow pt-3">
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                <Table className="table table-hover table-borderless text-left text-nowrap table-alternate mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product1}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Macbook Laptop</div>
                                <div className="badge font-weight-normal text-warning badge-neutral-warning">
                                  Pending
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$2,157</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product2}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Apple iPhone</div>
                                <div className="badge font-weight-normal text-success badge-neutral-success">
                                  Completed
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$1,573</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product3}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Macbook Laptop</div>
                                <div className="badge font-weight-normal text-warning badge-neutral-warning">
                                  Pending
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$2,157</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product4}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Apple iPhone</div>
                                <div className="badge font-weight-normal text-success badge-neutral-success">
                                  Completed
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$1,573</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product4}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Desktop PC</div>
                                <div className="badge font-weight-normal text-success badge-neutral-success">
                                  Completed
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$639</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product1}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Apple Watch</div>
                                <div className="badge font-weight-normal text-danger badge-neutral-danger">
                                  Failed
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$852</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product2}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Macbook Laptop</div>
                                <div className="badge font-weight-normal text-warning badge-neutral-warning">
                                  Pending
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$2,157</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product3}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Apple iPhone</div>
                                <div className="badge font-weight-normal text-success badge-neutral-success">
                                  Completed
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$1,573</div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="font-size-lg bg-secondary rounded-sm mr-3">
                            <img
                              alt="..."
                              className="card-img-top rounded-sm"
                              src={product4}
                              style={{ width: 80 }}
                            />
                          </div>
                          <div>
                            <div className="d-flex font-weight-bold text-black">
                              <span>
                                <div>Macbook Laptop</div>
                                <div className="badge font-weight-normal text-warning badge-neutral-warning">
                                  Pending
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <div className="font-weight-bold">$2,157</div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </PerfectScrollbar>
            </div>
          </Card>
        </Grid>
        <Grid item lg={7}>
          <div className="d-flex mb-4 align-items-center justify-content-between">
            <div className="font-size-xxl font-weight-bold">Reports</div>
          </div>
          <Card className="shadow-xxl mb-5 text-center">
            <h3 className="mb-0 display-3 mt-4 font-weight-bold">
              $
              <span className="pr-1">
                <CountUp
                  start={0}
                  end={458.695}
                  duration={4}
                  separator=""
                  delay={3}
                  decimals={3}
                  decimal=","
                  prefix=""
                  suffix=""
                />
              </span>
            </h3>
            <div className="divider my-4" />
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <span className="opacity-6 pb-2">Current month</span>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-weight-bold font-size-lg">
                    <small className="opacity-6 pr-1">$</small>
                    46,362
                  </span>
                  <div className="badge badge-neutral-danger ml-2 text-danger">
                    -8%
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <span className="opacity-6 pb-2">Last month</span>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="font-weight-bold font-size-lg">
                    <small className="opacity-6 pr-1">$</small>
                    34,546
                  </span>
                  <div className="badge badge-neutral-success text-success ml-2">
                    +13%
                  </div>
                </div>
              </Grid>
            </Grid>
            <div className="divider my-4" />
            <div>
              <Chart
                options={chartDashboard3Options}
                series={chartDashboard3Data}
                type="bar"
                height={365}
              />
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
