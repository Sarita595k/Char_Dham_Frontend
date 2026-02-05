import React from 'react'
import styled from 'styled-components'
import { SubHeading } from './SubHeading'

const SubTitle = styled.p`
max-width:90%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.3rem, 2vw,1.6rem);
color:#7E4555;
font-weight:500;`

const P = styled.p`
max-width:100%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.2rem, 2vw,1.6rem);
color:#7E4555`

const Ul = styled.ul`
color:#4A2C2A;
list-style-type:disc;
text-align:left;
`
const Li = styled.li`
font-size:clamp(1.3rem,2vw,1.6rem);
`
const Book = () => {
    return (
        <div>
            <SubHeading subHeading={"Book Char Dham Yatra"} />
            <SubTitle> 🙏 Ready to Begin Your Char Dham Yatra? </SubTitle>
            <P> Speak with a real Char Dham travel expert and get:</P>
            <Ul>Personalized itinerary guidance
                <Li> Cost breakup</Li>
                <Li>Best travel dates based on your profile</Li>
            </Ul>
            <P>👉 Call or WhatsApp us now to plan your Char Dham Yatra
                (Limited slots available during peak season)</P>
        </div>
    )
}

export default Book