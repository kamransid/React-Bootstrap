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
      style = {style}
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