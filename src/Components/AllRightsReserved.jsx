import styled from "styled-components"

const Div = styled.div`
text-align:center;
font-size:clamp(1.4rem, 1.6vw,1.8rem);
margin:clamp(1rem,1.6vw,2vw);
color: rgba(68, 35, 59, 0.8);
`
const Link = styled.a`
text-decoration:none;
color:rgba(68, 35, 59, 0.8);
font-weight:600;
`
const AllRightsReserved = () => {
    const companyName = "Yugen India"
    const currentYear = new Date().getFullYear()
    return (
        <Div>
            &copy; {currentYear} All rights Reserved by <Link href="/">{companyName}</Link>
        </Div>
    )
}

export default AllRightsReserved