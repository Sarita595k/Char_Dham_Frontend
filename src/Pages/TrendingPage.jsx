import React from 'react'
import WhatsTrendingPage from '../Components/Itinerary'
import Reasons from '../Components/Reasons'
import Faqs from '../Components/Faqs'
import TrustCred from '../Components/TrustCred'
import Book from '../Components/Book'
import styled from 'styled-components'
import HealthAndSafety from './HealthAndSafety'
import Itinerary from '../Components/Itinerary'
import HealthTips from '../Components/HealthTips'
import ImportantNotes from '../Components/ImportantNotes'
import OnlyBg from '../Components/OnlyBg'

// to manage the container 
const Div = styled.div`
margin:2%;
`
const TrendingPage = () => {
    return (
        <Div>
            <Itinerary />
            {/* <OnlyBg /> */}
            <Reasons />
            <TrustCred />
            <HealthAndSafety />
            <Book />
            <HealthTips />
            <Faqs />
            <ImportantNotes />
        </Div>
    )
}

export default TrendingPage