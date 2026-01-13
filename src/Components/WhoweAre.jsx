import { Heading } from './Heading'
import styled from 'styled-components'
import { TiTick } from "react-icons/ti";

const Div = styled.div`
margin-top:3%;
display:flex;
flex-direction:column;
align-items:center;
color:#694c5c;
`

const P = styled.p`
width:80%;
font-family: "Poppins", sans-serif;
font-size:1.6rem;

@media (max-width:660px){
font-size:1.3rem;
}`

const SubHeading = styled.h3`
padding:3% 0 1%;
// background-image:url("../assets/background-color/journey.png);
color:#FD8F8F;
text-transform:uppercase;
font-size:1.9rem;

// @media (max-width:660px){
// font-size:1.6rem;
// }
`
const Ul = styled.ul`
list-style-type:none;
text-align:left;
`
const Li = styled.li`
font-size:1.6rem;
@media (max-width:660px){
font-size:1.3rem;
}
`
const WhoweAre = ({ heading }) => {
    return (
        <Div>
            <Heading heading={heading} />
            <P>Yugen India Travel is a growing, ePperience-driven travel organization dedicated to spiritual and pilgrimage tourism in India.
                Though we are a 2-year-old organization, our foundation is built on over 10 years of hands-on experience in the tour and travel industry.</P>
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