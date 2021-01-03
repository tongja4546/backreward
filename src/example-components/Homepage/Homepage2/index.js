import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import Slider from 'react-slick';
import Chart from 'react-apexcharts';

import product1 from '../../../assets/images/stock-products/product-4.png';
import product2 from '../../../assets/images/stock-products/product-5.png';
import product3 from '../../../assets/images/stock-products/product-6.png';
import product4 from '../../../assets/images/stock-products/product-3.png';

import LocalActivityIcon from '@material-ui/icons/LocalActivity';

export default function LivePreviewExample() {
  function SliderArrowNext(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={['fas', 'chevron-right']} />
      </div>
    );
  }

  function SliderArrowPrev(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FontAwesomeIcon icon={['fas', 'chevron-left']} />
      </div>
    );
  }

  const homepage2Carousel = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SliderArrowNext />,
    prevArrow: <SliderArrowPrev />
  };

  const chartsHomepage2Options = {
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
    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 2
    },
    colors: ['#1bc943'],
    fill: {
      color: '#1bc943',
      opacity: 0.1,
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.3,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100]
      }
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
  const chartsHomepage2Data = [
    {
      name: 'Net Profit',
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2]
    }
  ];

  return (
    <>
      <div className="z-over py-5">
        <Container className="pb-3 pb-xl-5">
          <Grid container spacing={6}>
            <Grid
              item
              xl={6}
              className="d-none d-xl-flex justify-content-center align-items-center">
              <Card className="shadow-xxl mr-xl-5">
                <div className="d-block">
                  <Slider {...homepage2Carousel} className="slider-arrows-dark">
                    <div>
                      <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center mb-4">
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
                    </div>
                    <div>
                      <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center mb-4">
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
                    </div>
                    <div>
                      <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center mb-4">
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
                    </div>
                    <div>
                      <Card className="card-transparent mx-auto hover-scale-sm d-flex align-items-center justify-content-center mb-4">
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
                    </div>
                  </Slider>
                </div>
                <div className="px-4 pt-2 pb-4 position-relative d-flex justify-content-center">
                  <div className="card-tr-actions">
                    <Button className="p-0 font-size-xl text-danger">
                      <FontAwesomeIcon
                        icon={['far', 'heart']}
                        className="font-size-lg text-danger"
                      />
                    </Button>
                  </div>
                  <div>
                    <div className="font-weight-bold font-size-xl">
                      Apple Macbook Pro
                    </div>
                    <div className="d-flex align-items-center justify-content-center pt-2">
                      <div className="d-30 rounded-pill border-success border-1 btn-icon font-size-xs bg-neutral-success text-success mr-2">
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
                <div className="pt-1">
                  <Chart
                    options={chartsHomepage2Options}
                    series={chartsHomepage2Data}
                    type="area"
                    height={80}
                  />
                </div>
                <div className="px-4 pb-4">
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
                        <div className="text-black-50 font-size-xs">orders</div>
                      </div>
                      <div className="pl-4">
                        <div className="font-weight-bold">39,2k</div>
                        <div className="text-black-50 font-size-xs">
                          pageviews
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divider" />
                <div className="p-4 text-center">
                  <LocalActivityIcon className="text-first" />
                  <span className="text-black-50 pl-2 font-size-sm">
                    This product has increased social media activity
                  </span>
                </div>
              </Card>
            </Grid>
            <Grid item xl={6}>
              <div className="py-0 pb-5 py-xl-5">
                <div className="pr-0 pr-xl-5">
                  <h1 className="display-3 mb-3 font-weight-bold">
                  Reward
                  </h1>
                  <p className="font-size-lg text-black-50">
                    All components from the General dashboard template can be
                    used in the individual applications pages, without
                    modifications.
                  </p>
                </div>
                <div className="d-block mt-4">
                  <Grid container spacing={6} className="mt-4">
                    <Grid item sm={6}>
                      <div className="text-primary d-flex align-items-center mb-3">
                        <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'check']}
                            className="font-size-sm"
                          />
                        </div>
                        <span className="pt-1">300+ Components</span>
                      </div>
                      <div className="text-primary d-flex align-items-center">
                        <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'check']}
                            className="font-size-sm"
                          />
                        </div>
                        <span className="pt-1">UI Kit Included</span>
                      </div>
                    </Grid>
                    <Grid item sm={6}>
                      <div className="text-primary d-flex align-items-center mb-3">
                        <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'check']}
                            className="font-size-sm"
                          />
                        </div>
                        <span className="pt-1">Unlimited Options</span>
                      </div>
                      <div className="text-primary d-flex align-items-center">
                        <div className="d-30 rounded-pill btn-icon bg-neutral-primary mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'check']}
                            className="font-size-sm"
                          />
                        </div>
                        <span className="pt-1">Multiple Apps</span>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
