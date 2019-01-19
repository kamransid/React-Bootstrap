import React from 'react'
import { Badge } from 'react-bootstrap'

class BadgeExample extends React.Component{
    render(){
        return(
            <p>
                Badges <Badge pullRight="true"><a href="https://react-bootstrap.github.io/components/badge/">Click Me</a></Badge>
            </p>
        )
    }
}

export default BadgeExample