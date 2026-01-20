import styled from "styled-components"
import bgImage2 from "../assets/Background-color/bg1.png"
import { GetInTouch } from "./GetInTouch"
import logo from "../assets/Logo/YugenIndiaLogo.png"

const Div = styled.div`
margin-top:clamp(3rem, 2vw, 5rem);
width:100%;
min-height:100vh;
background-image:  linear-gradient(
      rgba(68, 35, 59, 0.8),   /* overlay color */
      rgba(68, 35, 59, 0.5)
    ),url(${bgImage2});
backround-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
align-items:left;
justify-contents:space-evenly;

`

const Image = styled.img`
// border:1px solid black;
position:inline;
padding:0;
margin-top:clamp(-4rem,2vw,-8rem);
height:clamp(13rem,35vw,30rem);
width:clamp(13rem,35vw,30rem);

`
const Footer = () => {
    return (
        <Div>
            <Image src={logo}></Image>
            <GetInTouch />
        </Div>
    )
}

export default Footer