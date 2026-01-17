import Carousel from 'react-bootstrap/Carousel';
// import { CardComponent } from './CardComponent';
import bgImage1 from "../assets/Background-color/bg1.png"
import styled from 'styled-components';

const CarouselIs = styled(Carousel)`
margin:3rem;
@media(min-width:660px){
display:none;
}
`
const CardComponentCarousel = ({ heading }) => {
    return (
        <CarouselIs data-bs-theme="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgImage1}
                    alt="slide1"
                />
                <Carousel.Caption>
                    <h5>{heading}</h5>
                    <button>book now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgImage1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>slide 2</h5>
                    <button>book now</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bgImage1}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>slide 3</h5>
                    <button>book now</button>
                </Carousel.Caption>
            </Carousel.Item>
        </CarouselIs>
    );
}

export default CardComponentCarousel;