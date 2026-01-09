import styled from "styled-components"
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { FormPopup } from "./FormPopup.jsx"
import { useState } from "react";

const Container = styled.div`
  display:flex;
  justify-content:space-evenly;
  padding:.6rem;
`

const Button = styled.button`
  font-size:1.3rem;
  background-color:rgba(135, 26, 88, 1);
  color:white;
  border:none;
  padding:.8rem 1rem;
  cursor:pointer;
  transition:.3s;

  &:hover{
    background-color:white;
    color:rgba(135, 26, 88, 1);
  }
`

export const Buttons = ({ type }) => {
    const [showForm, setShowForm] = useState(false)

    const phoneNumber = 918770872054
    const whatsappMessage = `Hi, I'm interested in your ${type} Char Dham Package. Please share details.`
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

    if (type === "Economic") {
        return (
            <Container>
                <a href={whatsappLink} target="_blank" rel="noreferrer">
                    <Button><FaWhatsapp /> Whatsapp</Button>
                </a>
            </Container>
        )
    }

    if (type === "Deluxe") {
        return (
            <>
                <Container>
                    <Button onClick={() => setShowForm(true)}>
                        Request Itinerary
                    </Button>
                </Container>

                <FormPopup show={showForm} onClose={() => setShowForm(false)} />
            </>
        )
    }

    if (type === "Premium") {
        return (
            <Container>
                <a href="tel:+918770872054">
                    <Button><FaPhone /> Request Call</Button>
                </a>
            </Container>
        )
    }

    return null
}
