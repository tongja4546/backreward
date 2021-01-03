import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Grid,
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Button,
    TextField
} from '@material-ui/core';

import MailOutlineTwoToneIcon from '@material-ui/icons/MailOutlineTwoTone';
import LockTwoToneIcon from '@material-ui/icons/LockTwoTone';
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default function LivePreviewExample() {
    useEffect(() => {
        var token = localStorage.getItem('token')
        if (token !== null) {
            history.push("/Dashboard");
        }
    })

    const [checked1, setChecked1] = useState(true);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleChange1 = (event) => {
        setChecked1(event.target.checked);
    };
    const history = useHistory();


    const login = () => {
        if (username === null || password === null) {
            setError('Username or Password invalid')
            return
        }
        axios
            .post("https://dafarewards.com:7002/api/v1/adminlogin", {
                userid: username,
                password: password
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token);
                history.push("/Dashboard");
            });
    };
    return (
        <>
            <div className="app-wrapper bg-white min-vh-100">
                <div className="app-main min-vh-100">
                    <div className="app-content p-0">
                        <div className="app-content--inner d-flex align-items-center">
                            <div className="flex-grow-1 w-100 d-flex align-items-center">
                                <div className="bg-composed-wrapper--content py-5">
                                    <Grid item md={10} lg={8} xl={4} className="mx-auto">
                                        <div className="text-center">
                                            <h1 className="display-4 mb-1 font-weight-bold">Login</h1>
                                        </div>
                                        <div className="text-center mb-4 text-red" style={{ color: "red" }}>{error !== '' ? error : ''}</div>
                                        <div>
                                            <div className="mb-4">
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    id="textfield-email"
                                                    label="Email address"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <MailOutlineTwoToneIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    onChange={(e) => {
                                                        setUsername(e.target.value)
                                                        setError('')
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <TextField
                                                    fullWidth
                                                    variant="outlined"
                                                    id="textfield-password"
                                                    label="Password"
                                                    type="password"
                                                    InputProps={{
                                                        startAdornment: (
                                                            <InputAdornment position="start">
                                                                <LockTwoToneIcon />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                    onChange={(e) => {
                                                        setPassword(e.target.value)
                                                        setError('')
                                                    }}
                                                />
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center font-size-md">
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            checked={checked1}
                                                            onChange={handleChange1}
                                                            value="checked1"
                                                            color="primary"
                                                        />
                                                    }
                                                    label="Remember me"
                                                />
                                                {/* <div>
                                                    <a
                                                        href="#/"
                                                        onClick={(e) => { e.preventDefault() }}
                                                        className="text-first">
                                                        Recover password
                          </a>
                                                </div> */}
                                            </div>
                                            <div className="text-center py-4">
                                                <Button className="btn-second font-weight-bold w-50 my-2" onClick={login}>
                                                    Sign in
                                            </Button>
                                            </div>

                                        </div>
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
