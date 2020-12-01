import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from "react-router-dom"
import Post from '../class6/post';
import Snackbarr from '../class8/snackbar';
import Async from '../class7/async';
import Getlist from '../class6/getlist';
import Redirectt from '../class13/redirect';
import { AppBar, Button, Toolbar } from '@material-ui/core';
export default class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>

                <BrowserRouter>
                    <AppBar>
                        <Toolbar>

                            <Link to="/" style={{textDecoration:"none"}}>
                                <Button>
                                    Async
                                </Button>
                            </Link>
                            <Link to="redirect" style={{textDecoration:"none"}}>
                                <Button>
                                    Login1
                                </Button>
                            </Link>
                            <Link to="snackbar" style={{textDecoration:"none"}}>
                                <Button>
                                    Login2
                                </Button>
                            </Link>
                            <Link to="post" style={{textDecoration:"none"}}>
                                <Button>
                                    Post
                                </Button>
                            </Link>
                            <Link to="getlist" style={{textDecoration:"none"}}>
                                <Button>
                                    Getlist
                                </Button>
                            </Link>

                        </Toolbar>
                    </AppBar>
                    <div style={{marginTop:70}}>
                        <Route exact path="/snackbar" component={Snackbarr} />
                        <Route exact path="/" component={Async} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/getlist" component={Getlist} />
                        <Route exact path="/redirect" component={Redirectt} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}