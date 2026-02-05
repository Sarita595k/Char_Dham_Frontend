import React from 'react'
import WhatsTrendingPage from '../Components/Itinerary'
import Reasons from '../Components/Reasons'
import Faqs from '../Components/Faqs'
import TrustCred from '../Components/trustCred'
import Book from '../Components/Book'
import styled from 'styled-components'
import HealthAndSafety from './HealthAndSafety'

const Div = styled.div`
margin:2%;
`
const TrendingPage = () => {
    return (
        <Div><WhatsTrendingPage />
            <Reasons />
            <TrustCred />
            <HealthAndSafety />
            <Book />
            <Faqs />
        </Div>
    )
}

export default TrendingPage