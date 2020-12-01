import React from 'react';

var a ="this is my a string";

export default class Rekha extends React.Component{

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
                <button onClick={this.handleClick}>
                    Click me
                </button>
            </div>
        )
        
    }
}