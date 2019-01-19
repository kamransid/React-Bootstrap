import React from 'react'
import { ButtonGroup, Button, ButtonToolbar, DropdownButton, MenuItem } from 'react-bootstrap'

class ButtonGroupExample extends React.Component {
    constructor(props, context) {
        super(props, context)
        console.dir(props)
        console.log(`Hi this is ${props}`)
        this.state = {
            show: true
        }
        this.handle = this.handle.bind(this)
    }
    handle() {
        console.log(this.props)
        console.log(this)
    }
    render() {
        const style = {
            marginTop: '10px',
            marginLeft: '5px',

        }
        return (
            <React.Fragment>

            <ButtonGroup style={style}>

                <Button bsStyle='primary' onClick={this.handle}>Left</Button>
                <Button bsStyle='warning'>Middle</Button>
                <Button bsStyle='success'>Right</Button>
            </ButtonGroup>

            <ButtonToolbar style={style}>
                <ButtonGroup>
                    <Button bsStyle='primary' bsSize='large'>I</Button>
                    <Button bsStyle='warning' bsSize='large'>am</Button>
                    <Button bsStyle='success' bsSize='large'>super</Button>
                    <Button bsStyle='danger' bsSize='large'>Don</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button bsStyle='primary' bsSize='large'>I</Button>
                    <Button bsStyle='warning' bsSize='large'>am</Button>
                    <Button bsStyle='success' bsSize='large'>super</Button>
                    <Button bsStyle='danger' bsSize='large'>Don</Button>
                </ButtonGroup>
                <ButtonGroup bsSize='large' bsStyle='primary'>
                    <Button bsStyle='primary' >I</Button>
                    <Button bsStyle='warning' >am</Button>
                    <Button bsStyle='success' >super</Button>
                    <Button bsStyle='danger' >Don</Button>
                </ButtonGroup>
            </ButtonToolbar>
            <ButtonGroup style={style}>
                <Button bsStyle='primary'>
                    Primary
                </Button>
                <Button bsStyle='warning'>
                    Warning
                </Button>
                <DropdownButton bsStyle='info' title='Dropdown' id = 'kuchbhi'>
                    <MenuItem eventKey="1">Dropdown Link</MenuItem>
                    <MenuItem eventKey='2'>Dropdown Menu</MenuItem>
                </DropdownButton>
            </ButtonGroup>
            </React.Fragment>

        )
    }
}
ButtonGroupExample.defaultPrpos = {
    kumar: 'Bhaiiya'
}

export default ButtonGroupExample
