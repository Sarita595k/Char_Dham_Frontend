import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { SubHeading } from './SubHeading'
// import RegistrationBtn from './RegistrationBtn';
import { useState } from 'react';
import styled from 'styled-components';

const Para = styled.p`
font-size:clamp(1.2rem, 1.6vw, 1.7rem);
text-align:left;
`
const ReadBtn = styled.button`
color:blue;
background-color:transparent;
border:none;
`
const CharDhamReg = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <SubHeading subHeading={"Char Dham Yatra Registration for 2026"} />
            <Accordion activeKey={open ? "0" : null}>
                <Card style={{ backgroundColor: "transparent", border: "none" }}>
                    <Card.Header>
                        <Para>
                            Char Dham Yatra Registration is mandatory for all
                            pilgrims traveling to Yamunotri, Gangotri, Kedarnath,
                            and Badrinath in 2026, whether by road, helicopter, palki,
                            pony, or trekking route. The Government of Uttarakhand
                            introduced compulsory registration to ensure safety,
                            crowd management, and real-time tracking.
                            Without valid registration, entry to temple premises and
                            check posts is not permitted, and travelers may face
                            delays or denial of access.
                            <ReadBtn
                                eventKey="0"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? "Read less" : "Read more"}
                            </ReadBtn></Para>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Para>
                                The registration is managed by the Uttarakhand Tourism Development Board (UTDB) and can be completed online or offline. Online registration is the most convenient way, allowing pilgrims to book their preferred dates in advance, upload identity details, and receive digital permits. Offline registration counters are available at major points like Haridwar, Rishikesh, Janki Chatti, Guptkashi, Phata, Sonprayag, Joshimath, Harsil, and Badrinath, but queues are long during peak season.
                                <br /><br />
                                Registration typically begins 1–2 months before the temple opening dates. For 2026, Char Dham temples are expected to open around late April to early May, depending on Akshay Tritiya and official announcements from temple committees. Pilgrims are advised to register early, especially for Kedarnath, as daily capacity limits apply.
                                <br /><br />
                                <strong>How to Register Online</strong><br />
                                <ol typeof='1'>
                                    <li>  Visit the official Uttarakhand Tourism website.</li>
                                    <li>Enter personal details like name, mobile number, age, and ID type.</li>
                                    <li> Upload a valid ID proof (Aadhaar, Passport, Driving License, Voter ID).</li>
                                    <li>  Select travel dates and temple sequence (Yamunotri, Gangotri, Kedarnath, Badrinath).</li>
                                    <li>Generate and download the Yatra Registration QR Code.</li>
                                    <li>Carry printed or digital QR code throughout travel.</li>
                                </ol>
                                <Para> Travelers must verify registration at check posts and temple gates by scanning the QR code.
                                    This helps authorities manage crowd flow and emergency assistance.</Para>
                                <br />
                                <strong>Kedarnath Biometric Verification</strong>
                                <br />
                                Kedarnath has a mandatory biometric verification
                                procedure for tracking pilgrims during the trek.
                                Verification is available at Haridwar, Rishikesh,
                                Guptkashi, Sonprayag, and Gaurikund.
                                Pilgrims must carry the same ID used during
                                registration. Without verification,
                                entry to the trek route is restricted.
                                <br /><br />

                                <strong>Registration for Helicopter Travelers</strong>
                                <br />
                                Helicopter passengers must complete separate registration in addition to helicopter booking. Boarding is only allowed after QR verification. Registration is checked again at Sersi, Phata, Guptkashi, and Kedarnath helipad points.
                                <br /><br />
                                <strong>Documents Required</strong>
                                <ul>
                                    <li> Valid ID proof (Aadhaar/Passport/Voter ID)</li>
                                    <li>Mobile number for OTP verification</li>
                                    <li>Emergency contact number</li>
                                    <li>Latest passport-size photo (optional)</li>
                                </ul>

                                <strong>Important Points to Remember</strong>

                                <ul>
                                    <li> Registration is mandatory for everyone, including children and senior citizens.</li>
                                    <li> One registration is required per traveler; group registration is available online.</li>
                                    <li>Carry printed and digital copies to avoid network issues.</li>
                                    <li>Without registration, entry at temple checkpoints may be denied.</li>
                                    <li>Your QR code will be scanned at multiple points for security and tracking.</li>
                                    <li>Update your travel details if schedule changes to avoid confusion.</li>
                                </ul>
                                <br />
                                <strong>Offline Registration Counters</strong>
                                <br /><ul>
                                    <li> Haridwar </li><li> Rishikesh</li><li> Dehradun </li><li> Jankichatti </li><li> Barkot </li><li> Uttarkashi</li><li> Harsil</li><li>Guptkashi</li><li> Sonprayag </li><li> Phata </li><li>Gaurikund </li><li> Joshimath </li><li> Badrinath</li>
                                </ul>
                                <strong> In summary,</strong> early online registration ensures a smooth, organized, and secure pilgrimage for Char Dham Yatra 2026. Register in advance, keep your QR code handy, and cooperate with verification checkpoints for a safe journey.
                            </Para>
                        </Card.Body >
                    </Accordion.Collapse >
                </Card >
            </Accordion >
        </div >
    )
}

export default CharDhamReg