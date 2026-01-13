import styled from "styled-components"

const Div = styled.div`
margin:5% auto 2%;
`
const H1 = styled.h1`
font-size:4.4rem;
font-family: "Lora", serif;
font-weight:700;
text-transform:capitalize;
color:#44233B;

@media (max-width:660px){
font-size:3.3rem;
}
`
export const Heading = ({ heading }) => {
    return (
        <Div>
            <H1>{heading}</H1>
        </Div>
    )
}