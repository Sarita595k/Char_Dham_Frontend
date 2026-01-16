import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { SubHeading } from './SubHeading'
// import RegistrationBtn from './RegistrationBtn';
import { useState } from 'react';

const CharDhamReg = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <SubHeading subHeading={"Char Dham Yatra Registration for 2026"} />
            <Accordion activeKey={open ? "0" : null}>
                <Card>
                    <Card.Header>
                        Char Dham Yatra Registration is mandatory for all pilgrims traveling to Yamunotri, Gangotri, Kedarnath, and Badrinath in 2026, whether by road, helicopter, palki, pony, or trekking route. The Government of Uttarakhand introduced compulsory registration to ensure safety, crowd management, and real-time tracking. Without valid registration, entry to temple premises and check posts is not permitted, and travelers may face delays or denial of access. <br />
                        <button
                            eventKey="0"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? "Read less" : "Read more"}
                        </button>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>The registration is managed by the Uttarakhand Tourism Development Board (UTDB) and can be completed online or offline. Online registration is the most convenient way, allowing pilgrims to book their preferred dates in advance, upload identity details, and receive digital permits. Offline registration counters are available at major points like Haridwar, Rishikesh, Janki Chatti, Guptkashi, Phata, Sonprayag, Joshimath, Harsil, and Badrinath, but queues are long during peak season.

                            Registration typically begins 1–2 months before the temple opening dates. For 2026, Char Dham temples are expected to open around late April to early May, depending on Akshay Tritiya and official announcements from temple committees. Pilgrims are advised to register early, especially for Kedarnath, as daily capacity limits apply.

                            How to Register Online

                            Visit the official Uttarakhand Tourism website.
                            Enter personal details like name, mobile number, age, and ID type.
                            Upload a valid ID proof (Aadhaar, Passport, Driving License, Voter ID).
                            Select travel dates and temple sequence (Yamunotri, Gangotri, Kedarnath, Badrinath).
                            Generate and download the Yatra Registration QR Code.
                            Carry printed or digital QR code throughout travel.
                            Travelers must verify registration at check posts and temple gates by scanning the QR code. This helps authorities manage crowd flow and emergency assistance.

                            Kedarnath Biometric Verification

                            Kedarnath has a mandatory biometric verification procedure for tracking pilgrims during the trek. Verification is available at Haridwar, Rishikesh, Guptkashi, Sonprayag, and Gaurikund. Pilgrims must carry the same ID used during registration. Without verification, entry to the trek route is restricted.

                            Registration for Helicopter Travelers

                            Helicopter passengers must complete separate registration in addition to helicopter booking. Boarding is only allowed after QR verification. Registration is checked again at Sersi, Phata, Guptkashi, and Kedarnath helipad points.

                            Documents Required

                            Valid ID proof (Aadhaar/Passport/Voter ID)
                            Mobile number for OTP verification
                            Emergency contact number
                            Latest passport-size photo (optional)
                            Important Points to Remember

                            Registration is mandatory for everyone, including children and senior citizens.
                            One registration is required per traveler; group registration is available online.
                            Carry printed and digital copies to avoid network issues.
                            Without registration, entry at temple checkpoints may be denied.
                            Your QR code will be scanned at multiple points for security and tracking.
                            Update your travel details if schedule changes to avoid confusion.
                            Offline Registration Counters

                            Haridwar • Rishikesh • Dehradun • Jankichatti • Barkot • Uttarkashi • Harsil • Guptkashi • Sonprayag • Phata • Gaurikund • Joshimath • Badrinath

                            In summary, early online registration ensures a smooth, organized, and secure pilgrimage for Char Dham Yatra 2026. Register in advance, keep your QR code handy, and cooperate with verification checkpoints for a safe journey.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default CharDhamReg