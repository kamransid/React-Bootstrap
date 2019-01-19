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
        const style={
            marginTop: '10px'
        }
        return(

           <ButtonGroup style={style}>
               <Button  bsStyle='primary'>Left</Button>
               <Button  bsStyle='warning'>Middle</Button>
               <Button  bsStyle='success'>Right</Button>
           </ButtonGroup>
        )
    }
}

export default ButtonGroupExample
