import { Heading } from "./Heading"
import { SubHeading } from "./SubHeading"
import styled from "styled-components"

const MainContainer = styled.div`
max-width:clamp(100vw,45vw, 90vw);
margin-left:clamp(2rem,1.6vw,3rem);
`

const Div = styled.div`

`
const Title = styled.h2`
padding-top:clamp(1.3rem,1.6vw,2.3rem);
font-weight:600;
font-family: "Poppins", sans-serif;
font-size:clamp(1.3rem,1.6vw,1.9rem);
color:#4A2C2A;`

const P = styled.p`
max-width:90%;
font-family: "Poppins", sans-serif;
font-size:clamp(1.1rem, 2vw,1.6rem);
color:#7E4555`


const Privacy = () => {
    return (
        <MainContainer>
            <Heading heading="Privacy policy" />
            <Div>
                <Title>Purpose of Collecting Information</Title>
                <P>We use your information to respond to enquiries, share itineraries, contact you for follow-ups, and improve our services.</P>

                <Title>Cookies and Tracking</Title>
                <P> Our website may use basic cookies or analytics tools to understand traffic. You may disable
                    cookies in your browser.</P>

                <Title> Information Sharing</Title>
                <P>Information may be shared with service partners only after booking confirmation or when
                    required by law.</P>

                <Title> Advertising &amp; Communication </Title>
                <P>By submitting details, you consent to being contacted via call, WhatsApp, SMS, or email. You
                    may opt out anytime.</P>

                <Title>  Data Security </Title>
                <P> We use reasonable security measures including SSL encryption.</P>

                <Title>Data Retention </Title>
                <P> Information is retained only as long as necessary and may be deleted upon request.</P>

                <Title>Children’s Privacy </Title>
                <P>Our services are not intended for individuals under 18.</P>

                <Title>  Changes to Policy </Title>
                <P>  We may update this policy at any time.</P>

                <SubHeading subHeading="Contact Information" />
                <Title>Yugen India Travel</Title>
                <P> Location: Bhopal, Madhya Pradesh, India</P>
                <P> Email: [your email]</P>
                <P>Phone: [your phone]</P>
            </Div></MainContainer>
    )
}

export default Privacy