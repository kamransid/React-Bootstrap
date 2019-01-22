import React from 'react'
import {SplitButton, ButtonToolbar, MenuItem } from 'react-bootstrap'

const Button = ['Primary', 'Info', 'Warning', 'Danger', 'Success']

function handle(item,i){
    const style={
        marginTop: '15px',
        marginLeft: '10px'
    }
    return(
    <SplitButton
      bsStyle = {item.toLowerCase()}
      title = {item}
      key = {i}
      id = {`split-button-basic-${i}`}
    >
    <MenuItem
      eventKey='1'
    >
    Action
    </MenuItem>
    <MenuItem eventKey='2'>Another Action</MenuItem>
    <MenuItem eventKey='3'>Something else here</MenuItem>
    <MenuItem divider/>
    <MenuItem eventKey='4'>Seperated Link</MenuItem>

    </SplitButton>
    )
}

export default () => {
    return(
    <ButtonToolbar>
        {Button.map(handle)}
    </ButtonToolbar>
    )
}