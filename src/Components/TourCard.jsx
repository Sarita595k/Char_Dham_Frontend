import { Card } from "react-bootstrap"
import styled from "styled-components"

const CardIs = styled(Card)`
width: clamp(14rem, 40vw, 19rem);
min-height:clamp(10rem, 22vw,11rem);
padding:clamp(0.5rem,2vw,1rem);
background:transparent;
box-shadow:.2rem .2rem .7rem #423e0bff;
border:none;
margin:clamp(0.3rem, 2vw,1rem);
`
const Title = styled(Card.Title)`
font-size:clamp(1.4rem, 2vw, 1.7rem);
text-transform:capitalize;
color:#DB4242;
`

const Text = styled(Card.Text)`
font-size:clamp(1.2rem, 1.6vw, 1.5rem);
color:#44233B;
font-weight:400;
text-transform:capitalize;
`
const TourCard = ({ title, text }) => {
    return (
        <div>
            <CardIs>
                <Card.Body>
                    <Title>{title}</Title>
                    <Text>
                        {text}
                    </Text>
                </Card.Body>
            </CardIs></div>
    )
}

export default TourCard