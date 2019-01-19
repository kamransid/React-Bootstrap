import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

class Bread extends React.Component{
    constructor(props, context){
        super(props, context)
    }

    render(){
        return (
            <Breadcrumb>

                <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
               
            </Breadcrumb>
        )
    }
}

export default Bread