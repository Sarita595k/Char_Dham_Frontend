import { Button, Container } from "react-bootstrap"
import styled from "styled-components"
import { Buttons } from "./Buttons"

const CardCont = styled(Container)`
box-shadow:.1rem .2rem .5rem #e4dadbff;
margin-bottom:2rem;

 @media (max-width: 659px) {
    box-shadow: none;
  }
`
const Type = styled.p`
font-family: "Protest Revolution", sans-serif;
font-weight:400;
font-size:1.6rem;
`
const Price = styled.p`
font-size:1.3rem;`

export const PackageCard = ({ type, price }) => {
    return (
        <CardCont>
            <Type>{type}</Type>
            <Price>{price}</Price>
            <Buttons type={type} />
        </CardCont>)
}