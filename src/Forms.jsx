import React from 'react'
import {Form, FormControl, ControlLabel, FormGroup, HelpBlock} from 'react-bootstrap'


class FormExample extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            value: ''
        }
    }

    getValidationState(){
        const length = this.state.value.length
        if(length>10)
        return 'success'
        else if (length > 5)
        return 'warning'
        else if(length>0){
            return 'error'
        }
        return null
    }

    render(){
        return(
           <form>
               <FormGroup
                 controlId='formBasicText'
                 validationState = {}
               >
               </FormGroup>
           </form>
        )
    }
}


export default Forms
