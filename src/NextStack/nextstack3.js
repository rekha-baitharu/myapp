import { Card, CardContent, Menu, MenuItem, Icon, Typography, Button, IconButton, Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Grid, TextField,Tab,Tabs,Paper } from '@material-ui/core';
import React from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom';
export default class Nextstack3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            anchor: null,
            open: false,
            setOpen: false,
            openPlus: false,
            header:false,
            project:false,
            menu:false,
    //         arr:[{
    //             name:"Project",
    //             num:1
    //         },
    //     {
    //         name:"Project",
    //         num:2
    //     },
    //    {
    //     name:"Project",
    //     num:3
    //     }]
            
        }
    }
    // FUNCTION CALL AFTER CLICKING ON MENU ICON BUTTON
    handleClose = () => {
        this.setState({
            anchor: null,
            menuOpen: false
            
        })
    }
    handleClick = (e) => {
        this.setState({
            anchor: e.currentTarget,
            menuOpen: true,

        })
    }
// FUNCTION CALL AFTER CLICKING ON DELRTE BUTTON
    handleClickOpen = () => {
        this.setState({
            setOpen: true,
        })
    };
    handleCloseSet = () => {
        this.setState({
            setOpen: false,
        })
    };
// FUNCTION CALL AFTER CLICKING ON MENU ICON BUTTON
    handleClickOpenPlus = () => {
        this.setState({
            openPlus:true
        })
    };
    handleClosePlus = () => {
        this.setState({
            openPlus:false
        })
    };
// FUNCTION CALL AFTER CLICKING ON PLUS BUTTON
    handleCloseHeader=()=>{
        this.setState({
            header:false
        })
    };
   handleClickHeader=()=>{
       this.setState({
           header:true
       })
   } 
// FUNCTION CALL AFTER CLICKING ON ADD PROJECT BUTTON
   handleClickProject=()=>{
       this.setState({
            project:true
       })
   }
   handleCloseProject=()=>{
    this.setState({
         project:false
    })
}
   // FUNCTION CALL AFTER CLICKING ON METHOD BUTTON
handleCloseMenu=()=>{
    this.setState({
        menu:false,
        anchor:null
    })
}
handleClickMenu=(e)=>{
    this.setState({
        menu:true,
        anchor: e.currentTarget

    })
}
    render() {
        return (
            <div style={{ height: "75vh" }}>
                <Button variant="contained" style={{ backgroundColor: "whitesmoke" }}>
                    Projects
                        <IconButton
                        onClick={this.handleClick}
                        style={{ position: "right", marginLeft: 130 }}>
                        <Icon>keyboard_arrow_down</Icon>
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchor}
                            keepMounted
                            open={this.state.menuOpen}
                            onClose={this.handleClose}
                        >
                            {/* {this.state.arr.map((s)=>(
                                <span>{s.name}-{s.num}<br /></span>
                            ))} */}
                            <MenuItem onClick={this.handleClose} >Project 1</MenuItem>
                            <MenuItem onClick={this.handleClose} >Project 2</MenuItem>
                            <MenuItem onClick={this.handleClose} >Project 3</MenuItem>
                            <MenuItem onClick={this.handleClose} >Project 4</MenuItem>
                            <MenuItem onClick={this.handleClickProject}>Add new Project</MenuItem>
                        </Menu>
                </Button>
                <IconButton size="medium" onClick={this.handleClickOpenPlus}>
                    <Icon>
                        control_point
                            </Icon>
                </IconButton>
                <br />
{/* DELETION PART */}
                <BrowserRouter>
                    <Button style={{ backgroundColor: "blue", color: "white", margin: 10 }}>POST </Button>
                    <Link style={{ marginLeft: 20, color: "black", textDecoration: "none" }}>/v1/get_students</Link>
                    <IconButton style={{ marginLeft: 10 }} onClick={this.handleClickOpen}>
                        <Icon>
                            delete
                      </Icon>
                    </IconButton>
                    <br />
                    <Button style={{ backgroundColor: "blue", color: "white", margin: 10 }}>POST </Button>
                    <Link style={{ marginLeft: 20, color: "black", textDecoration: "none" }}>/v1/get_students</Link>
                    <IconButton style={{ marginLeft: 10 }} onClick={this.handleClickOpen}>
                        <Icon>
                            delete
                      </Icon>
                    </IconButton>
                    <br />
                    <Button style={{ backgroundColor: "blue", color: "white", margin: 10 }}>POST   </Button>
                    <Link style={{ marginLeft: 20, color: "black", textDecoration: "none" }}>/v1/get_students</Link>
                    <IconButton style={{ marginLeft: 10 }} onClick={this.handleClickOpen}>
                        <Icon >
                            delete
                      </Icon>
                    </IconButton>
                    </BrowserRouter>
{/* AFTER CLICKING ON DELETE BUTTON */}
                <Dialog open={this.state.setOpen} onClose={this.handleCloseSet} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">DELETE API</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to permanently delete this api?
                            </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseSet} color="primary">
                            CANCEL
                            </Button>
                        <Button onClick={this.handleCloseSet} color="primary">
                            DELETE
                            </Button>
                    </DialogActions>
                </Dialog>
                <br />
{/* AFTER CLICKIN ON PLUS BUTTON */}
                <Dialog open={this.state.openPlus} onClose={this.handleClosePlus} aria-labelledby="form-dialog-title" maxWidth="md">
                    <DialogTitle id="form-dialog-title">ADD API</DialogTitle>
                    <DialogContent>
                        <Grid container>
                            <Grid item xs={6}>
                            <TextField
                            variant="outlined"
                            color="primary"
                            label="Path Name"
                            margin="dense"
                            fullWidth
                            onChange={(e) => { this.setState({}) }}
                        /><br />
                        <Button fullWidth>
                            Method
                        <IconButton
                            onClick={this.handleClickMenu}
                            style={{ position: "right", marginLeft: 130 }}>
                            <Icon>keyboard_arrow_down</Icon>
                            </IconButton>
                        </Button>
                            <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchor}
                            keepMounted
                            open={this.state.menu}
                            onClose={this.handleCloseMenu}
                        >
                            <MenuItem onClick={this.handleCloseMenu} >GET</MenuItem>
                            <MenuItem onClick={this.handleCloseMenu} >POST</MenuItem>
                        </Menu>
                        
                        <Card style={{ textAlign: "center" ,backgroundColor:"lightgrey"}}>
                            <CardContent>
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    label="Param"
                                    margin="dense"
                                    fullWidth
                                    onChange={(e) => { this.setState({}) }} 
                                    style={{backgroundColor:"white"}}/><br />
                                <TextField
                                    variant="outlined"
                                    color="primary"
                                    label="Value"
                                    margin="dense"
                                    fullWidth
                                    onChange={(e) => { this.setState({}) }} 
                                    style={{backgroundColor:"white"}}/><br />
                                <Button fullWidth style={{backgroundColor:"white"}} >
                                    Type
                            
                                <IconButton
                                    style={{ position: "right", marginLeft: 130 }}>
                                    <Icon>keyboard_arrow_down</Icon>
                                </IconButton>
                                </Button><br />
                                <br />
                                <Button textAlign="center" fullWidth style={{backgroundColor:"white"}}>
                                    ADD PARAM
                                </Button>
                                </CardContent></Card>
                            </Grid>
                            <Grid item xs={6}>
                            <Paper square>
                                <Tabs
                                // value={value}
                                indicatorColor="primary"
                                textColor="primary"
                                // onChange={handleChange}
                                aria-label="disabled tabs example"
                                >
                                <Tab label="Headers" onClick={this.handleClickHeader}/>
                                <Tab label="Body" />
                                <Tab label="Response" />
                                </Tabs>
                            </Paper>
                            </Grid>
                        </Grid>
                            </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClosePlus} color="primary">
                            CANCEL
                            </Button>
                        <Button onClick={this.handleClosePlus} color="primary">
                            ADD
                            </Button>
                    </DialogActions>
                    {/* </Card> */}
                </Dialog>
                <br />
{/* AFTER CLICKING ON HEADER TAB */}
                <Dialog open={this.state.header} onClose={this.handleCloseHeader} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogContent>
                    <Card>
                    <Grid container>
                        <Grid item md={10}>
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
                            <DialogActions>
                        <Button onClick={this.handleCloseHeader} color="primary">
                            OK
                        </Button>
                    </DialogActions>
                        </Grid>
                    </Grid>
                </Card>
                    </DialogContent>
                </Dialog>
                <br />
{/* AFTER CLICKING ON ADD NEW PROJECT */}
<Dialog open={this.state.project} onClose={this.handleCloseProject} aria-labelledby="form-dialog-title" fullWidth>
                    <DialogTitle id="form-dialog-title">ADD PROJECT</DialogTitle>
                    <DialogContent>
                    <TextField
                            variant="outlined"
                            color="primary"
                            label="Project Name"
                            margin="dense"
                            fullWidth
                            onChange={(e) => { this.setState({}) }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseProject} color="primary">
                            CANCEL
                            </Button>
                        <Button onClick={this.handleCloseProject} color="primary">
                            ADD
                            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}