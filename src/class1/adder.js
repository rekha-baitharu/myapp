import React from 'react';
var a=13;
var b=13;
export default class Adder extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            c:parseInt()+parseInt()
    
        }
    }
    handleClick=()=>{
       
        this.setState({
           

            c:parseInt(a)+parseInt(b)
        })
    }

    
    render(){
        return(
            <div>
                The sum is:
                {this.state.c}
                <button onClick={this.handleClick}>
                    Click

                </button>
            </div>
            
        )
    }
}