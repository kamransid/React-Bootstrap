import React from 'react'
import { ButtonToolbar, Button } from 'react-bootstrap'

class ButtonExample extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            show: true
        }
    }
    render() {
        const block = {
            display: 'block',
            marginTop: '5px',
            //fontFamily: 'source-code-pro, Menlo, Monaco, Consolas,'
        }
        return (
            <div>
                <Button className='hola'>Default</Button>
                {/* <div style={{display: 'inline', background:'red'}}>Hi This is me</div> */}
                <Button style={block} bsStyle='primary'>Primary</Button>
                <Button style={block} bsStyle='success'>Success</Button>
                <Button style={block} bsStyle='warning'>Warning</Button>
                <Button style={block} bsStyle='danger'>Danger</Button>


                <Button active bsStyle='primary' style={block}>Active</Button>



                <Button bsSize='large' style={block} bsStyle='primary'>Large</Button>

                <Button style={block} bsStyle='primary' block>Block</Button>

                <Button style={block} bsStyle='warning' bsSize='small' >Small</Button>

                <Button bsStyle='info' bsSize='xsmall' style={block}>XSmall</Button>






            </div>


        )
    }


}

export default ButtonExample