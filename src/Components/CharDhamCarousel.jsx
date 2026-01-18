import React from 'react'
import { details } from './package'
import CardComponentCarousel from './CardComponentCarousel'

const CharDhamCarousel = () => {
    const charDhamCarouselSlide = details.filter(
        item => item.category === "char dham"
    )
    return (
        <CardComponentCarousel title={"Char dham Yatra"} slides={charDhamCarouselSlide} />
    )
}

export default CharDhamCarousel