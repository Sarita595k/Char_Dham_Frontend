import styled from "styled-components"

const Div = styled.div`
margin:5% auto 2%;
`
const H1 = styled.h1`
font-size:clamp(2.4rem,4vw,4.4rem);
font-family: "Lora", serif;
font-weight:700;
text-transform:capitalize;
color:#44233B;
`
export const Heading = ({ heading }) => {
    return (
        <Div>
            <H1>{heading}</H1>
        </Div>
    )
}