import { Card } from "react-bootstrap"
import styled from "styled-components"

const CardIs = styled(Card)`
width:17rem;
height:11rem;
padding:1rem;
background:transparent;
box-shadow:.2rem .2rem .7rem #423e0bff;
border:none;
margin:1rem;
`
const Title = styled(Card.Title)`
font-size:1.7rem;
text-transform:capitalize;
color:#DB4242;
`

const Text = styled(Card.Text)`
font-size:1.3rem;
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