import { Button, Card, Col, Row } from "react-bootstrap"
import { details } from "./package"
import styled from "styled-components"
import { PackageCard } from "./PackageCard"
import { Buttons } from "./Buttons"

const HeroContainer = styled(Row)`
padding:1.4rem;
`
const MainContainer = styled(Card)`
box-shadow:.1rem .2rem .5rem #FE4555;
background-color:#f8f9fa;
height:100%;
`
const Container = styled.div`
display:flex;
flex-direction:column;
`
const PackageContainer = styled.div`
display:flex;
flex-direction:row;
`
const ImageWrapper = styled.div`
width:100%;
height:25rem;
overflow:hidden;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
opacity:0.8;
transition:all .5s ease-in-out;

&:hover{
transform:scale(1.1);
}
`

const TextWrapper = styled.div`
width:100%;
`
const Time = styled.button`
font-size:1.5rem;
padding:0 6rem .9rem;
background-image:linear-gradient(90deg,#7E4555 0%, rgba(135, 26, 88, 1) 100%);
color:white;
border:none;
clip-path: polygon(
    0% 0%,  
    100% 0%,
    80% 100%,
    20% 100% 
  );
`

const H3 = styled.h3`
padding-top:1rem;
font-size:2.1rem;
text-transform:capitalize;
`
const List = styled.li`
font-size:1.3rem;
display:inline-flex;
align-items:center;
padding:.5rem 1rem;
text-transform:capitalize;
`
const ListP = styled.p`
font-size:1.5rem;
margin-top:.7rem;
text-transform:capitialize;
`
export const CardComponent = () => {

    return (
        <HeroContainer className="g-4">
            {details.map(detail => (
                <Col xs={6} md={6} lg={4} key={detail.id}>
                    <MainContainer key={detail.id}>
                        <Container>
                            <ImageWrapper className="image">
                                <Image src={detail.imageUrl} alt="card image1" />
                            </ImageWrapper>
                            <TextWrapper className="text">
                                <Time>{detail.time}</Time>
                                <H3>{detail.title}</H3>
                                {detail.included.map((includ, index) => (
                                    <List key={index}>{includ}</List>
                                ))}
                            </TextWrapper>
                        </Container>
                        <ListP>Itinerary avaiable on request</ListP>
                        <hr style={{ margin: "0" }} />
                        <PackageContainer>
                            {detail.packages.map((pkg, index) =>
                            (<PackageCard key={index}
                                type={pkg.type}
                                price={pkg.price} />))}
                        </PackageContainer>
                    </MainContainer>
                    {/* <Buttons type={type} /> */}
                </Col>
            ))}

        </HeroContainer>)
}