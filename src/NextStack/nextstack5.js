import { Typography, Card, CardContent } from '@material-ui/core';
import React from 'react';

export default class Nextstac5 extends React.Component{
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
                            Response
                            </b>
                        </Typography>
                    </CardContent>
                </Card>
                <div style={{backgroundColor:"black", height: "90vh",
                    backgroundSize: "cover"}}>
                <Typography style={{color:"green"}}>status
                <span style={{color:"white"}}>:true,</span></Typography>
                <br />
                <Typography style={{color:"green"}}>result
                <span style={{color:"white"}}>:abc123</span></Typography>
                </div>
            </div>
        )
    }
}