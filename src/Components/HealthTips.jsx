import styled from 'styled-components'
import { SubHeading } from './SubHeading'

const P = styled.p`
max-width:100%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);
color:#7E4555`

const Ul = styled.ul`
color:#4A2C2A;
list-style-type:disc;
text-align:left;
`
const Li = styled.li`
font-size:clamp(1.3rem,2vw,1.6rem);
font-weight:500;
padding-top: .3rem;
`

const HealthTips = () => {
    return (
        <div>
            <SubHeading subHeading={"Health, Altitude & Safety Tips"} />
            <Ul>
                <Li>Altitude sickness: symptoms & prevention</Li>
                <P> Layman’s checklist: acclimatise, hydrate, avoid alcohol, know symptoms, carry Diamox only on doctor advice.</P>

                <Li>Medical facilities & emergency contacts</Li>
                <P> Suggest nearest hospitals & mountain rescue numbers; recommend travel insurance & ambulance/air evacuation info.</P>

                <Li>Packing checklist (downloadable)</Li>
                <P> Clothes (layers), footwear, medicines, first-aid, power bank, copies of documents, rain gear, trekking poles, torch, sunscreen.</P>
            </Ul>

            <SubHeading subHeading={"Accommodation & Food"} />
            <Ul>
                <Li>Types of stays (hotels, guesthouses, ashrams, dharamshalas)</Li>
                <P> Quick notes on booking: book early in peak season (May, autumn), what to expect at high altitudes.
                </P>

                <Li>Sample hotel categories (budget / mid / premium) and approximate price ranges</Li>
                <P>  Provide practical advice: carry cash, limited card POS in remote areas.</P>

                <Li> Food & water safety</Li>
                <P> Tips on what’s safe to eat; bottled water, boiled water, carry ORS.
                </P>
            </Ul>

            <SubHeading subHeading={"2026 Opening & Closing Dates (Temple schedules)"} />
            <Ul style={{ fontWeight: "500", fontSize: "1.5rem", textTransform: "capitalize" }}>Official opening dates
                <Li style={{ fontWeight: "400" }}>Yamunotri — opening (reported) <b>19–30 April 2026</b> (show as “subject to official confirmation”).</Li>
                <Li style={{ fontWeight: "400" }}>Gangotri — opening <b>19 April 2026</b> (subject to confirmation).</Li>
                <Li style={{ fontWeight: "400" }}>Kedarnath — opening <b>22 April 2026</b> (reported) </Li>
                <Li style={{ fontWeight: "400" }}>Badrinath — opening <b>24 April 2026</b> (reported).</Li>
            </Ul>

            <SubHeading subHeading={"Best Time to Visit & Weather"} />
            <P><b>Best months:</b> Late <b>April</b> → mid-June (post-opening) and <b>September</b> → <b>October</b> </P>
            <P>(post-monsoon, crisp weather and clear skies). Monsoon (July–August) brings landslides and road closures — plan around it.
            </P>
            <Ul style={{ fontWeight: "500", fontSize: "1.5rem" }}>Weather snapshot (by month):
                <br />
                <Li style={{ fontWeight: "400", paddingTop: ".3rem" }}>April: melting snow, cold mornings, daytime pleasant at lower altitudes.</Li>
                <Li style={{ fontWeight: "400", paddingTop: ".3rem" }}>May–June: ideal window, stable weather on most days.</Li>
                <Li style={{ fontWeight: "400", paddingTop: ".3rem" }}>July–August: heavy rainfall risk; not recommended for road travel.</Li>
                <Li style={{ fontWeight: "400", paddingTop: ".3rem" }}>September–October: excellent visibility and autumn colours; roads re-open after monsoon.</Li>
            </Ul>
        </div>
    )
}

export default HealthTips