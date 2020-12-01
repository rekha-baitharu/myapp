import React from 'react';
import { Button, TextField, Snackbar, IconButton, Icon, Card, CardContent, Grid, Typography, InputAdornment } from '@material-ui/core'

import rekha from '../images/google.png';
import { BrowserRouter, Redirect } from 'react-router-dom';
export default class Nextstack2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      open: false,
      message: false,
      loginSuccess: false,
      showPassword:"password",
      notVisible:false
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
  handlePassword = (e) => {
    this.setState({
      showPassword:"text"
    })
  }
  handlePasswordOpen=()=>{
    this.setState({
      showPassword:"password"
    })
  }
  render() {
    if (this.state.loginSuccess === true) {
      return (
        <Redirect to="nextstack345" />
      )
    }
    return (
      <div
        style={{
          height: "100vh",
          backgroundSize: 'cover'
        }}>
        <Grid container justify='center'>
          <Grid item xs={12} md={6}>
            <Card style={{ marginTop: 200 }}>
              <CardContent>
                <Typography variant='h4'><b>
                  Welcome To NexAPI doc
                  </b></Typography><br />
                <Typography style={{ color: "grey" }}>Sign in your account</Typography><br />
                <Typography ><b>Email</b></Typography>
                <TextField
                  variant="outlined"
                  color="primary"
                  label="enter your mail"
                  margin="dense"
                  value={this.state.email}
                  fullWidth
                ><br />
                </TextField>
                <br />
                <Typography ><b>Password</b></Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  color="primary"
                  label="enter your password"
                  type={this.state.showPassword}
                  margin="dense"
                  value={this.state.password}
                  />
                {this.state.showPassword==="password" ? 
                <IconButton onClick={this.handlePassword} style={{ color: "black", position:"absolute", right:400, top:430, cursor:"pointer" }}>
                <Icon>
                  visibility_off
                </Icon>
                </IconButton>
                :
                <IconButton onClick={this.handlePasswordOpen} style={{ color: "black", position:"absolute", right:400, top:430, cursor:"pointer" }}>
                <Icon>
                  visibility
                </Icon> 
                </IconButton>
                } 
                <br />
                <Button
                  onClick={this.handleData}
                  variant="contained"
                  color="primary"
                  disabled={(this.state.email === null || this.state.password === null) ? true : false}
                >
                  Sign In
            </Button>
                <br />
                <Typography style={{ color: "grey" }}>
                  Sign in with
              <IconButton>
                    <Icon style={{ backgroundColor: "white", color: "blue" }}>
                      facebook
                </Icon>
                  </IconButton>
                  <IconButton>
                    <Icon style={{ background: "url(" + rekha + ")", backgroundSize: "cover" }}>
                    </Icon>
                  </IconButton>
                </Typography>
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
              <Icon>
                close
              </Icon>
            </IconButton>
          }
        />
      </div>
    )
  }
}