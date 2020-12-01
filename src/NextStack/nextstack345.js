import { AppBar, Grid, Toolbar, Typography, Icon, IconButton, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nextstack3 from './nextstack3';
import Nextstack4 from './nextstack4';
import Nextstack5 from './nextstack5';
import nextstack from '../images/nextstack.jpg';


export default class Nextstack345 extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            open: false
        }
    }
    handleClick = (e) => {
        this.setState({
            anchor: e.currentTarget,
            open: true
        })
    }
    handleClose = () => {
        this.setState({
            anchor: null,
            open: false
        })
    }
    render() {
        return (
            <div><Grid container>
                <Grid item xs={12}>
                    <BrowserRouter>
                        <AppBar style={{backgroundColor:"white"}}>
                            <Toolbar>
                                <Typography variant="h4" style={{color:"black"}}><b>NexAPI doc</b></Typography>
                                <IconButton style={{ marginLeft: 1100 }} onClick={this.handleClick}>
                                    <Icon style={{ background: "url(" + nextstack + ")", backgroundSize: "cover" }}>
                                    </Icon>
                                </IconButton>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={this.state.anchor}
                                        keepMounted
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                    >
                                        <MenuItem onClick={this.handleClose} >Manage Users</MenuItem>
                                        <MenuItem onClick={this.handleClose} >Setting</MenuItem>
                                        <MenuItem onClick={this.handleClose} >Logout</MenuItem>
                                    </Menu>
                            </Toolbar>
                        </AppBar>
                    </BrowserRouter>
                </Grid>
            </Grid>

                <br />
                <Grid container style={{ marginTop: 55 }} >
                    <Grid item xs={3} md={2.5} >
                        <Nextstack3 />
                    </Grid>
                    <br />
                    <Grid item xs={6} md={6}>
                        <Nextstack4 />
                    </Grid>
                    <br />
                    <Grid item xs={3} md={3.5} >
                        <Nextstack5 />
                    </Grid>
                </Grid>
            </div>
        )
    }
}