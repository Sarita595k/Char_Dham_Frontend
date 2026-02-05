import { Heading } from './Heading'
import { SubHeading } from './SubHeading'
import styled from 'styled-components'

const MainContainer = styled.div`
max-width:clamp(100vw,45vw, 90vw);
// margin-left:clamp(2rem,1.6vw,3rem);
`
const HeadTitle = styled.h2`
padding-top:clamp(1.3rem,1.6vw,2.3rem);
font-weight:500;
font-family: "Poppins", sans-serif;
font-size:clamp(1.7rem,1.6vw,1.9rem);
color:#4A2C2A;`

const Title = styled.h2`
padding-top:clamp(1.3rem,1.6vw,2.3rem);
font-weight:600;
font-family: "Poppins", sans-serif;
font-size:clamp(1.3rem,1.6vw,1.9rem);
color:#4A2C2A;`

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
`
const Itinerary = () => {
    return (
        <MainContainer>

            <Heading heading={`Char Dham Yatra Itinerary – 9 Nights 10 Days (Trusted Pilgrimage Package)`} />
            <br /><P>Plan your sacred <b> Char Dham Yatra</b> with a well-paced, safety-first itinerary covering <b>Yamunotri Temple, Gangotri Temple, Kedarnath Temple, and Badrinath Temple.</b> <br /><br />
                This 9 Nights / 10 Days Char Dham Yatra itinerary is designed for <b>comfortable travel, proper acclimatisation, and smooth darshan</b>, making it ideal for families, senior citizens, and first-time pilgrims.</P>
            <SubHeading subHeading="Overview of Char Dham Yatra Package" />
            <P>The Char Dham Yatra is one of the most sacred Hindu pilgrimages in India, undertaken through the Himalayan regions of Uttarakhand. Our itinerary follows the <b>traditional route sequence</b> and avoids rushed travel or unsafe same-day long drives.</P>
            <HeadTitle>Package Highlights</HeadTitle>
            <Ul>
                <Li>Covers all four Char Dhams in correct order</Li>
                <Li>Balanced travel pace with sufficient rest</Li>
                <Li>Ground-level support and local coordination</Li>
                <Li>Transparent guidance (no false promises)</Li>
            </Ul>
            <SubHeading subHeading="Char Dham Yatra Itinerary – Day Wise Plan" />

            {/* day 1 */}
            <Title>Day 01: Haridwar / Dehradun – Rishikesh – Barkot</Title>
            <P>Arrival at Haridwar or Dehradun. Proceed to Rishikesh for <b>Char Dham Yatra registration and vehicle Green Card.</b>
                <br /> After completing government formalities, drive to Barkot (approx. 216 km).
                <br /><br /><b>Note:</b> Green Card verification may take 4–5 hours as per government procedure.
                Overnight stay at Barkot.
            </P>
            <hr />

            {/* day 2 */}
            <Title>Day 02: Barkot – Yamunotri – Barkot</Title>
            <P>Early morning drive to Janakichatti / Phoolchatti. Start the trek to Yamunotri Temple (approx. 6 km one way).
                <br /><br />
                <b>  Options available:</b>
                <ul>
                    <li> Walking</li>
                    <li>  Pony / Doli (at own cost)</li>
                </ul>

                <b>At Yamunotri:</b>

                <ul>
                    <li>  Holy dip at Jamunabai Kund</li>
                    <li> Darshan & Pooja of Goddess Yamuna</li>
                </ul>
                Return to Barkot by evening. Overnight stay at Barkot.
            </P>
            <hr />

            {/* day 3 */}
            <Title>Day 03: Barkot – Uttarkashi</Title>
            <P>Morning free till lunch. <br />
                Post-lunch drive to Uttarkashi (approx. 80 km). Hotel check-in on arrival.
                <br /> Evening visit to <b>Kashi Vishwanath Temple, Uttarkashi</b>, located on the banks of River Ganga.
                <br />Overnight stay at Uttarkashi.
            </P>
            <hr />

            {/* day 4 */}
            <Title>Day 04: Uttarkashi – Gangotri – Uttarkashi</Title>
            <P>Early morning departure (around 4:00 AM) to Gangotri (approx. 100 km / 5 hours).
                <br /><br />

                <b> En-route:</b>
                <ul>
                    <li> Holy dip at Gangnani hot water springs</li>
                    <li>Scenic drive through Harsil Valley</li>
                </ul>

                <b>At Gangotri:</b>
                <ul>
                    <li>  Holy dip in River Bhagirathi</li>
                    <li> Temple darshan and pooja</li>
                </ul>
                Return to Uttarkashi by evening. Overnight stay at Uttarkashi.

            </P>
            <hr />

            {/* day 5 */}
            <Title> Day 05: Uttarkashi – Guptkashi</Title>
            <P>After breakfast, drive to Guptkashi (approx. 230 km).
                <br />
                En-route view the Mandakini River at Tilwara. <br /><br />
                <b>On arrival:</b>
                <ul>
                    <li>  Hotel check-in</li>
                    <li>Visit Ardh Narishwar Temple</li>
                </ul>
                Overnight stay at Guptkashi.
            </P>
            <hr />

            {/* day 6 */}
            <Title>  Day 06: Guptkashi – Kedarnath</Title>
            <P>Early morning drive to Sonprayag, then take a government jeep to Gaurikund.
                <br />From Gaurikund, begin the trek to Kedarnath (approx. 17 km one way).
                <br /><br />
                <b>  Travel options:</b>
                <ul>
                    <li>  Trekking</li>
                    <li>Pony / Doli</li>
                    <li> Helicopter (from Phata / Sirsi / Guptkashi helipad)</li>
                </ul>
                After darshan and pooja, <b> overnight stay at Kedarnath Ji.</b>
            </P>
            <hr />

            {/* day 7 */}
            <Title> Day 07: Kedarnath – Guptkashi</Title>
            <P>Early morning darshan (optional). <br />
                Trek down to Gaurikund and return to Guptkashi via Sonprayag.
                <br /> Hotel check-in on arrival.
                <br />Overnight stay at Guptkashi.
            </P>
            <hr />

            {/* day 8 */}
            <Title> Day 08: Guptkashi – Pipalkoti</Title>
            <P>After breakfast, drive to Pipalkoti.<br />
                En-route witness famous Prayag (river confluences) of Uttarakhand.
                <br /> Evening free for rest and acclimatization.
                <br />Overnight stay at Pipalkoti.
            </P>
            <hr />

            {/* day 9*/}
            <Title>  Day 09: Pipalkoti – Badrinath – Pipalkoti</Title>
            <P>After breakfast, drive to Badrinath (approx. 80 km).
                <br /><br />
                <b>   At Badrinath:</b>
                <ul>
                    <li>Holy bath at Tapt Kund</li>
                    <li>Darshan of Badrivishal</li>
                    <li>  Visit Brahma Kapal (ancestral rituals)</li>
                </ul>

                <b> Optional sightseeing (time permitting):</b>
                <ul>
                    <li>   Mana Village</li>
                    <li>Vyas Gufa</li>
                    <li>  Saraswati River origin</li>
                </ul>
                Return to Pipalkoti. Overnight stay at Pipalkoti.
            </P>
            <hr />
            {/* day 10 */}
            <Title>Day 10: Pipalkoti – Haridwar / Dehradun</Title>
            <P>After breakfast, drive to Pipalkoti.<br />
                After breakfast, drive back to Haridwar or Dehradun.
                <br />Drop off at the railway station/airport for onward journey.

            </P>
            <hr />
            {/* <SubHeading subHeading="Overview of Char Dham Yatra Package" /> */}
        </MainContainer >
    )
}

export default Itinerary