import React from 'react'
import { SubHeading } from '../Components/SubHeading'
import styled from 'styled-components'

const P = styled.p`
max-width:100%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);
color:#7E4555`

const HealthAndSafety = () => {
    return (
        <div>
            <SubHeading subHeading="Health & Safety Advisory" />
            <P>Char Dham Yatra involves high-altitude travel. Pilgrims with heart, BP, or breathing issues should consult a doctor before planning. Weather conditions may cause delays; safety always comes first.
            </P>
        </div>
    )
}

export default HealthAndSafety