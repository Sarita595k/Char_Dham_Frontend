import styled from "styled-components"
import bgImage2 from "../assets/Background-color/bg1.png"
import { GetInTouch } from "./GetInTouch"
import { Link } from "react-router-dom"
import logo from "../assets/Logo/YugenIndiaLogo.png"
import logo2 from "../assets/Logo/skyLinkLogo.png"
import Contact from "./Contact"

const Div = styled.div`
margin-top:clamp(3rem, 2vw, 5rem);
padding-bottom:clamp(3rem, 2vw, 5rem);
width:100%;
max-height:100vh;
background-image:  linear-gradient(
      rgba(68, 35, 59, 0.8),   /* overlay color */
      rgba(68, 35, 59, 0.5)
    ),url(${bgImage2});
backround-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
align-items:flex-start;
justify-content:space-evenly;


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
const P = styled.p`
max-width:90%;
margin-left:3.1rem;
font-family: "Poppins", sans-serif;
font-size:clamp(1.4rem,1.6vw,1.8rem);
text-transform:capitalize;
color:white;`
// const LinksWrapper = styled.div`
// display:flex;
// flex-direction:column;
// align-items:flex-start;
// width:100%;
// `
const LinkIs = styled(Link)`
margin-left:clamp(10%, 1.6vw, 6%);
display:block
width:100%;
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
            <Link to="/"><Image src={logo}></Image></Link>
            <GetInTouch />

            {/* <LinksWrapper> */}
            <LinkIs to="/privacy">Privacy Policy</LinkIs>
            <LinkIs to="/refund">Refund Policy</LinkIs>
            <LinkIs to="/terms">Terms and Conditions</LinkIs>
            {/* </LinksWrapper> */}

            <P>powered by: <Link to="/"><Image src={logo2}></Image></Link></P>
        </Div>
    )
}

export default Footer