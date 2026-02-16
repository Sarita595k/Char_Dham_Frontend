import styled from "styled-components"

const Div = styled.div`
text-align:center;
overflow-x:hidden;
background-color:#A3A333;
padding:.7rem`

const H2 = styled.h2`
font-size:clamp(1.2rem,1.6vw,2rem);
text-transform:capitalize;
color:#4A2C2A;
`
const Alert2 = () => {
    return (
        <Div>
            <H2>we offer a family referral advantage for eligible bookings.</H2>
        </Div>)
}
export default Alert2