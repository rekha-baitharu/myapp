import React from 'react';
import{ Button, TextField }from "@material-ui/core"

var a ="this is my a string";

export default class Var extends React.Component{

constructor(props){
    super(props);

    this.state={
        b:"this is my b string"

    }
}

    handleClick=()=>{
        a="new string";
        console.log(a);
        this.setState({
            b:"new b string"
        })
    } 

    render(){
        return(
            <div>
                Hello Rekha
                {a}
                {this.state.b}
            <Button variant="contained" color="primary" onClick={this.handleClick}>
                Click Me
            </Button>
            
            </div>
        )
        
    }
}