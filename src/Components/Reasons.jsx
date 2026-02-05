import { SubHeading } from './SubHeading'
import styled from 'styled-components'

const P = styled.p`
max-width:100%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);
color:#7E4555`

const Ul = styled.ul`
color:#4A2C2A;
list-style-type:disc;
text-align:left;
`
const Li = styled.li`
font-size:clamp(1.3rem,2vw,1.6rem);
font-weight:500;
`
const Reasons = () => {
    return (
        <div>
            <SubHeading subHeading={"Why Choose Our Char Dham Yatra Package "} />
            <Ul>
                <Li>Experience-Driven Planning</Li>
                <P>Our itineraries are built from real on-ground Char Dham operations, not copied templates.</P>

                <Li>Correct Itinerary Flow </Li>
                <P>We avoid unsafe same-day return plans and unrealistic travel timings.</P>

                <Li> Honest & Transparent Guidance</Li>
                <P>No “guaranteed darshan” or fake helicopter promises. We explain real conditions clearly.</P>

                <Li> Local Network Support </Li>
                <P>Coordination with local drivers, hotels, and ground staff across Uttarakhand.</P>

            </Ul>
        </div>
    )
}

export default Reasons