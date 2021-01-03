import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Card } from '@material-ui/core';

import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-midnight-bloom p-3 mb-5">
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
                <div className="text-white font-weight-bold">Orders</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  <CountUp
                    start={0}
                    end={54}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
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
                <div className="text-white font-weight-bold">Visitors</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  <CountUp
                    start={0}
                    end={748}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={0}
                    decimal=","
                  />
                </div>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item md={6} xl={3}>
          <Card className="card-box bg-deep-sky p-3 mb-5">
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
                <div className="text-white font-weight-bold">Income</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  $
                  <CountUp
                    start={0}
                    end={134.75}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={2}
                    decimal=","
                  />
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
                <div className="text-white font-weight-bold">Expenses</div>
                <div className="display-4 font-weight-bold pt-2 text-white">
                  $
                  <CountUp
                    start={0}
                    end={3.496}
                    duration={6}
                    delay={2}
                    separator=""
                    decimals={3}
                    decimal=","
                  />
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
