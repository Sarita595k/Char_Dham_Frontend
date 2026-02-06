import styled from 'styled-components'
import { SubHeading } from './SubHeading'

const P = styled.p`
max-width:100%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.2rem, 2vw,1.6rem);
color:#7E4555`

const ImportantNotes = () => {
    return (
        <div>
            <SubHeading subHeading={"Important Note (Please Read)"} />
            <P><b>The final Char Dham Yatra itinerary will be shared after booking confirmation.</b>
                The detailed day-wise plan may vary based on the <b>package selected, hotel category, travel mode (road / helicopter), weather conditions, and government regulations</b> prevailing at the time of travel.
                We ensure that the finalized itinerary is <b>practical, safe, and aligned with real-time ground conditions</b>, keeping pilgrim comfort and safety as the top priority.</P>
        </div>
    )
}

export default ImportantNotes