import React from 'react';
import { Grid } from '@material-ui/core';
import Nextstack1 from './nextstack1';
import Nextstack2 from './nextstack2';
export default class Nextstack12 extends React.Component{
    render(){
        return(
            <div>
            <Grid container >
            <Grid item md={6}>
                <Nextstack1 />
            </Grid>
            <br />
            <Grid item md={6}>
                <Nextstack2 />
            </Grid>
        </Grid>
        </div>
        )
    }
}