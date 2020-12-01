import { AppBar, Toolbar, Typography, Button, CardContent, Card } from '@material-ui/core';
import React from 'react';

import {BrowserRouter, Link, Route } from 'react-router-dom';
export default class Postman2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={{background:"lightgrey", height:"75vh"}}>
               
                            <Card style={{ textAlign: 'center' }} >
                                <CardContent style={{background:"grey", textAlign:"center"}}>
                                <Typography> NEXTSTACKS</Typography>
                                </CardContent>
                            </Card><br />
                    
                <div >
                    <Typography variant="subtitle1" >Introduction</Typography>
                    <br />
                    <Typography style={{ color: "orangered" }}>POST
                  <Link to="/" style={{ marginLeft: 20, color:"black", textDecoration:"none" }}>get_domain_details</Link>
                    </Typography>
                    <br />
                    <Typography style={{ color: "orangered" }}>POST
                  <Link to="post41" style={{ marginLeft: 20, color:"black", textDecoration:"none" }}>get_active_domain_lessons</Link>
                    </Typography>
                    <br />
                    <Typography style={{ color: "orangered" }}>POST
                   <Link to="post51" style={{ marginLeft: 20, color:"black", textDecoration:"none" }}>add_order</Link>
                    </Typography>
                </div>
            </div>

        )
    }
}