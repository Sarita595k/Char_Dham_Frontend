import { Heading } from './Heading'
import styled from 'styled-components'
import { TiTick } from "react-icons/ti";

const Div = styled.div`
margin-top:clamp(1%,2vw,3%);
display:flex;
flex-direction:column;
align-items:center;
color:#694c5c;
`

const P = styled.p`
max-width:80%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);`

const SubHeading = styled.h3`
padding:3% 0 1%;
color:#FD8F8F;
text-transform:uppercase;
font-size:clamp(1.5rem, 1.6vw,2rem);
`
const Ul = styled.ul`
list-style-type:none;
text-align:left;
`
const Li = styled.li`
font-size:clamp(1.3rem,2vw,1.6rem);
`
const WhoweAre = ({ heading }) => {
    return (
        <Div>
            <Heading heading={heading} />
            <P>Yugen India Travel is a growing, experience-driven travel organisation dedicated to spiritual and pilgrimage tourism across India. While we are a young company, our founder built this on over 10 years of hands-on expertise in designing and managing meaningful journeys.</P>
            <SubHeading>Our journey so far</SubHeading>
            <Ul>
                <Li><TiTick style={{ color: "#FD8F8F" }} />Successfully served 400+ devotees till date</Li>
                <Li><TiTick style={{ color: "#FD8F8F" }} />Specialized in group-based pilgrimage tours, especially Char Dham Yatra</Li>
                <Li><TiTick style={{ color: "#FD8F8F" }} />Planned operations to serve 800+ devotees in the 2026 season</Li>
            </Ul>
            <P> Every journey we design is backed by learning, ground experience, and on-field execution.</P>
        </Div>
    )
}

export default WhoweAre