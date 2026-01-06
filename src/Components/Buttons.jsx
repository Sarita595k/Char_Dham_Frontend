// import { Button } from "react-bootstrap"
import styled from "styled-components"
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
padding:.6rem;
`

const Button = styled.a`
font-size:1.3rem;
background-color:rgba(135, 26, 88, 1);
color:white;
border:none;
padding:.8rem 1rem;
text-decoration:none;
transition:all .5s ease-in-out;

&:hover{
background-color:white;
// border:.1rem solid #871a58ff;
color:rgba(135, 26, 88, 1);
}`
export const Buttons = () => {
    return (
        <Container>
            <Button href="https://wa.me/919582085305"><FaWhatsapp /> Whatsapp</Button>
            <Button href="tel:+917303473668"><FaPhone /> Request Call</Button>
            <Button>Get free Quote</Button>
        </Container >
    )
}