import styled from "styled-components"

const Div = styled.div`
margin:5% auto 2%;
`
const H1 = styled.h1`
font-size:clamp(2rem, 2.3vw, 2.8rem);
font-family: "Lora", serif;
font-weight:700;
text-transform:capitalize;
color:#44233B;
`
export const SubHeading = ({ subHeading, style }) => {
    return (
        <Div>
            <H1 style={style}>{subHeading}</H1>
        </Div>
    )
}