import { Heading } from "./Heading"
import { SubHeading } from "./SubHeading"
import styled from "styled-components"

const MainContainer = styled.div`
width:clamp(100vw,45vw, 90vw);
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


const Refund = () => {
    return (
        <MainContainer>
            <Heading heading={"REFUND & CANCELLATION POLICY – YUGEN INDIA TRAVEL"} />
            <Div>
                <Title>Introduction</Title>
                <P>  This Refund & Cancellation Policy governs cancellations and refunds for services offered by
                    Yugen India Travel (“we”, “our”, “us”). By submitting an enquiry or confirming a booking,
                    you agree to this policy.</P>

                <Title> Nature of Bookings</Title>
                <P> Yugen India Travel operates on an enquiry-based booking model. Bookings are confirmed
                    only after mutual agreement and receipt of advance payment, where applicable.</P>

                <Title> Cancellation by Customer</Title>
                <ul>
                    <P> <li>Cancellation requests must be communicated in writing via email or WhatsApp.</li></P>
                    <P> <li>Cancellation charges depend on service providers such as hotels, transport operators, and
                        vendors.</li></P>
                    <P><li>Charges may vary based on travel dates, season, and time of cancellation.</li></P>
                </ul>

                <Title> Indicative Cancellation Charges</Title>

                <ul>
                    <P> <li>More than 15 days before travel: Minimal or no cancellation charges (subject to supplier
                        policy)</li></P>
                    <P> <li> 7–15 days before travel: Partial cancellation charges may apply</li></P>
                    <P><li>Less than 7 days before travel or no-show: No refund may be applicable</li></P>
                </ul>

                <P>  The exact cancellation terms will be shared at the time of booking confirmation.</P>

                <Title>Refund Policy</Title>

                <ul>
                    <P> <li>Refunds, if applicable, will be processed after deducting cancellation charges levied by
                        service providers.</li></P>
                    <P> <li> Refund processing time may take 7–14 working days.</li></P>
                    <P><li>Refunds will be made through the original mode of payment or mutually agreed method.</li></P>
                    <P><li> We are not responsible for delays caused by banks or payment service providers.</li></P>
                </ul>

                <Title>Cancellation by Yugen India Travel</Title>

                <P>We reserve the right to cancel a booking due to unavoidable circumstances such as:</P>
                <ul>
                    <P><li> Natural disasters</li></P>
                    <P><li>Weather conditions</li></P>
                    <P><li>Government restrictions</li></P>
                    <P><li>Operational issues</li></P>
                </ul>

                <P> In such cases, we will offer a suitable alternative or refund as per supplier policies.</P>

                <Title>  Non-Refundable Components</Title>

                <P>Certain services such as permits, helicopter bookings, peak-season hotels, or special
                    arrangements may be non-refundable. These will be clearly communicated at the time of
                    booking.</P>

                <Title>  Force Majeure</Title>

                <P> No refunds shall be applicable for cancellations caused due to force majeure events beyond
                    our control.</P>

                <Title>Changes to Bookings</Title>

                <P> Any changes requested after confirmation are subject to availability and additional charges,
                    if applicable.</P>

                <Title>  Policy Updates</Title>

                <P>Yugen India Travel reserves the right to modify this policy at any time. Updates will be
                    effective upon posting.</P>

                <SubHeading subHeading="Contact Information" />
                <Title>Yugen India Travel</Title>
                <P> Location: Bhopal, Madhya Pradesh, India</P>
                <P> Email: [your email]</P>
                <P>Phone: [your phone]</P>
            </Div></MainContainer>
    )
}

export default Refund