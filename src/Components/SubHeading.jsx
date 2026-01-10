import styled from "styled-components"

const Div = styled.div`
margin:5% auto 2%;
`
const H1 = styled.h1`
font-size:2.4rem;
font-family: "Lora", serif;
font-weight:700;
text-transform:capitalize;
color:#44233B;
`
export const SubHeading = ({ subHeading }) => {
    return (
        <Div>
            <H1>{subHeading}</H1>
        </Div>
    )
}