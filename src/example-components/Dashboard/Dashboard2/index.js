import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card, Button } from '@material-ui/core';

import Chart from 'react-apexcharts';

export default function LivePreviewExample() {
  const chartDashboard2AOptions = {
    stroke: {
      curve: 'smooth',
      width: [0, 4]
    },
    chart: {
      toolbar: {
        show: false
      }
    },
    colors: ['rgba(60, 68, 177, 0.3)', '#3c44b1'],
    fill: {
      opacity: 1
    },
    labels: [
      '01 Aug 2020',
      '02 Aug 2020',
      '03 Aug 2020',
      '04 Aug 2020',
      '05 Aug 2020',
      '06 Aug 2020',
      '07 Aug 2020',
      '08 Aug 2020',
      '09 Aug 2020',
      '10 Aug 2020',
      '11 Aug 2020',
      '12 Aug 2020'
    ],
    xaxis: {
      type: 'datetime'
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: '5',
      borderColor: 'rgba(125, 138, 156, 0.3)'
    },
    legend: {
      show: false
    }
  };
  const chartDashboard2AData = [
    {
      name: 'Income',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
    },
    {
      name: 'Expenses',
      type: 'line',
      data: [231, 442, 335, 227, 433, 222, 117, 316, 242, 252, 162, 176]
    }
  ];

  const chartDashboard2BOptions = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: 'rounded',
        endingShape: 'rounded',
        columnWidth: '60%'
      }
    },
    colors: ['#1bc943'],
    fill: {
      opacity: 1
    },
    stroke: {
      color: '#1bc943',
      width: 3
    },
    legend: {
      show: false
    },
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartDashboard2BData = [
    {
      name: 'Orders',
      data: [47, 38, 56, 24, 43, 24, 56, 56, 24, 65]
    }
  ];

  const chartDashboard2COptions = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: 'rounded',
        endingShape: 'rounded',
        columnWidth: '60%'
      }
    },
    colors: ['#f83245'],
    fill: {
      opacity: 1
    },
    stroke: {
      color: '#f83245',
      width: 3
    },
    legend: {
      show: false
    },
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 0
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chartDashboard2CData = [
    {
      name: 'Orders',
      data: [38, 43, 24, 56, 43, 24, 56, 35, 56, 65]
    }
  ];

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xl={5}>
          <Card className="shadow-xxl border-success card-box-border-bottom mb-5 rounded">
            <div className="card-tr-actions">
              <Button
                variant="text"
                className="p-0 d-30 border-0 btn-transition-none text-dark"
                disableRipple>
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="p-4 text-left">
              <div className="display-4 text-success font-weight-bold">
                $33.485
              </div>
              <div className="font-size-lg font-weight-bold text-black">
                Income
              </div>
            </div>
            <div className="rounded-bottom overflow-hidden">
              <Chart
                options={chartDashboard2BOptions}
                series={chartDashboard2BData}
                type="area"
                height={110}
              />
            </div>
          </Card>
          <Card className="shadow-xxl border-danger card-box-border-bottom rounded">
            <div className="card-tr-actions">
              <Button
                variant="text"
                className="p-0 d-30 border-0 btn-transition-none text-dark"
                disableRipple>
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </Button>
            </div>
            <div className="p-4 text-left">
              <div className="display-4 text-danger font-weight-bold">
                $71.684
              </div>
              <div className="font-size-lg font-weight-bold text-black">
                Expenses
              </div>
            </div>
            <div className="rounded-bottom overflow-hidden">
              <Chart
                options={chartDashboard2COptions}
                series={chartDashboard2CData}
                type="area"
                height={110}
              />
            </div>
          </Card>
        </Grid>
        <Grid item xl={7}>
          <Card className="shadow-xxl mb-5">
            <div className="p-4">
              <div className="p-2">
                <h6 className="font-weight-bold font-size-xl mb-1 text-black">
                  Monthly Financial Status
                </h6>
                <p className="text-black-50 font-size-lg mb-0">
                  Check how you're doing financially for current month
                </p>
              </div>
            </div>
            <div className="divider" />
            <div>
              <Chart
                options={chartDashboard2AOptions}
                series={chartDashboard2AData}
                type="line"
                height={255}
              />
            </div>
            <div className="divider bg-dark opacity-1" />
            <div className="card-footer p-4 bg-secondary text-center">
              <Button className="btn-primary px-5">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'download']} />
                </span>
                <span className="btn-wrapper--label">Create Report</span>
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
