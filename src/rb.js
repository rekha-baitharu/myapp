import { configure } from '@testing-library/react';
import React from 'react';
import{ Button,
 TextField}from "@material-ui/core"


export default class Rb extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }
   render(){
       return(
           <div>
               <TextField variant="contained" label="enter the name">

               </TextField>
               <Button variant='contained' color='primary'>
                   Click
               </Button>
           </div>
       )
   }
}