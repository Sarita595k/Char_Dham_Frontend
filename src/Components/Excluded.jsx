import { SubHeading } from './SubHeading'
import styled from 'styled-components'

const Div = styled.div`
width:45%;
padding:2rem 0;
margin:.9rem;
// border:1px solid rgba(255,255,255,0.15);
text-align:left;
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
                    <Li><Span>Transportation :</Span>Private SUV, tempo traveller, or helicopter(in premium plans)</Li>
                    <Li><Span>Accommodation :</Span> Hotels, guesthouses, or camps based on package type</Li>
                    <Li><Span>Meals :</Span> Pure vegetarian breakfast and dinner (Jain meals on request)</Li>
                    <Li><Span>Temple Guidance:</Span> Local guide support at key temple locations</Li>
                    <Li><Span>Permits :</Span> Assistance with Char Dham registration and biometric process</Li>
                    <Li><Span>Driver Charges :</Span> Toll tax, parking, fuel, and driver allowance included</Li>
                    <Li><Span>Medical Kit :</Span> Basic first aid box for emergency needs during travel</Li>
                    <Li><Span>VIP Darshan :</Span> Available in select deluxe or helicopter packages</Li>
                    <Li><Span>Pony/Palki Options :</Span> Arranged for Yamunotri and Kedarnath treks if needed</Li>
                </Ul>
            </ListCont>
        </Div>
    )
}

export default Excluded