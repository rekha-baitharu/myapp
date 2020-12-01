import React from 'react';
import Child from './child';
import{ Button, TextField } from "@material-ui/core"
export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
        //  show:true,
         a:20
        }
}
// handleShow=()=>{
//     this.setState({
//         show:true,
//     })
// }
render(){
    return(
        <div>
            <h1>Hello from Main<TextField
             value={this.state.a}
             onChange={(e)=>{
                 this.setState({
                     a:e.target.value
                 })
             }}></TextField></h1>
            {/* <Button onClick={this.handleShow}>
            hide
            </Button> */}
           {/* {this.state.show === true && <Child />} */}
        <Child 
        vala={this.state.a}
        />
        </div>
    )
}
}