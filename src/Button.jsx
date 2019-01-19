import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

class ButtonExample extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            show: true
        }
    }
    render(){
        return (
            
                <div>
               <Button>Default</Button>
               {/* <div style={{display: 'inline', background:'red'}}>Hi This is me</div> */}
               <Button style={{display:'block'}} bsStyle='primary'>Primary</Button>
               </div>
            
        )
    }


}

export default ButtonExample