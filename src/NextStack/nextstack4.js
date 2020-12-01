import { CardContent, Typography, Card, Button, Grid } from '@material-ui/core';
import React from 'react';
import{
    BrowserRouter,
    Link
} from 'react-router-dom';
export default class Nextstack4 extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div  style={{height:"75vh"}}>
                <Card>
                    <CardContent style={{textAlign:"left"}}>
                        <Typography style={{color:"grey"}}>
                            <b>
                            Request
                            </b>
                        </Typography>
                    </CardContent>
                </Card>
                <br />
                <BrowserRouter>
                    <Button style={{ backgroundColor: "blue", color: "white", margin: 10 }}>POST </Button>
                    <Link style={{ marginLeft: 20, color: "black", textDecoration: "none" }}>/v1/get_students</Link>
                </BrowserRouter>
                <br />
                <br />
                <Typography variant="h6" >
                    Header
                </Typography>
                <br />
                <Card style={{marginRight:20}} >
                    <Grid container>
                        <Grid item md={2}>
                        <CardContent style={{backgroundColor:"lightgrey"}}>
                            <Typography>Param1</Typography>
                        </CardContent>
                        </Grid>
                        {/* <br /> */}
                        <Grid item md={10}>
                            <CardContent style={{backgroundColor:"lightgrey" }}>
                                <Typography>
                                    value
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
                <br />
                <br />
                <Typography variant="h6" >
                    Body
                </Typography>
                <br />
                <Card style={{marginRight:20}}>
                    <Grid container>
                        <Grid item md={2}>
                        <CardContent style={{backgroundColor:"lightgrey"}}>
                            <Typography>Param1</Typography><br />
                            <Typography>Param2</Typography><br />
                            <Typography>Param3</Typography>
                        </CardContent>
                        </Grid>
                        {/* <br /> */}
                        <Grid item md={10}>
                            <CardContent style={{backgroundColor:"lightgrey"}}>
                                <Typography>
                                    value
                                </Typography><br />
                                <Typography>
                                    value
                                </Typography><br />
                                <Typography>
                                    value
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>

            </div>
        )
    }
}