import styled from "styled-components"
import CharDhamCarousel from "./CharDhamCarousel"
import DoDhamCarousel from "./DoDhamCarousel"
import KedarnathCarousel from "./KedarnathCarousel"

const Div = styled.div`
@media(min-width:660px){
display:none;
}
`
const AllDhamCollection = () => {
    return (
        <Div>
            <CharDhamCarousel />
            <DoDhamCarousel />
            <KedarnathCarousel />
        </Div>
    )
}

export default AllDhamCollection