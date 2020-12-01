import { Grid } from '@material-ui/core';

import React from 'react';
import Postman1 from './postman1';
import Postman2 from './postman2';
import Postman5 from './postman5';

export default class Postman51 extends React.Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                        <Postman1 />
                    </Grid>
                </Grid><br />
                <Grid container style={{ marginTop: "200" }}>
                    <Grid item xs={6} style={{ marginTop: 120 }}>
                        <Postman2 />
                    </Grid>
                    <br />
                    <Grid item md={6} style={{ marginTop: 120 }}>
                        <Postman5 />
                    </Grid>
                </Grid>
            </div>
        )
    }
}