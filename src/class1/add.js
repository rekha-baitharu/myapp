import React from 'react';



export default class Add extends React.Component{
    constructor(props){
        super(props);
    
        this.state={ 
            val1:12,
            val2:12
    
        }
    }
  

    handleVal1=(e)=>{
        this.setState({
            val1:e.target.value
        })

    }

    handleVal2=(e)=>{
    
        this.setState({
            val2:e.target.value
        })
        
    }

    sum=()=>{
        this.setState({
            sum:parseInt(this.state.val1) + parseInt(this.state.val2)
        })
    }
    render(){
        return(
            <div>
              Enter the first value:  <input value={this.state.val1}  onChange={this.handleVal1}/><br/>
               Enter the second value: <input value={this.state.val2}  onChange={this.handleVal2}/><br />

                The sum is: {this.state.sum}
                
               <button onClick={this.sum}>
                   Add

                </button>
            </div>
            
        )
    }
}