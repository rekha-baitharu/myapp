import { Typography, Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Postman6 from './postman6';

export default class Postman3 extends React.Component {
    render() {
        return (
            <div style={{ height: "75vh" }}>
                <Postman6 />
                <div style={{ marginTop: 120 }}>
                    <Typography style={{ color: "orangered" }}>POST
                    <spin style={{ color: "black", marginLeft: 20 }}>get_domain_details </spin>
                    </Typography>
                </div>
                <div>
                    <Card style={{ textAlign: 'center' }}>
                        <CardContent style={{ background: "lightgrey", textAlign: "center" }}>
                            <Typography variant="h6">localhost:8007/v1/get_domain_details </Typography>
                        </CardContent>
                    </Card>
                    <br />
                    <div>
                        <Typography variant="h4">
                            HEADERS
                    </Typography>
                    </div>
                    <div>
                        <Card>
                            <Grid container>
                                <Grid item md={2.5}>
                                    <CardContent>
                                        <Typography variant="h6" > user-token</Typography>
                                    </CardContent>
                                </Grid>
                                <br />
                                <Grid item md={6}>
                                    <CardContent>
                                        <Typography variant="inherit">abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza
                                    <br />bdfvjhdviueyfriuhisduhcdjbvdhugvudhgvdcbvhduvsueyfuidhfvjkndfvkjbdfivhdfiuh
                                    <br />vidfhviufhdifuhvdifhviduhvdiuhvkjhkjdhvhfkjhfdjkhvdkhvdjkfvhdfkjhfdkjhjkdbvjdfkbfd
                                    </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                            <br />
                            <Typography>BODY
                            <spin style={{ color: "black", marginLeft: 20 }}>urlcoded </spin>
                            </Typography>
                        </Card>
                    </div>
                    <div>
                        <Card>
                            <Grid container>
                                <Grid item md={2.5}>
                                    <CardContent>
                                        <Typography variant="h6" > domain_id</Typography>
                                    </CardContent>
                                </Grid>
                                <br />
                                <Grid item md={6}>
                                    <CardContent>
                                        <Typography variant="inherit">abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyza
                                    </Typography>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}