import { FaLocationArrow, FaPhone, FaWhatsapp, } from "react-icons/fa"
// import { IoIosTime } from "react-icons/io"
import styled from "styled-components"

const Div = styled.div`
padding-left:clamp(5%,2vw,7%);
// border:1px solid black;
text-align:left;
margin-top:clamp(-5%,2vw, -10%);
margin-bottom:2rem;

@media(min-width:660px){
margin:5%;
}
`
const Heading = styled.h1`
font-size:clamp(1.7rem,1.6vw, 2rem);
padding-bottom:clamp(1.3rem,1.6vw,2rem);
color:white;
`
const LinkP = styled.p`
font-size:clamp(1.4rem,1.6vw,1.8rem);
text-transform:capitalize;
`
const Links = styled.a`
color:white;
text-decoration:none;
padding-left:1.2rem;
`
export const GetInTouch = () => {
    const phoneNumber = 918770872054
    const whatsappMessage = `Hi, I'm interested in your Char Dham Package. Please share details.`
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    return (
        <Div>
            <Heading>Get In Touch</Heading>
            <LinkP><FaPhone /><Links href="tel:+918770872054">call us</Links></LinkP>
            <LinkP><FaWhatsapp /><Links href={whatsappLink} target="_blank" rel="noreferrer">Whatsapp</Links></LinkP>
            <LinkP><FaLocationArrow /><Links href="/">Yugen India Travel</Links> </LinkP>
        </Div>
    )
}
