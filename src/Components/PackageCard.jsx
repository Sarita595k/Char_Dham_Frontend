import { Container } from "react-bootstrap"
import styled from "styled-components"

const CardCont = styled(Container)`
box-shadow:.1rem .1rem .4rem #a01073ff;
margin-bottom:2rem;
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
        </CardCont>)
}