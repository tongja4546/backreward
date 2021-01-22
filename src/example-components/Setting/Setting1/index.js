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
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import axios from 'axios';
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
        .post("https://dafarewards.com:7002/api/v1/postsettingpm", payload, {
        })
        .then((res) => {
          setModal(!modal);
          getSetting();
        }).catch((error) => {
          console.log(error)
        });
    }
    catch (error) {
      console.log(error)
    }

  };

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
        Setpmlists(res.data.system);
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
                <th className="text-left">SystemID</th>
                <th className="text-left px-4">PM</th>
                <th className="text-left px-4">Description</th>
                <th className="text-left px-4"> Status</th>
                <th className="text-left ">Cal Point</th>
                <th className="text-left px-4">Cal Cash DF</th>
                <th className="text-left px-4">Cal Cash Xo </th>

                <th className="text-left ">Option</th>
              </tr>
            </thead>
            <tbody>
              {(pmlists == null) ? <tr><td></td></tr> : pmlists.map(listitem => (
                <React.Fragment key={listitem.systemid}>
                  <tr key={listitem.systemid}>
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
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {listitem.system_desc}
                          </span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {(listitem.status !== 0) ? "Disable" : "Enable"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-size-lg font-weight-bold">
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {listitem.cal_point}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {listitem.cal_cash}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <span className="text-black-50-his d-block-his">
                            {listitem.cal_xo}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="text-right">
                      <Button onClick={() => toggleModal(listitem)} className="btn-first mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['far', 'edit']}
                          className="font-size-sm"
                        />
                      </Button>
                      <Button className="btn-danger mx-1 rounded-sm shadow-none hover-scale-sm d-30 border-0 p-0 d-inline-flex align-items-center justify-content-center">
                        <FontAwesomeIcon
                          icon={['fas', 'times']}
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
      <Dialog
        open={modal}
        scroll="body"
        maxWidth="md"
        onClose={toggleModal}
        classes={{ paper: 'border-0 bg-white' }}>
        <div className="p-4 text-center">
          <Container>
            <div className="text-uppercase font-weight-bold text-primary pt-4 font-size-sm">
              Update
              </div>
            <div className="py-4">
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Cal Point'
                      value={(procalpoint === null) ? '' : procalpoint}
                      onChange={onchangesproductname}
                      variant="outlined"
                      fullWidth
                      placeholder="Cal Point"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Cal Df'
                      value={(procalpercentdf === null) ? '' : procalpercentdf}
                      onChange={onchangesname}
                      variant="outlined"
                      fullWidth
                      placeholder="Cal Df"
                    />
                  </div>
                </Grid>
                <Grid item md={12}>
                  <div className="mb-4">
                    <TextField
                      label='Cal Xo'
                      value={(procalpercentxopay === null) ? '' : procalpercentxopay}
                      onChange={onchangesnamexo}
                      variant="outlined"
                      fullWidth
                      placeholder="Cal Xo"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </Container>
          <div className="divider my-4" />
          <Button size="large" className="btn-danger font-weight-bold" style={{ marginRight: "20px" }} onClick={handleClickcancel} >
            Cancel
          </Button>
          <Button size="large" className="btn-success font-weight-bold" onClick={handleClicksave} >
            Save details
                </Button>
        </div>
      </Dialog>

    </>
  );
}
