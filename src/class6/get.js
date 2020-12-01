import React from 'react';
import{ Button } from '@material-ui/core'

export default class Get extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[{
                id:null,
                name:null,
                email:null
            }]
          
                     
      }
    }
    handleData=()=>{
        fetch("https://reqres.in/api/users?page=2")
        .then((res)=>res.json())
        .then((resJson) => {
            console.log(resJson)
            var data1=this.state.data;
                // data1.push({
                // id: resJson.data.id,
                // name: resJson.data.first_name + " " + resJson.data.last_name,
                // email: resJson.data.email
                                    
            // });
            this.setState({
                data:resJson.data
                
              
            });
        })
    }
    render(){
        return(
            <div>
                <h1>
                Welcome to The List
                </h1>
              
                <div>
                <ol>
                         {this.state.data.map((s)=>{
                            return(
                                <div>
                                   <li>
                                    {s.id} - {s.first_name} - {s.email} 
                                    </li>
                                </div>
                            )
                            
                         })}
                </ol>
                </div>
                <Button onClick={this.handleData} variant="contained" color="primary">
                    GET DATA
                </Button>
            </div>
        )
    }
}