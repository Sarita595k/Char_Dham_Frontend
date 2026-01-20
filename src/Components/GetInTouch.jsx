import { FaLocationArrow, FaPhone, } from "react-icons/fa"
import { IoIosTime } from "react-icons/io"
import styled from "styled-components"

export const GetInTouch = () => {
    return (
        <>
            <div>Get In Touch</div>
            <p><FaPhone /> <a href="tel:+918770872054">call us</a></p>
            <p><FaLocationArrow />Yugen India Travel</p>
            <p><IoIosTime /></p>
        </>
    )
}
