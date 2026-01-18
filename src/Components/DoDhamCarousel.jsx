import { details } from './package'
import CardComponentCarousel from './CardComponentCarousel'

const DoDhamCarousel = () => {
    const charDhamCarouselSlide = details.filter(
        item => item.category === "do dham"
    )
    return (
        <CardComponentCarousel title={"Do dham Yatra"} slides={charDhamCarouselSlide} />
    )
}

export default DoDhamCarousel