import React from 'react';
import{ Button, TextField, Menu, MenuItem, Icon} from '@material-ui/core'

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
           email:null,
           password:null,
           menuOpen:false,
           anchor: null
      }
    }
    handleData=()=>{
        fetch("https://reqres.in/api/login",{
            method: 'POST',
            headers: {
                      Accept: 'application/json',
                       'Content-Type': 'application/json'
                     },
                     body:JSON.stringify({
                         "email":"eve.holt@reqres.in",
                         "password":"cityslicka"
                     })
        })
        .then((res)=>res.json())
        .then((resJson) => {
            if(resJson.token){
                alert("login successful");
            }else{
                alert("please enter the correct data");
            }
           
        })
    }
    handleClick=(e)=>{
        this.setState({
            anchor: e.currentTarget,
            menuOpen:true
        })
    }
    handleClose=()=>{
        this.setState({
            anchor: null,
            menuOpen:false
        })
    }
    render(){
        return(
            <div>
                <h1>
                Welcome to The Login Page
                </h1><br />
                <TextField variant="outlined" color="primary" label="enter the mail id" margin="dense">

                </TextField>
               <br />
               <TextField variant="outlined" color="primary" label="enter the password" margin="dense">
                                                                                                                                                                      
                </TextField>
                <br />
                <Button onClick={this.handleData} variant="contained" color="primary">
                    GET DATA
                </Button>
                <Button
                variant="contained"
                color="primary"
                startIcon={<Icon>calendar_view_day</Icon>}
                onClick={this.handleClick}
                style={{position: "absolute", left:"50"}}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchor}
                    keepMounted
                    open={this.state.menuOpen}
                    onClose={this.handleClose}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </div>
        )
    }
}