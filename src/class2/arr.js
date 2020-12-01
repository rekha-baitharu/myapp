import React from 'react';

export default class Arr extends React.Component{
    constructor(props){
        super(props);
        this.state={
            arr: [{
                name:"rekha",
                age:21,
                address:"kalahandi"
            },
            {
                name:"sikha",
                age:25,
                address:"kalahandi"
            }
            ]
        }
    }

    handleAdd=(e)=>{
        var rb=this.state.arr
        rb.push({
            name:"harish",
            age:"15",
            address:"kalahandi"
        });
        this.setState({
            arr:rb
        })
    }
    handleDelete=()=>{
        var rb=this.state.arr;
        rb.splice(1,1);
        this.setState({
            arr:rb
        })

    }
render(){
    return(
        <div>
            {this.state.arr.map((s,index)=>(
                <span>{s.name}-{s.age}-{s.address}
                <button > X </button><br />
                </span>
            
            ))} 
            <button onClick ={this.handleAdd}>
                add
            </button><br />
            <button onClick={this.handleDelete}>Delete </button>
           
        </div>
            )
    }
}