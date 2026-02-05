import React from 'react'
import WhatsTrendingPage from '../Components/Itinerary'
import Reasons from '../Components/Reasons'
import Faqs from '../Components/Faqs'
import TrustCred from '../Components/trustCred'
import Book from '../Components/Book'
import styled from 'styled-components'
import HealthAndSafety from './HealthAndSafety'
import Itinerary from '../Components/Itinerary'

// to manage the container 
const Div = styled.div`
margin:2%;
`
const TrendingPage = () => {
    return (
        <Div>
            <Itinerary />
            <Reasons />
            <TrustCred />
            <HealthAndSafety />
            <Book />
            <Faqs />
        </Div>
    )
}

export default TrendingPage