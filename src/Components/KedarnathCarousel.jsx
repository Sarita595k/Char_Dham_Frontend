import { details } from "./package"
import CardComponentCarousel from "./CardComponentCarousel"
const KedarnathCarousel = () => {
    const charDhamCarouselSlide = details.filter(
        item => item.category === "kedarnath dham"
    )
    return (
        <CardComponentCarousel title={"kedarnath Yatra"} slides={charDhamCarouselSlide} />
    )
}

export default KedarnathCarousel