import styled from "styled-components"
import bgImage from "../assets/Background-color/bg2.jpg"
import Included from "./Included"
import Excluded from "./Excluded"

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
const PackageDetails = () => {
  return (
    <Container>
      <Included />
      <Excluded />
    </Container>

  )
}

export default PackageDetails