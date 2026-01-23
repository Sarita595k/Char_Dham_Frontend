import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Card } from 'react-bootstrap'
import { Heading } from './Heading'

const Div = styled.div`
// display:flex;
// flex-direction:column;
background-color:transaprent;
`
const CarouselContainer = styled(Carousel)`
// background-color:transparent;
`


const Reviews = () => {
    return (
        <Div>
            <Heading heading={"Testimonials"} />
            <CarouselContainer>
                <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>1. Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>2. Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>3. Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </CarouselContainer>
        </Div>
    )
}

export default Reviews