import { Heading } from "./Heading"
import { SubHeading } from "./SubHeading"
import styled from "styled-components"

const MainContainer = styled.div`
width:clamp(100vw,45vw, 90vw);
margin:clamp(2rem,1.6vw,3rem);
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

const Terms = () => {
    return (
        <MainContainer >
            <Heading heading={"TERMS & CONDITIONS – YUGEN INDIA TRAVEL"} />
            <Div>
                <Title> Introduction</Title>
                <P>These Terms & Conditions govern the use of the website and services offered by Yugen
                    India Travel (“we”, “our”, “us”). By accessing our website or submitting an enquiry, you
                    agree to be bound by these Terms & Conditions.</P>

                <Title>  Nature of Services</Title>

                <P>Yugen India Travel is a privately operated travel service provider offering travel planning
                    and booking assistance for destinations within India. We are not affiliated with any
                    government body or temple authority.</P>

                <Title> Use of Website</Title>
                <P>The website is for general information and enquiry purposes only. Submitting an enquiry
                    does not guarantee availability or booking confirmation.</P>

                <Title>   Bookings & Confirmations</Title>
                <P> All bookings are subject to availability and confirmation by service providers. Final
                    confirmation is provided only after mutual agreement and required advance payment.</P>

                <Title> Payments</Title>
                <P>Payments, if applicable, are accepted offline or through mutually agreed methods. We do
                    not process online payments through our website.</P>

                <Title>   Cancellations & Refunds</Title>
                <P>Cancellation and refund terms depend on service providers and will be communicated at
                    the time of booking.</P>

                <Title> Travel Risks & Responsibilities</Title>
                <P> Pilgrimage tours may involve high-altitude travel and weather dependency. Travellers must
                    assess their health before travel. We are not responsible for delays, injuries, or disruptions
                    beyond our control.</P>

                <Title> Force Majeure</Title>
                <P> We are not liable for delays caused by natural disasters, weather, government restrictions,
                    or events beyond our control.</P>

                <Title>  Limitation of Liability</Title>
                <P> We act only as a facilitator and are not responsible for acts or omissions of third-party
                    service providers.</P>

                <Title>  User Conduct</Title>
                <P> Users must not misuse the website or submit false information.</P>
                <Title> Intellectual Property</Title>

                <P> All website content belongs to Yugen India Travel and may not be copied without
                    permission.</P>
                <Title>   Third-Party Links</Title>

                <P> We are not responsible for third-party websites linked from our site.</P>
                <Title>    Governing Law & Jurisdiction</Title>

                <P> These terms are governed by the laws of India. Jurisdiction shall be Bhopal, Madhya
                    Pradesh.</P>

                <SubHeading subHeading="Contact Information" />
                <Title>Yugen India Travel</Title>
                <P> Location: Bhopal, Madhya Pradesh, India</P>
                <P> Email: [your email]</P>
                <P>Phone: [your phone]</P>
            </Div></MainContainer>
    )
}

export default Terms