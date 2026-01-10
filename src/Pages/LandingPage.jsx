import styled from "styled-components"
import { Alert1 } from "../Components/Alert1"
import { Alert2 } from "../Components/Alert2"
import { Header } from "../Components/Header"
import { CardComponent } from "../Components/CardComponent"
import { Heading } from "../Components/Heading"
import WhoweAre from "../Components/WhoweAre"

const Div = styled.div`
text-align:center;
overflow-x:hidden;
`

export const LandingPage = () => {
    return (
        <Div>
            <Alert1 />
            <Alert2 />
            <Header />
            <WhoweAre heading={"Who we are"} />
            <Heading heading={"our packages"} />
            <CardComponent />
        </Div>
    )
}