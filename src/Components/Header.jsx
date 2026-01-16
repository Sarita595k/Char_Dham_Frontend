import headerImg from "../assets/Char Dham Yatra Family Package (1).png"
import { Image } from "react-bootstrap"
import mobileImage from "../assets/Header/mobile1.jpg"
export const Header = () => {
    return (
        <>
            <picture>
                <source srcSet={mobileImage} media="(max-width:660px)" alt="header image" style={{ objectFit: "cover" }} />
                <Image src={headerImg} alt="header image" fluid />
            </picture>
        </>
    )
}

