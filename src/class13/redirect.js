import React from 'react';
import { Button, TextField, Snackbar, IconButton, Icon, Card, CardContent, Grid, Typography } from '@material-ui/core'
import rb from '../images/music.jpg';
import Appbar from '../class12/appbar';
import {
    BrowserRouter,
    Redirect
} from "react-router-dom"
export default class Redirectt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            open: false,
            message: false,
            loginSuccess: false,
          

        }
    }
    handleData = () => {
        fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": this.state.email,
                "password": this.state.password
            })
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.token) {
                    this.setState({
                        open: true,
                        message: "login successful",
                        loginSuccess: true
                    })
                } else {
                    this.setState({
                        open: true,
                        message: "login unsuccessful",
                        loginSuccess: false
                    })
                }

            })
    }
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    render() {
        if (this.state.loginSuccess === true) {
            return (

                <Redirect to="getlist" />

            )
        }
        return (
            <div
                style={{
                    background: "url(" + rb + ")",
                    height: "100vh",
                    backgroundSize: 'cover'
                }}>
                <Appbar />
                <Grid container justify='center'>
                    <Grid item xs={12} md={3}>
                        <Card style={{ marginTop: 200, textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant='h4'>
                                    LOGIN
                                </Typography>
                                <h1>
                                    Welcome to The Login Page
                                </h1><br />
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    label="enter the mail id"
                                    margin="dense"
                                    value={this.state.email}
                                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                                >

                                </TextField>
                                <br />
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    label="enter the password"
                                    margin="dense"
                                    value={this.state.password}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                                >

                                </TextField>
                                <br />
                                <Button
                                    onClick={this.handleData}
                                    variant="contained"
                                    color="primary"
                                    disabled={(this.state.email === null || this.state.password === null) ? true : false}

                                >
                                    GET DATA
                                 </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={10000}
                    onClose={this.handleClose}
                    message={this.state.message}
                    action={
                        <IconButton onClick={this.handleClose}>
                            <Icon style={{ color: "white" }}>
                                close
                            </Icon>

                        </IconButton>
                    }
                />
                
            </div>
        )
    }
}