import React from 'react'
import { ButtonGroup, Button} from 'react-bootstrap'

class ButtonGroupExample extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state={
            show:true
        }
    }
    handle(){
        console.log(this)
    }
    render(){
        const style={
            marginTop: '10px',
            marginLeft: '5px',
            backgroundColour: 'red',
            border: 'solid red'
        }
        return(

           <ButtonGroup style={style}>
               <Button  bsStyle='primary' onClick={this.handle.bind(this)}>Left</Button>
               <Button  bsStyle='warning'>Middle</Button>
               <Button  bsStyle='success'>Right</Button>
           </ButtonGroup>
        )
    }
}

export default ButtonGroupExample
