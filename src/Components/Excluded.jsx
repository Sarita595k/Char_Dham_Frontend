import { SubHeading } from './SubHeading'
import styled from 'styled-components'

const Div = styled.div`
width:45%;
padding:2rem 0;
margin:.9rem;
// border:1px solid rgba(255,255,255,0.15);
text-align:left;

@media (max-width:780px){
width:100%;
}
`

const ListCont = styled.div`
width:90%;
`
const Ul = styled.ul`
margin:0;
text-align:left;
font-size:1.5rem;
// text-transform:capitalize;
`
const Li = styled.li`
  color:#C9D6E2;
  line-height:1.8;
  margin-bottom: 0.8rem;
  font-size:1.45rem;
`;


const Span = styled.span`
  font-family:"Lora", serif;
  color:#FFFFFF;
  font-weight:600;
  margin-right: 0.4rem;
`;


const Excluded = () => {
    return (
        <Div>
            <SubHeading subHeading={"What's Included In Char Dham Yatra Packages"} style={{
                color: "#FFFFFF",
                textShadow: "0 4px 20px rgba(255,183,3,0.35)"
            }} />
            <ListCont>
                <Ul>
                    <Li><Span>Air/Rail Tickets :</Span> Travel to/from the starting point (Haridwar/Dehradun/Delhi)</Li>
                    <Li><Span>Lunch & Personal Snacks :</Span> Only breakfast and dinner are usually included</Li>
                    <Li><Span>Pony/Palki Charges :</Span> Paid separately at Yamunotri & Kedarnath if used</Li>
                    <Li><Span>Helicopter Tickets:</Span> Not included unless clearly mentioned in the plan</Li>
                    <Li><Span>VIP Darshan Fees :</Span> Subject to temple rules; not always guaranteed</Li>
                    <Li><Span>Medical Expenses :</Span>  Personal medicines or hospitalization costs not covered</Li>
                    <Li><Span>Porter Services :</Span> For carrying luggage during treks or temple visits</Li>
                    <Li><Span>Extra Hotel Services :</Span> Room heaters, laundry, or extra meals not listed</Li>
                    <Li><Span>Entry Fees :</Span> At sightseeing points outside of the main Char Dham circuit</Li>
                    <Li><Span>GST/Taxes :</Span> May be extra unless specifically stated as inclusive</Li>
                </Ul>
            </ListCont>
        </Div>
    )
}

export default Excluded