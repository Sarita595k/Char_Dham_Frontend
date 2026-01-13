import React from 'react'
// import { Heading } from './Heading'
import { Container } from 'react-bootstrap'
import { SubHeading } from './SubHeading'
import TourCard from './TourCard'
import styled from 'styled-components'

const ContainerIs = styled(Container)`
width:90%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
align-items:center;
justify-content:space-evenly;
margin-top:1rem;

@media (max-width:660px){
width:100%;
}
`
const CardWrapper = styled.div`
  width: 30%; /* desktop */

  @media (max-width: 992px) {
    width: 45%; /* tablet */
  }

  @media (max-width: 576px) {
    width: 48%; /* mobile → 2 cards per row */
  }
`;

const CharDhamAtGlance = ({ subHeading }) => {
    return (
        <div>
            <SubHeading subHeading={subHeading}></SubHeading>
            <ContainerIs>
                <TourCard title={"Starts from"} text={"Haridwar, Rishikesh, Dehradun, Delhi"} />
                <TourCard title={"tour type"} text={"Road & Helicopter"} />
                <TourCard title={"duration"} text={"6–12 Days"} />
                <TourCard title={"Tour Cost"} text={"₹40k–₹2.4L per person"} />
                <TourCard title={"Includes"} text={"Hotel, Meals, Transfers, VIP Darshan"} />
                <TourCard title={"Other Start Points"} text={"Mumbai, Hyderabad, Chennai, Bengaluru"} />
            </ContainerIs>
        </div>
    )
}

export default CharDhamAtGlance