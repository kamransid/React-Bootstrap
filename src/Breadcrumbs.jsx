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
                <Breadcrumb.Item href='https://react-bootstrap.github.io/components/breadcrumb/' active>Data</Breadcrumb.Item>
                <Breadcrumb.Item>Librery</Breadcrumb.Item>
               
            </Breadcrumb>
        )
    }
}

export default Bread