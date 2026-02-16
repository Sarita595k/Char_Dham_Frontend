import headerImg from "../assets-webp/Char Dham Yatra Family Package (1).webp"
// import { Image } from "react-bootstrap"
import mobileImage from "../assets-webp/Header/Header_Mobile.webp"
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
                <img src={headerImg} alt="header image" loading="eager" />
            </picture>
        </HeaderWrapper>
    )
}

