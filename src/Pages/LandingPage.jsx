import styled from "styled-components"
import { Alert1 } from "../Components/Alert1"
import { Alert2 } from "../Components/Alert2"
import { Header } from "../Components/Header"
import { CardComponent } from "../Components/CardComponent"
import { Heading } from "../Components/Heading"
import WhoweAre from "../Components/WhoweAre"
import CharDhamAtGlance from "../Components/CharDhamAtGlance"
import PackageDetails from "../Components/PackageDetails"
import CharDhamReg from "../Components/CharDhamReg"
import Faqs from "../Components/Faqs"
// import CardComponentCarousel from "../Components/CardComponentCarousel"
import CharDham from "../Components/CharDhamCarousel"
import CharDhamCarousel from "../Components/CharDhamCarousel"
import DoDhamCarousel from "../Components/DoDhamCarousel"
import KedarnathCarousel from "../Components/KedarnathCarousel"
import Footer from "../Components/Footer"
import AllDhamCollection from "../Components/AllDhamCollection"

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
            <CharDhamAtGlance subHeading={"Char Dham Yatra at a Glance"} />
            <CardComponent />
            {/* <CharDhamCarousel />
            <DoDhamCarousel />
            <KedarnathCarousel /> */}
            <AllDhamCollection />
            {/* <CardComponentCarousel />
            <CardComponentCarousel heading={"kedarnath yatra package"} /> */}
            <PackageDetails />
            <CharDhamReg />
            <Faqs />
            <Footer />
        </Div>
    )
}