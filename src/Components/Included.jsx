import React from 'react'
import { SubHeading } from './SubHeading'
import styled from 'styled-components'

const Ul = styled.ul`
margin:0;
text-align:left;
font-size:1.5rem;
// text-transform:capitalize;
`
const Li = styled.li`
color:#FFFFF7;
line-height:1.7;
`

const Span = styled.span`
font-family:"Lora", serif;
color:black;
font-weight:bold;
`

const Included = () => {
    return (
        <div>
            <SubHeading subHeading={"What's Included In Char Dham Yatra Packages"} style={{ color: "white" }} />
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
        </div>
    )
}

export default Included