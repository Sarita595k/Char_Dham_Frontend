import headerImg from "../assets/Char Dham Yatra Family Package (1).png"
// import { Image } from "react-bootstrap"
import mobileImage from "../assets/Header/Header_Mobile.png"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Header = () => {
    return (
        <HeaderWrapper>
            <picture>
                {/* header image  */}
                <source srcSet={mobileImage} media="(max-width:660px)" alt="header image" style={{ objectFit: "cover" }} />
                <img src={headerImg} alt="header image" />
            </picture>
        </HeaderWrapper>
    )
}

