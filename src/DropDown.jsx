import React from 'react'
import {DropdownButton, MenuItem, ButtonToolbar} from 'react-bootstrap'


const Buttons = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger']

class DropDown extends React.Component{

    constructor(props, context){
        super(props, context)
        this.state = {
            visible : true
        }
    }
    handle(item,i){
        return (
            <DropdownButton
               bsStyle={item.toLowerCase()}
               title = {item}
               key = {i}
               id = {`dropdown basic ${i}`}
            >
            <MenuItem eventKey='1'>Action</MenuItem>
            <MenuItem eventKey='2'>Another Action</MenuItem>
            <MenuItem eventKey='3'>Active Item</MenuItem>
            <MenuItem eventKey='4'>Action123</MenuItem>
            <MenuItem divider></MenuItem>
            <MenuItem eventKey='5'>Seperated Link</MenuItem>

            </DropdownButton>
        )
    }
    render(){
        const style = {
            marginTop : '15px',
            marginLeft: '5px'
        }
        return(
           <ButtonToolbar style = {style}>
               {Buttons.map(this.handle)}
           </ButtonToolbar>
        )
    }
}

export default DropDown