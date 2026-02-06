import styled from "styled-components"
import Itinerary from "./Itinerary"
import bgImage from "../assets/Background-color/bg2.jpg"

const Container = styled.div`
margin-top:5%;
min-height:100%;
width:100%;
background-image:linear-gradient(
     #00000066
    ),url(${bgImage});
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:row;
flex-wrap:wrap;
gap:1rem;
justify-content:space-evenly;
`
const OnlyBg = () => {
    return (
        <Container>
        </Container>
    )
}

export default OnlyBg