import React from 'react'
import { Badge } from 'react-bootstrap'

class BadgeExample extends React.Component{
    render(){
        return(
            <p>
                Badges <Badge>42</Badge>
            </p>
        )
    }
}

export default BadgeExample