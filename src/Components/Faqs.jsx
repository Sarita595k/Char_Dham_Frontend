import styled from "styled-components"
import { Accordion } from "react-bootstrap"
import { Heading } from "./Heading"

const AccordionContainer = styled(Accordion)`
&& {
 background-color:transparent;
 color:yellow;
 margin:auto;
}
 && .accordion-item{
 background-color:transparent;
padding:clamp(1rem,2vw, 1.3rem);
 }
&& .accordion-button,
&& .accordion-button:not(.collapsed),
&& .accordion-button:focus,
&& .accordion-button:active {
background-color:transparent !important;
 color:#44233B;
 font-size:clamp(1.3rem, 1.6vw, 1.8rem);
 font-family: "Lora", serif;
 font-weight:600;
}

.accordion-body{
text-align:left;
color:#694C5C;
font-size:clamp(1.1rem,1.6vw,1.5rem);
}
`
const Faqs = () => {
    return (
        <div>
            <Heading heading={"Frequently asked questions"} />
            <AccordionContainer>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the Char Dham Yatra tour?</Accordion.Header>
                    <Accordion.Body >
                        The Char Dham Yatra tour is a spiritual journey to four sacred Hindu temples in Uttarakhand—Yamunotri, Gangotri, Kedarnath, and Badrinath. Thousands of devotees visit every year to seek blessings and peace. The journey covers long mountain routes, scenic locations, river valleys, and spiritual experiences.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 2 */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header> How many days does it take to complete Char Dham Yatra by road?</Accordion.Header>
                    <Accordion.Body>
                        A Char Dham Yatra by road usually takes 10 to 12 days depending on weather, travel pace, and rest days. It includes road travel between all four shrines with night halts in towns like Barkot, Uttarkashi, Guptkashi, and Rudraprayag before reaching Kedarnath and Badrinath.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 3 */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What is the best time for Char Dham Yatra tour?</Accordion.Header>
                    <Accordion.Body>
                        The best time to travel is from May to mid-June and again from September to mid-October. These months have clear weather and open roads. Avoid the monsoon season (July–August) because of frequent landslides, travel delays, and safety concerns on mountain highways.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 4 */}
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the cost of a Char Dham Yatra tour?</Accordion.Header>
                    <Accordion.Body>
                        The cost varies depending on the package type, hotel category, vehicle, and travel month. Budget road trips start approximately around ₹30,000 to ₹50,000 per person, while helicopter tours range around ₹2,00,000 to ₹2,50,000 per person. Prices may increase during peak season and festival dates.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 5 */}
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Is registration required for Char Dham Yatra?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes, Char Dham Yatra registration is compulsory for all pilgrims. The government uses it for safety monitoring and route planning. Registration can be completed online or at authorized counters. It helps track pilgrim movement in case of weather issues or emergencies during the journey.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 6 */}
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What type of accommodation is available on the Char Dham route?</Accordion.Header>
                    <Accordion.Body>
                        Accommodation ranges from basic lodges and dharamshalas to deluxe and premium hotels depending on the location. Areas near Yamunotri and Kedarnath generally offer simpler rooms due to terrain limitations, while places like Badrinath and Joshimath provide more comfortable and better-equipped hotels for families.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 7 */}
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Is VIP darshan available during Char Dham Yatra?</Accordion.Header>
                    <Accordion.Body>
                        VIP or priority darshan is available at some temples, especially when travelling through helicopter packages. However, it depends on temple rules, crowd levels, and official permissions. It helps reduce waiting time and ensures smooth entry for elderly travellers and families.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 8 */}
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Is medical support available during Char Dham Yatra?</Accordion.Header>
                    <Accordion.Body>
                        Basic medical centres, ambulance services, and first-aid support are available at major stops on the route. However, travellers with heart, breathing, or high blood pressure problems must consult a doctor before travelling. Carrying prescribed medicines and fitness precautions is strongly recommended.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 9 */}
                <Accordion.Item eventKey="8">
                    <Accordion.Header>Are ATMs available along the Char Dham route?</Accordion.Header>
                    <Accordion.Body>
                        ATMs are available in major towns like Haridwar, Rishikesh, Uttarkashi, Guptkashi, Rudraprayag, and Joshimath. However, remote areas near Yamunotri and Kedarnath may not have functioning ATMs due to connectivity issues. It’s wise to carry sufficient cash for local expenses and emergencies.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 10 */}
                <Accordion.Item eventKey="9">
                    <Accordion.Header>Do I need a permit for Char Dham Yatra?</Accordion.Header>
                    <Accordion.Body>
                        Registration is mandatory, and some restricted zones require additional permissions depending on travel mode. Trekking routes like Kedarnath monitor pilgrim entry for safety. Official registration also helps authorities manage crowd control and emergency responses during peak travel periods.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 11 */}
                <Accordion.Item eventKey="10">
                    <Accordion.Header> How physically demanding is Char Dham Yatra?
                    </Accordion.Header>
                    <Accordion.Body>
                        The journey involves long road travel and treks at Yamunotri and Kedarnath, which can be tiring. Altitude can cause breathlessness or fatigue. Travellers should maintain a slow pace, hydrate well, avoid overexertion, and seek assistance options like ponies, palkis, or helicopter upgrades if needed.
                    </Accordion.Body>
                </Accordion.Item>

                {/* question 12 */}
                <Accordion.Item eventKey="11">
                    <Accordion.Header>Are vegetarian meals compulsory on the route?
                    </Accordion.Header>
                    <Accordion.Body>
                        Yes, food around temple areas is strictly vegetarian. Alcohol, non-vegetarian food, and smoking are prohibited in religious zones. Pilgrims are encouraged to maintain purity and respect the sacred environment. Special Jain food or satvik meals can be arranged on request at some locations.
                    </Accordion.Body>
                </Accordion.Item>
            </AccordionContainer>
        </div>
    )
}

export default Faqs