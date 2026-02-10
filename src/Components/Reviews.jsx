import styled from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { Card } from 'react-bootstrap'
import { Heading } from './Heading'
import { Reviews } from './ReviewsList'

const Div = styled.div`
width:100%;
`
const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const CarouselContainer = styled(Carousel)`
.carousel-caption{
 position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; /* optional, can remove if you want captions only on top/bottom */
    pointer-events: none; /* allow clicks to go through except buttons */
    z-index: 2;
  }

  .carousel-indicators {
    z-index: 5; /* above overlay */
  }

  .carousel-control-prev,
  .carousel-control-next {
    z-index: 5; /* above overlay */
  }

  .carousel-indicators button {
    background-color: #fff; /* inactive dot */
  }

  .carousel-indicators .active {
    background-color: #ffcc00; /* active dot */
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
    /* this makes the arrow white */
  }
    .carousel-control-prev {
  left: -2rem; /* move left arrow outside the content */
}

.carousel-control-next {
  right: -2rem; /* move right arrow outside the content */
}
`

const CardContainer = styled(Card)`
width:80%;
height:25vh;
background-color:transparent;
border:none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const CardTitle = styled(Card.Title)`
font-size:clamp(1.3rem,2vw,2.1rem);
color:#CC3366;
`
const CardText = styled(Card.Text)`
font-size:clamp(1.2rem,2vw,2.1rem);
`
const ReviewsComp = () => {
    return (
        <Div>
            <Heading heading={"Testimonials"} />
            <CarouselContainer>
                {Reviews.map(review =>
                    <Carousel.Item key={review.id}>
                        <CenterWrapper>
                            <CardContainer>
                                <Card.Body>
                                    <CardTitle>{review.name}</CardTitle>
                                    <CardText>
                                        {review.description}
                                    </CardText>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </CardContainer>
                        </CenterWrapper>
                    </Carousel.Item>
                )}

            </CarouselContainer>
        </Div>
    )
}

export default ReviewsComp