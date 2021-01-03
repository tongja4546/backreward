import React from 'react';

import { Grid, Container } from '@material-ui/core';

import crypto from '../../../assets/images/apps/crypto-app-material-ui-pro.jpg';
import messenger from '../../../assets/images/apps/messenger-app-material-ui-pro.jpg';
import commerce from '../../../assets/images/apps/commerce-app-material-ui-pro.jpg';
import general from '../../../assets/images/apps/admin-dashboard-material-ui-pro.jpg';

import hero1 from '../../../assets/images/hero-bg/hero-4.jpg';

export default function LivePreviewExample() {
  return (
    <>
      <div className="hero-wrapper bg-sunrise-purple bg-composed-wrapper">
        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image opacity-4"
            style={{ backgroundImage: 'url(' + hero1 + ')' }}
          />
          <div className="bg-composed-wrapper--bg bg-second opacity-7" />
          <div className="bg-composed-wrapper--content align-self-center p-4 p-xl-5">
            <Container className="pb-5 py-lg-5 text-center">
              <div className="mb-4">
                <div className="badge badge-success mb-3 h-auto py-2 px-4 font-size-xs badge-pill font-weight-normal">
                  Included
                </div>
                <h4 className="font-weight-bold text-white display-3">
                  Individual Applications
                </h4>
                <Grid item md={11} lg={10} className="mx-auto">
                  <p className="text-white opacity-6 mt-3 mb-5 font-size-xxl">
                    This template comes with included individual applications,
                    making it easy to start with something closer to your
                    project requirements
                  </p>
                </Grid>
              </div>
              <Grid container spacing={6}>
                <Grid item md={6}>
                  <a
                    href="https://demo.uifort.com/Reward-react-admin-dashboard-material-ui-pro-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card modal-content card-box-hover-rise rounded-lg bg-transparent">
                    <img
                      src={general}
                      className="rounded-lg img-fluid"
                      alt="..."
                    />
                  </a>
                  <p className="text-white font-weight-bold font-size-xxl pt-3 mb-3">
                    General
                  </p>
                </Grid>

                <Grid item md={6}>
                  <a
                    href="https://demo.uifort.com/Reward-react-crypto-application-material-ui-pro-demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card modal-content card-box-hover-rise rounded-lg bg-transparent">
                    <img
                      src={crypto}
                      className="rounded-lg img-fluid"
                      alt="..."
                    />
                  </a>
                  <p className="text-white font-weight-bold font-size-xxl pt-3 mb-3">
                    Crypto
                  </p>
                </Grid>
                <Grid item md={6}>
                  <a
                    href="https://demo.uifort.com/Reward-react-messenger-application-material-ui-pro-demo"
                    className="card modal-content card-box-hover-rise rounded-lg bg-transparent">
                    <img
                      src={messenger}
                      className="rounded-lg img-fluid"
                      alt="..."
                    />
                  </a>
                  <p className="text-white font-weight-bold font-size-xxl pt-3 mb-3">
                    Messenger
                  </p>
                </Grid>
                <Grid item md={6}>
                  <div className="card shadow-sm-dark rounded-lg bg-transparent">
                    <div className="card-img-wrapper">
                      <div className="card-badges card-badges-bottom">
                        <div className="badge badge-pill h-auto py-1 px-3 badge-success shadow-xxl">
                          Active
                        </div>
                      </div>
                      <img
                        src={commerce}
                        className="rounded-lg img-fluid"
                        alt="..."
                      />
                    </div>
                  </div>
                  <p className="text-white font-weight-bold font-size-xxl pt-3 mb-3">
                    Commerce
                  </p>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}
