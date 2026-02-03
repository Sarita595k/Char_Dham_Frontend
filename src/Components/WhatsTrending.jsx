import React from 'react'
import { SubHeading } from './SubHeading'
import { Card } from 'react-bootstrap'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Container = styled.div`
padding:2rem;

`
const Div = styled.div`
display:flex;
justify-content:center;
margin-top:2rem;
`

const CardContainer = styled(Card)`
background-color:transparent;
padding:.7rem;
`
const CardBody = styled(Card.Body)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Title = styled(Card.Title)`
text-transform:capitalize;
font-size:clamp(2rem,1.6vw,2rem);
font-weight:400;
 font-family:"Lora", serif;
 `

const Subtitle = styled(Card.Subtitle)`
max-width:clamp(70%,45vw,100%);
padding-top:clamp(1rem,1.6vw,2rem);
font-weight:400;
color:#CC3366;
text-transform:capitalize;
font-size:clamp(1.3rem,1.6vw,2rem);
 padding-bottom:clamp(2rem,1.6vw,2.5rem);
`
const CardText = styled(Card.Text)`
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);
`

const LinkIs = styled(Link)`
text-decoration:none;
text-transform:capitalize;
  font-size:1.3rem;
  background-color:#7E4555;
  color:white;
  border:none;
  padding:.8rem 1rem;
  cursor:pointer;
  transition:all .5s ease-in-out;

  &:hover{
    background-color:transparent;
    border:1px solid #7E4555;
    color:#7E4555;
  }
`
const WhatsTrending = () => {
    return (
        <Container>
            <SubHeading subHeading="what's trending" />
            <Div>
                <CardContainer style={{ width: '32rem' }}>
                    <CardBody>
                        <Title>most booked package with us</Title>
                        <Subtitle className="mb-2">feel the religious vibes with our exclusive group packages!</Subtitle>
                        <CardText>
                            The Char Dham Yatra is one of the most
                            sacred Hindu pilgrimages in India,
                            undertaken through the Himalayan
                            regions of Uttarakhand.
                            Our itinerary follows the
                            traditional route sequence and
                            avoids rushed travel or unsafe
                            same-day long drives.
                        </CardText>
                        <LinkIs to="/trending">check itinerary</LinkIs>
                        {/* <Card.Link href="#">Another Link</Card.Link> */}
                    </CardBody>
                </CardContainer>
            </Div>
        </Container>
    )
}

export default WhatsTrending