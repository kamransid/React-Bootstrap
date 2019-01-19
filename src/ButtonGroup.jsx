import React from 'react'
import { ButtonGroup, Button} from 'react-bootstrap'

class ButtonGroupExample extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state={
            show:true
        }
    }
    render(){
        return(
           <ButtonGroup>
               <Button bsStyle='primary'>Left</Button>
               <Button bsStyle='warning'>Middle</Button>
               <Button bsStyle='success'>Right</Button>
           </ButtonGroup>
        )
    }
}

export default ButtonGroupExample
