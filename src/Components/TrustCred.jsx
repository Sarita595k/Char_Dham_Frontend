import { SubHeading } from './SubHeading'
import styled from 'styled-components'

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
const TrustCred = () => {
    return (
        <div>
            <SubHeading subHeading={"Trust & Credibility "} />
            <SubTitle>Hands-on experience managing Char Dham yatras</SubTitle>
            <Ul>
                <Li>Clear inclusions, exclusions & policies</Li>
                <Li>Assistance with government registration</Li>
                <Li>Safety-first approach in weather or road disruptions</Li>
            </Ul>
            <P>We prioritise <b>pilgrim safety and spiritual experience over rushed schedules.</b></P>
        </div>
    )
}

export default TrustCred