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
margin:clamp(1.3rem,1.6vw,2.8rem);

@media(min-width:660px){
display:none;
}

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

const ImageWrapper = styled.div`
position:relative;
width:100%;
height:32rem;
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
  pointer-events: none;
`
const CaptionTop = styled.div`
  position: absolute;
  top:clamp(1.3rem,1.6vw,1.6rem);
  left: 0;
  right: 0;

  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  pointer-events: auto;
  z-index: 2;
`;

const Time = styled.button`
  position: absolute;
  top: -1.2rem;

  font-size: clamp(1.5rem,1.6vw,1.6rem);
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
font-size:clamp(1.8rem, 1.6vw,2rem);
text-transform:capitalize;
`
const H3 = styled.h3`
margin-bottom:1.2rem;
font-size:(1.5rem,1.6rem,1.6rem);
color:rgb(206, 179, 199);
text-transform:capitalize;
`

const CaptionBottom = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  pointer-events: auto;
`;

const BtnContainer = styled.div`
color:rgb(245, 238, 243);
border:none;
pointer-events: auto;
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
      < CarouselIs data-bs-theme="dark"
        controls={true}
        indicators={true}
        interval={2000} // optional autoplay
        pause="hover">
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