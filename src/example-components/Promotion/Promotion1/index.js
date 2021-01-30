import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import clsx from 'clsx';

import {
  Table,
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Card,
  Menu,
  Container,
  MenuItem,
  Button,
  List,
  ListItem,
  TextField,
  FormControl,
  FormLabel,
  Divider,
  FormHelperText,
  Select, Dialog, Tooltip
} from '@material-ui/core';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import axios from 'axios';
import moment from 'moment';
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
    getPromotion(0);
    getPromotionlist();
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


  const [modal, setModal] = useState(false);
  const [pmlists, Setpmlists] = useState(null);
  const [procalpoint, setprocalpoint] = useState(null);
  const [procalpercentxopay, setprocalpercentxopay] = useState(null);
  const [procalpercentdf, setprocalpercentdf] = useState(null);
  const [proselect, setproselect] = useState(null);
  const toggleModal = (evals) => {
    setModal(!modal);
    setprocalpoint(evals.cal_point);
    setprocalpercentxopay(evals.cal_xo);
    setproselect(evals.systemid);
    setprocalpercentdf(evals.cal_cash);
  };

  const handleClickcancel = async () => {
    setModal(!modal);
  };
  const onchangesproductname = (event) => {
    setprocalpoint(event.target.value);
  };

  const onchangesname = (event) => {
    setprocalpercentdf(event.target.value);
  };
  const onchangesnamexo = (event) => {
    setprocalpercentxopay(event.target.value);
  };
  const handleClicksave = async () => {
    try {
      let payload = {
        point: procalpoint,
        cashdf: procalpercentdf,
        cashxo: procalpercentxopay,
        systemid: proselect
      };
      let headerss = {
        'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
      }; axios
        .post("https://dafarewards.com:7002/api/v1/postPromotionpm", payload, {
        })
        .then((res) => {
          setModal(!modal);
          getPromotion();
        }).catch((error) => {
          console.log(error)
        });
    }
    catch (error) {
      console.log(error)
    }

  };

  const clicksave = () => {

    if (values.point > 0 && systemlistcheck.length > 0) {
      var datestart = moment(selectedDate1).format('YYYY-MM-DD') + ' ' + moment(selectedTime1).format('HH:mm:ss')
      var dateend = moment(selectedDate2).format('YYYY-MM-DD') + ' ' + moment(selectedTime2).format('HH:mm:ss')

      try {
        let payload = {
          datestart: datestart,
          dateend: dateend,
          systemlist: systemlistcheck,
          cashofpoint: values.point,
          type: 1
        };
        let headerss = {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer BJg/py3PZDiHdJtHwZP6AGjlUYenY4LGtqT+Kd+3raNKSMhaWvK/Ngh7OzMv/lnklXQ7+yyrAsx5tOXBPIvsYw+Dx99Lk57Xmv1jjy+XjUb9fz0UrtQEVYDVF49wsMUvkN2Z1cMYzfvNHcRuLx92SwdB04t89/1O/w1cDnyilFU=',
        }; axios
          .post("https://dafarewards.com:7002/api/v1/postPromotion", payload, {

          })
          .then((res) => {
            window.location.reload(false);
          }).catch((error) => {
            console.log(error)

          });

      }
      catch (error) {
        console.log(error)
      }
    }
  };

  const getPromotion = (value) => {
    axios
      .post("https://dafarewards.com:7002/api/v1/getsystemlist", {
      })
      .then((res) => {
        Setpmlists(res.data.message);
      });
  };


  const getforlist = (value) => {
    var test = "";

    for (var i = 0; i < value.length; i++) {
      test += value[i].systemname + ", "
    }
    return test
  };

  const getPromotionlist = (value) => {
    axios
      .post("https://dafarewards.com:7002/api/v1/getpromotion", {
      })
      .then((res) => {
        console.log(res);
        promotionlist(res.data.message);
      });
  };

  const [promolists, promotionlist] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(
    new Date()
  );
  const [selectedDate2, setSelectedDate2] = useState(
    new Date()
  );
  const [selectedTime1, setSelectedTime1] = useState(
    new Date()
  );
  const [selectedTime2, setSelectedTime2] = useState(
    new Date()
  );
  const handleTimeChange1 = (Time) => {
    setSelectedTime1(Time);
  };
  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };

  const handleTimeChange2 = (Time) => {
    setSelectedTime2(Time);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const [systemlistcheck, systemlistcheck1] = useState([]);
  const Onchange = (e) => {
    var check = e.systemid
    var bool = true;
    for (var i = 0; i < systemlistcheck.length; i++) {
      if (systemlistcheck[i] === check) {
        bool = false
        systemlistcheck.pop(check)
      }
    }
    if (bool) systemlistcheck.push(check);
  };
  return (
    <>
      <Card className="card-box">
        <div className="p-4">
          <Card className="p-4">
            <div className="font-size-lg font-weight-bold">Promotion Management</div>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Divider className="my-4" />
                <div >
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
                  <br></br>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline1"
                      label="วันเริ่มต้น"
                      value={selectedDate1}
                      onChange={handleDateChange1}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker1"
                      label="เวลา"
                      value={selectedTime1}
                      onChange={handleTimeChange1}
                      KeyboardButtonProps={{
                        'aria-label': 'change time'
                      }}
                    />
                  </MuiPickersUtilsProvider>
                  <br></br>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline2"
                      label="วันสิ้นสุด"
                      value={selectedDate2}
                      onChange={handleDateChange2}
                      KeyboardButtonProps={{
                        'aria-label': 'change date'
                      }}
                    />
                    <KeyboardTimePicker
                      margin="normal"
                      id="time-picker2"
                      label="เวลา"
                      value={selectedTime2}
                      onChange={handleTimeChange2}
                      KeyboardButtonProps={{
                        'aria-label': 'change time'
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>

                <Table className="table table-alternate-spaced mb-0">
                  <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
                    <tr>
                      <th className="text-left px-4"> </th>
                      <th className="text-left">SystemID</th>
                      <th className="text-left px-4">PM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(pmlists == null) ? <tr><td></td></tr> : pmlists.map(listitem => (
                      <React.Fragment key={listitem.systemid}>
                        <tr key={listitem.systemid}>
                          <td className="text-center text-black-50">
                            <FormControlLabel
                              onChange={(e) => Onchange(listitem)}
                              control={<Checkbox name="checked" />}
                              id={listitem.systemid}
                              className="ml-3"
                            />
                          </td>
                          <td className="text-center">
                            <div className="d-flex align-items-center">
                              <div>
                                <span className="text-black-50-his d-block-his">
                                  #{listitem.systemid}
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="font-size-lg font-weight-bold">
                            <div className="d-flex align-items-center">
                              <div>
                                <span className="text-black-50-his d-block-his">
                                  {listitem.systemname}
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
                <div className="text-right">
                  <Button style={{ marginTop: "7px" }}
                    onClick={() => clicksave('cash')}
                    size="large"
                    className="btn-neutral-primary ml-4 ">
                    Save
                 </Button>
                </div>
              </Grid>

            </Grid>
          </Card>
        </div>
        <div className="divider" />
        <div className="pt-4 px-4">
          <div className="font-size-lg font-weight-bold">Promotion List</div>
          <br></br>
          <Table className="table table-alternate-spaced mb-0">
            <thead className="thead-light text-capitalize font-size-sm font-weight-bold">
              <tr>
                <th className="text-left">SystemID</th>
                <th className="text-left px-4">Date/Time Start</th>
                <th className="text-left px-4">Date/Time End</th>
                <th className="text-left px-4">Cash of point</th>
                <th className="text-left px-4">PM</th>
                <th className="text-left px-4">Status</th>
                <th className="text-left px-4">Option</th>
              </tr>
            </thead>
            <tbody>
              {(promolists == null) ? <tr><td></td></tr> : promolists.map(listitem => (
                <React.Fragment key={listitem.no}>
                  <tr key={listitem.no}>
                    <td className="text-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            #{listitem.no}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {moment(listitem.Datestart).format('YYYY-MM-DD HH:mm:ss')}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {moment(listitem.DateEnd).format('YYYY-MM-DD HH:mm:ss')}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {listitem.PointCal}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {
                              getforlist(listitem.systemlist)
                            }
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {(listitem.Status !== 1) ? "Disable" : "Enable"}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td className="text-right">
                      <Button className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button
                        className="btn-warning mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'trash-alt']}
                          className="font-size-sm"
                        />
                      </Button>

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
