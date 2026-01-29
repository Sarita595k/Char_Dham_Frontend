import styled from "styled-components"
import bgImage2 from "../assets/Background-color/bg1.png"
import { GetInTouch } from "./GetInTouch"
import logo from "../assets/Logo/YugenIndiaLogo.png"
import { Link } from "react-router-dom"

const Div = styled.div`
margin-top:clamp(3rem, 2vw, 5rem);
padding-bottom:clamp(3rem, 2vw, 5rem);
width:100%;
max-height:70vh;
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

@media(min-width:660px){
// top:10rem;
flex-direction:row;
justify-content:space-between;
}
`

const Image = styled.img`
// border:1px solid black;
position:inline;
padding:0;
margin-top:clamp(-4rem,2vw,-8rem);
height:clamp(13rem,35vw,30rem);
width:clamp(13rem,35vw,30rem);
`
const LinkIs = styled(Link)`
margin-left:clamp(5%,1.6vw,7%);
text-align:left;
color:white;
text-decoration:none;
padding:.4rem;
font-size:clamp(1.4rem,1.6vw,1.8rem);
text-transform:capitalize;
`
const Footer = () => {
    return (
        <Div>
            <Image src={logo}></Image>
            <GetInTouch />
            <LinkIs to="/privacy">Privacy Policy</LinkIs>
            <LinkIs to="/refund">Refund Policy</LinkIs>
            <LinkIs to="/terms">Terms and Conditions</LinkIs>
        </Div>
    )
}

export default Footer