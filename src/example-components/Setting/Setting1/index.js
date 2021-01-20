import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import clsx from 'clsx';

import {
  Grid,
  Table,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Button,
  Card,
  TextField,
  FormControl,
  FormHelperText,
  Divider
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import moment from 'moment';

import { makeStyles } from '@material-ui/core/styles';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import Provinces from "../../../data/provinces.json";
import Zipcodes from "../../../data/zipcodes.json";
import Amphures from "../../../data/amphures.json";
import Districts from "../../../data/districts.json";
import NumberFormat from 'react-number-format';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  margin: {
    margin: theme.spacing(1)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  }
}));

export default function LivePreviewExample() {

  const classes = useStyles();

  const [values, setValues] = useState({
    point: 0.00,
    cash: 0.00,
  });

  useEffect(() => {
    getSetting(0);
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const clicksave = () => {
    try {
      let payload = {
        cash: values.cash,
        point: values.point
      };
      let headerss = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
      }; axios
        .post("https://dafarewards.com:7002/api/v1/postsetting", payload, {
        })
        .then((res) => {
        }).catch((error) => {
          console.log(error)
        });
    }
    catch (error) {
      console.log(error)
    }

  };

  const [gamelists, Setgamelist] = useState(null);

  const getSetting = (value) => {
    axios
      .get("https://dafarewards.com:7002/api/v1/getsetting", {
      })
      .then((res) => {
        setValues({
          ...values, 'cash': res.data.message.cash
          , 'point': res.data.message.point
        }
        );
      });
  };

  return (
    <>
      <Card className="card-box">
        <div className="p-4">
          <Grid item xs={12} lg={6}>
            <Card className="p-4 mb-4">
              <div className="font-size-lg font-weight-bold">Setting Point</div>
              <Divider className="my-4" />
              <div>
                <TextField
                  label="Point of cash"
                  id="filled-start-adornment"
                  value={values.point}
                  onChange={handleChange('point')}
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Point</InputAdornment>
                    )
                  }}
                  variant="filled"
                />
                <FormControl
                  className={clsx(classes.margin, classes.textField)}
                  variant="filled">
                  <FilledInput
                    id="filled-adornment-weight"
                    value={values.cash}
                    onChange={handleChange('cash')}
                    endAdornment={
                      <InputAdornment position="end">฿</InputAdornment>
                    }
                    aria-describedby="filled-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight'
                    }}
                  />
                  <FormHelperText id="filled-weight-helper-text">
                    Bath
                </FormHelperText>
                </FormControl>
                <Button style={{ marginTop: "7px" }}
                  onClick={() => clicksave('cash')}
                  size="large"
                  className="btn-neutral-primary ml-4">
                  Save
                 </Button>
              </div>
            </Card>
          </Grid>
        </div>
        <div className="divider" />
        <div className="pt-4 px-4">
          <Table className="table table-alternate-spaced mb-0">
            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
              <tr>
                <th className="text-left">Date/Time</th>
                <th className="text-left px-4">TxnID</th>
                <th className="text-left px-4">PlayerID</th>
                <th className="text-left px-4">PM</th>
                <th className="text-left px-4">REFID</th>
                <th className="text-left">Detail </th>
                <th className="text-left px-4">Debit</th>
                <th className="text-left px-4">Credit</th>
                <th className="text-left px-4">Balnce</th>
              </tr>
            </thead>
            <tbody>
              {(gamelists == null) ? <tr><td></td></tr> : gamelists.map(listitem => (
                <React.Fragment key={listitem.orderid}>
                  <tr key={listitem.orderid}>
                    <td className="text-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {moment(listitem.DateUpdate).format('YYYY-MM-DD HH:mm:ss')}
                          </span>
                        </div>
                      </div>

                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            #{listitem.TxnID}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {listitem.playerid}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            #{listitem.systemname}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            #{listitem.refkey}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="font-weight-bold">{listitem.typename} { <NumberFormat value={listitem.cash} displayType={'text'} thousandSeparator={true} />}</span>
                    </td>
                    <td>
                      <span className={(listitem.state === 1) ? "text-black-50-his d-block-his green" : "text-black-50-his d-block-his red"} >
                        {(listitem.state === 2) ? "" : + listitem.fee + "  บาท"}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className={(listitem.state === 1) ? "text-black-50-his d-block-his green" : "text-black-50-his d-block-his red"} >
                            {(listitem.state === 1) ? "" : + listitem.cafeesh + "  บาท"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className={"text-black-50-his d-block-his"} >
                            <NumberFormat value={listitem.balance} displayType={'text'} thousandSeparator={true} />  บาท
                                                                                </span>
                        </div>
                      </div>
                    </td>

                  </tr>
                  <tr className="divider"></tr>
                </React.Fragment>
              ))}
              {/* <tr className="divider"></tr> */}

            </tbody>
          </Table>
        </div>
     
        <div className="mt-3" />
      </Card>
    </>
  );
}
