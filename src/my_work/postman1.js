import { AppBar, Button, Icon, IconButton, Toolbar, Typography, Menu, Grid } from '@material-ui/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';


export default class Postman1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12}>
                <BrowserRouter>
                    <AppBar color="transparent">
                        <Toolbar>
                            <IconButton>
                                <Icon>accessible_forward</Icon>
                                <Typography variant="h6" color="error">POSTMAN</Typography>

                            </IconButton>
                            <Button style={{ marginLeft: 900 }}
                                startIcon={<Icon>
                                    public
                                    </Icon>}>
                                Public
                            </Button>
                            <Button
                                style={{ background: "orangered" }}
                                startIcon={<Icon>play_arrow</Icon>}>
                                Run in Postman
                            </Button>

                        </Toolbar>
                        <Toolbar>
                            <Button>
                                Environment
                                </Button>
                            <Button endIcon={<Icon>arrow_drop_down</Icon>} style={{ color: "orangered" }}>
                                No Environment
                                </Button>
                            <Button>
                                LAYOUT
                                </Button>
                            <Button endIcon={<Icon>arrow_drop_down</Icon>} style={{ color: "orangered" }}>
                                Double Column
                                </Button>
                            <Button>
                                LANGUAGE
                                </Button>
                            <Button endIcon={<Icon>arrow_drop_down</Icon>} style={{ color: "orangered" }}>
                                HTTP-HTTP
                                </Button>
                            <IconButton><Icon>settings</Icon></IconButton>
                        </Toolbar>
                    </AppBar>
                </BrowserRouter>
                </Grid>
                </Grid>
            </div>
        )
    }
}