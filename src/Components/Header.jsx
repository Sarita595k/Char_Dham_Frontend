import headerImg from "../assets-webp/Char Dham Yatra Family Package (1).webp"
import mobileImage from "../assets-webp/Header/Header_Mobile.webp"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 660px) {
    height: auto;

    img {
      height: auto;
      object-fit: contain;
    }
  }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <picture>
                <source
                    srcSet={mobileImage}
                    media="(max-width:660px)"
                />

                <img
                    src={headerImg}
                    alt="Char Dham Yatra Family Package"
                    width="100%"
                    height="100vh"
                    loading="eager"
                    fetchpriority="high"
                    decoding="async"
                />
            </picture>
        </HeaderWrapper>
    )
}

export default Header
