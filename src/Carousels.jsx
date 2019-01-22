import React from 'react'
import { Carousel } from 'react-bootstrap'

class CarouselPractice extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            visible: true
        }
    }
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} src={require('./Me1.jpg')} alt="Kuch na hua" />
                    <Carousel.Caption>
                        <h3>This is first slide</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dicta non,</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./Me2.jpg')} alt="Kuch Na hua in 2" />
                    <Carousel.Caption>
                        <h3>This is second slide</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum consectetur soluta nihil quae libero laboriosam</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./Me3.jpg')} alt="Kuch na hua in 3"/>
                    <Carousel.Caption>
                    <h3>This is third slide</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselPractice


