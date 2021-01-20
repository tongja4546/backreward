import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';

import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import CountUp from 'react-countup';
import axios from 'axios';
import NumberFormat from 'react-number-format';
export default function LivePreviewExample() {

  useEffect(() => {
    getbalance(0);
  }, []);

  const [Balance, Setbalance] = useState([]);
  const [redeempending, Setredeempending] = useState(null);
  const [redeemapporve, Setredeemapporve] = useState(null);
  const [redeemcencel, Setredeemcencel] = useState(null);
  const [redeemdeliver, Setredeemdeliver] = useState(null);
  const [redeemprocess, Setredeemprocess] = useState(null);
  const getbalance = (value) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/getbalance", {
        params: {
          system: 'dafabet',
          systemname:'PointDF'
        }
      })
      .then((res) => {
        Setbalance(res.data.message)
        Setredeempending(res.data.message.totalredeem[1].balance)
        Setredeemapporve(res.data.message.totalredeem[2].balance)
        Setredeemcencel(res.data.message.totalredeem[0].balance)
        Setredeemdeliver(res.data.message.totalredeem[4].balance)
        Setredeemprocess(res.data.message.totalredeem[3].balance)

      });
  };

  return (

    <>
      <div className="app-page-title" >  <h1>Reward Status</h1> </div>

      <Grid container spacing={6}>

        <Grid item md={6} xl={3}>
          <Card className="card-box bg-midnight-bloom p-3 mb-5">
            <a href="/Transactions/1">
              <div className="d-flex align-items-center">
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    textColor: 'var(--white)',
                    pathColor: 'rgba(255,255,255,.95)',
                    trailColor: 'rgba(255,255,255,.1)'
                  })}
                  value={56}
                  strokeWidth={6}
                  className="circular-progress-success">
                  <div className="d-40 rounded-circle bg-white-10 btn-icon">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-lg text-white"
                    />
                  </div>
                </CircularProgressbarWithChildren>
                <div className="pl-3">
                  <div className="text-white font-weight-bold">Pending</div>
                  <div className="display-4 font-weight-bold pt-2 text-white">
                    <NumberFormat value={redeempending} displayType={'text'} thousandSeparator={true} />
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Grid>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-midnight-bloom p-3 mb-5">
            <a href="/Transactions/2">
              <div className="d-flex align-items-center">
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    textColor: 'var(--white)',
                    pathColor: 'rgba(255,255,255,.95)',
                    trailColor: 'rgba(255,255,255,.1)'
                  })}
                  value={56}
                  strokeWidth={6}
                  className="circular-progress-success">
                  <div className="d-40 rounded-circle bg-white-10 btn-icon">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-lg text-white"
                    />
                  </div>
                </CircularProgressbarWithChildren>
                <div className="pl-3">
                  <div className="text-white font-weight-bold">Apporve</div>
                  <div className="display-4 font-weight-bold pt-2 text-white">
                    <NumberFormat value={redeemapporve} displayType={'text'} thousandSeparator={true} />
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Grid>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-midnight-bloom p-3 mb-5">
            <a href="/Transactions/3">
              <div className="d-flex align-items-center">
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    textColor: 'var(--white)',
                    pathColor: 'rgba(255,255,255,.95)',
                    trailColor: 'rgba(255,255,255,.1)'
                  })}
                  value={56}
                  strokeWidth={6}
                  className="circular-progress-success">
                  <div className="d-40 rounded-circle bg-white-10 btn-icon">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-lg text-white"
                    />
                  </div>
                </CircularProgressbarWithChildren>
                <div className="pl-3">
                  <div className="text-white font-weight-bold">Procesing</div>
                  <div className="display-4 font-weight-bold pt-2 text-white">
                    <NumberFormat value={redeemprocess} displayType={'text'} thousandSeparator={true} />
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Grid>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-midnight-bloom p-3 mb-5">
            <a href="/Transactions/4">
              <div className="d-flex align-items-center">
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    textColor: 'var(--white)',
                    pathColor: 'rgba(255,255,255,.95)',
                    trailColor: 'rgba(255,255,255,.1)'
                  })}
                  value={56}
                  strokeWidth={6}
                  className="circular-progress-success">
                  <div className="d-40 rounded-circle bg-white-10 btn-icon">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-lg text-white"
                    />
                  </div>
                </CircularProgressbarWithChildren>
                <div className="pl-3">
                  <div className="text-white font-weight-bold">Deliver</div>
                  <div className="display-4 font-weight-bold pt-2 text-white">
                    <NumberFormat value={redeemdeliver} displayType={'text'} thousandSeparator={true} />
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Grid>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-midnight-bloom p-3 mb-5">
            <a href="/Transactions/0">
              <div className="d-flex align-items-center">
                <CircularProgressbarWithChildren
                  styles={buildStyles({
                    textColor: 'var(--white)',
                    pathColor: 'rgba(255,255,255,.95)',
                    trailColor: 'rgba(255,255,255,.1)'
                  })}
                  value={56}
                  strokeWidth={6}
                  className="circular-progress-success">
                  <div className="d-40 rounded-circle bg-white-10 btn-icon">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="font-size-lg text-white"
                    />
                  </div>
                </CircularProgressbarWithChildren>
                <div className="pl-3">
                  <div className="text-white font-weight-bold">Cancel</div>
                  <div className="display-4 font-weight-bold pt-2 text-white">
                    <NumberFormat value={redeemcencel} displayType={'text'} thousandSeparator={true} />
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </Grid>

      </Grid>

      <div className="app-page-title" >  <h1>Point</h1></div>
      <Grid container spacing={6}>

        <Grid item md={6} xl={3}>
          <Card className="card-box bg-deep-sky p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  textColor: 'var(--white)',
                  pathColor: 'rgba(255,255,255,.95)',
                  trailColor: 'rgba(255,255,255,.1)'
                })}
                value={68}
                strokeWidth={6}
                className="circular-progress-success">
                <div className="d-40 rounded-circle bg-white-10 btn-icon">
                  <FontAwesomeIcon
                    icon={['fas', 'dollar-sign']}
                    className="font-size-lg text-white"
                  />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-white font-weight-bold">Deposit Fee </div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  <NumberFormat value={Balance.balancedf} displayType={'text'} thousandSeparator={true} />
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-royal p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  textColor: 'var(--white)',
                  pathColor: 'rgba(255,255,255,.95)',
                  trailColor: 'rgba(255,255,255,.1)'
                })}
                value={34}
                strokeWidth={6}
                className="circular-progress-success">
                <div className="d-40 rounded-circle bg-white-10 btn-icon">
                  <FontAwesomeIcon
                    icon={['far', 'user-circle']}
                    className="font-size-lg text-white"
                  />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-white font-weight-bold">Game Fee</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  <NumberFormat value={Balance.Pointgamefee} displayType={'text'} thousandSeparator={true} />
                </div>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={6} xl={3}>
          <Card className="card-box bg-premium-dark p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  textColor: 'var(--white)',
                  pathColor: 'rgba(255,255,255,.95)',
                  trailColor: 'rgba(255,255,255,.1)'
                })}
                value={76}
                strokeWidth={6}
                className="circular-progress-success">
                <div className="d-40 rounded-circle bg-white-10 btn-icon">
                  <FontAwesomeIcon
                    icon={['fas', 'dollar-sign']}
                    className="font-size-lg text-white"
                  />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-white font-weight-bold">Point Today</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  <NumberFormat value={Balance.PointToday} displayType={'text'} thousandSeparator={true} />
                </div>
              </div>
            </div>
          </Card>
        </Grid>

        <Grid item md={6} xl={3}>
          <Card className="card-box bg-plum-plate p-3 mb-5">
            <div className="d-flex align-items-center">
              <CircularProgressbarWithChildren
                styles={buildStyles({
                  textColor: 'var(--white)',
                  pathColor: 'rgba(255,255,255,.95)',
                  trailColor: 'rgba(255,255,255,.1)'
                })}
                value={21}
                strokeWidth={6}
                className="circular-progress-success">
                <div className="d-40 rounded-circle bg-white-10 btn-icon">
                  <FontAwesomeIcon
                    icon={['fas', 'dollar-sign']}
                    className="font-size-lg text-white"
                  />
                </div>
              </CircularProgressbarWithChildren>
              <div className="pl-3">
                <div className="text-white font-weight-bold">Point Total</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  <NumberFormat value={Balance.PointTotal} displayType={'text'} thousandSeparator={true} />
                </div>
              </div>
            </div>
          </Card>
        </Grid>

      </Grid>
      <div className="app-page-title" >  <h1>TXN</h1></div>
    </>
  );
}
