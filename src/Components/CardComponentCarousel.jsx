import Carousel from 'react-bootstrap/Carousel';
// import { CardComponent } from './CardComponent';
import styled from 'styled-components';
import { Heading } from "../Components/Heading"
// import { Button } from 'react-bootstrap';
import { Buttons } from './Buttons';
import { PackageCard } from './PackageCard';
const Div = styled.div`
// border:1px solid black;
`
const CarouselIs = styled(Carousel)`
margin:3rem;

@media(min-width:660px){
display:none;
}

.carousel-caption{
z-index:2;
position:absolute;
inset:0;
}
`

const ImageWrapper = styled.div`
position:relative;
width:100%;
height:30rem;
overflow:hidden;
`

const CarouselImage = styled.img`
width:100%;
height:100%;
object-fit:cover;
`

const Overlay = styled.div`
z-index:1;
position:absolute;
inset:0;
background-color:rgba(68,35,59,0.8);
`
const CaptionTop = styled.div`
  position: absolute;
  top: 1.3rem;
  left: 0;
  right: 0;

  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  z-index: 2;
`;

const Time = styled.button`
  position: absolute;
  top: -1.2rem;

  font-size: 1.5rem;
  padding: 0 6rem .9rem;
  background-image: linear-gradient(
    90deg,
    #7E4555 0%,
    rgba(135, 26, 88, 1) 100%
  );
  color: white;
  border: none;

  clip-path: polygon(
    0% 0%,  
    100% 0%,
    80% 100%,
    20% 100%
  );
`;

const H1 = styled.h1`
margin-top:2rem;
color:white;
font-size:2rem;
text-transform:capitalize;
`
const H3 = styled.h3`
margin-top:2rem;
font-size:1.5rem;
color:rgb(206, 179, 199);
text-transform:capitalize;
`

const CaptionBottom = styled.div`
  position: absolute;
  bottom: 0rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  pointer-events: auto;
`;

const BtnContainer = styled.div`
color:rgb(245, 238, 243);
border:none;
`
const StyledPackageCard = styled(PackageCard)`
  border: 1px solid rgba(255,255,255,0.6);
  background: transparent;
  color: white;
`;


const CardComponentCarousel = ({ title, slides }) => {
    return (
        <Div>
            <Heading heading={title} />
            < CarouselIs data-bs-theme="dark" controls={false} indicators={false}>
                {slides.map((item, index) => (
                    <Carousel.Item key={index}>
                        <ImageWrapper>
                            <CarouselImage
                                className="d-block w-100"
                                src={item.imageUrl}
                                alt={item.title}
                            />
                            <Overlay />
                        </ImageWrapper>
                        <Carousel.Caption>
                            <CaptionTop>
                                <Time>{item.time}</Time>
                                <H1>{item.title}</H1>
                                <H3>{item.included}</H3>
                            </CaptionTop>
                            <CaptionBottom>
                                {item.packages.map((pkg, index) => (
                                    <BtnContainer>
                                        <StyledPackageCard key={index} type={pkg.type} price={pkg.price} />
                                    </BtnContainer>
                                ))}
                            </CaptionBottom>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </CarouselIs>
        </Div>
    );
}

export default CardComponentCarousel;