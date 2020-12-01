import React from 'react';

import{
    AppBar,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core"


export default class Appbarr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <AppBar position="static">
                    
                    <Toolbar>
                        <Typography variant="h6">
                            Login
                        </Typography>
                       
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}