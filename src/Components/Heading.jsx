import styled from "styled-components"

const Div = styled.div`
margin:5% auto 2%;
`
const H1 = styled.h1`
font-size:3.7rem;
font-weight:bold;
font-family: "Protest Revolution", sans-serif;
text-transform:uppercase;
color:#871a58ff;
`
export const Heading = ({ heading }) => {
    return (
        <Div>
            <H1>{heading}</H1>
        </Div>
    )
}