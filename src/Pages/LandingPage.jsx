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
import Footer from "../Components/Footer"
import AllDhamCollection from "../Components/AllDhamCollection"
import AllRightsReserved from "../Components/AllRightsReserved"
import { FormPopup } from "../Components/FormPopup"
import FormForDetails from "../Components/FormForDetails"
import CustomizeReg from "../Components/CustomizeReg"
import WhatsTrending from "../Components/WhatsTrending"
import ReviewsComp from "../Components/Reviews"

const Div = styled.div`
text-align:center;
overflow-x:hidden;
`

export const LandingPage = () => {
    return (
        <Div>
            {/* <Alert1 />
            <Alert2 />
            <Header /> */}
            <WhoweAre heading={"Who we are"} />
            <WhatsTrending />
            <FormForDetails />
            {/* <FormPopup show={showForm} onClose={() => setShowForm(true)} /> */}
            <CharDhamAtGlance subHeading={"Char Dham Yatra at a Glance"} />
            <CardComponent />
            <AllDhamCollection />
            <PackageDetails />
            <CharDhamReg />
            <Faqs />
            <ReviewsComp />
            <CustomizeReg />
            {/* <Footer />
            <AllRightsReserved /> */}
        </Div>
    )
}