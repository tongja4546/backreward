import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Container, Card, Button } from '@material-ui/core';

import particles3 from '../../../assets/images/hero-bg/particles-3.svg';
import hero7 from '../../../assets/images/hero-bg/hero-7.jpg';

import product1 from '../../../assets/images/stock-products/product-4.png';
import product2 from '../../../assets/images/stock-products/product-5.png';
import product3 from '../../../assets/images/stock-products/product-6.png';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-white bg-composed-wrapper">
        <div className="hero-wrapper--content">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
            style={{ backgroundImage: 'url(' + particles3 + ')' }}
          />
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-6"
            style={{ backgroundImage: 'url(' + hero7 + ')' }}
          />
          <div className="bg-composed-wrapper--content">
            <Container className="py-4 py-xl-5">
              <Grid
                item
                md={10}
                lg={8}
                xl={6}
                className="py-5 mt-5 mx-auto text-white text-center">
                <div className="badge badge-success mb-3 px-4 h-auto py-2 font-size-xs badge-pill">
                  Products
                </div>
                <h4 className="font-weight-bold text-black display-3">
                  Trusted by thousands of professionals
                </h4>
                <p className="text-black opacity-6 mt-3 mb-5 font-size-xxl">
                  Our services have been used and reviewed by thousands of
                  people
                </p>
              </Grid>
              <Grid container spacing={6} className="pb-5">
                <Grid item lg={4}>
                  <Card className="d-flex flex-column card-box text-center mb-5">
                    <div className="card-tr-actions">
                      <Button
                        className="p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-danger"
                        variant="outlined">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-sm"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3">
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
                  <Card className="d-flex flex-column card-box text-center mb-5">
                    <div className="card-tr-actions">
                      <Button
                        className="p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-danger"
                        variant="outlined">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-sm"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3">
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
                  <Card className="d-flex flex-column card-box text-center mb-5">
                    <div className="card-tr-actions">
                      <Button
                        className="p-0 d-30 btn-transition-none border-0 btn-pill btn-animated-icon-sm btn-outline-danger"
                        variant="outlined">
                        <FontAwesomeIcon
                          icon={['far', 'heart']}
                          className="font-size-sm"
                        />
                      </Button>
                    </div>
                    <Card className="card-transparent mx-auto hover-scale-sm mt-3">
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
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
