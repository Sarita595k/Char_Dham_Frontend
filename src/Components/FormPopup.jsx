import { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logo from '../assets/Logo/YugenIndiaLogo.png'
import bgImage from "../assets/Background-color/bg2.jpg"

const ModelWrapper = styled(Modal)`
.modal-dialog{
max-width:clamp(65%, 45vw, 75%);
margin:auto;}

.modal-header{
display:flex;
flex-direction:column;
align-items:center;
position:relative;
color:#7E4555;
margin-top:-2rem;
// background-image:url(${bgImage});
background-size:cover;
border-bottom:none;
}

.modal-title{
font-size:clamp(1.7rem,1.6vw, 10.7rem);
}

.btn-close{
position:absolute;
top:4rem;
right:3rem;
}

// .modal-footer{
// display:flex;
// justify-content:space-between;
// }
`

const LogoImage = styled.img`
height:clamp(10rem, 45vw, 13rem);
width:clamp(10rem, 45vw, 13rem);
`

const ModalBody = styled(Modal.Body)`
padding:1rem;
`

const FormWrapper = styled.form`
 input[type="text"],
  input[type="tel"],
  input[type="email"]{
font-size:clamp(1.2rem, 1.6vw, 1.7rem);
padding:clamp(.7rem,1.6vw,1.6rem);
margin-top:clamp(1rem,1.6vw,2rem);
}
 .form-control {
    border-radius: 0.6rem;
    border: 1px solid #7E4555;
  }
`

const CloseBtn = styled(Button)`
font-size:1.3rem;
background-color:white;
   color:#7E4555;
  border:1px solid #7E4555;
  padding:.7rem 2rem;
  cursor:pointer;
  transition:all .5s ease-in-out;

  &:hover{
  background-color:#7E4555;
  color:white;
  }
`
const WhatsAppBtn = styled(Button)`
font-size:1.3rem;
  background-color:#7E4555;
  color:white;
  border:none;
  padding:.7rem 2rem;
  cursor:pointer;
  transition:all .5s ease-in-out;

  &:hover{
    background-color:white;
    color:#7E4555;
  }`
export const FormPopup = ({ show, onClose }) => {
    const phone = 918770872054
    const [formData, setFormData] = useState({
        userName: "",
        phoneNumber: "",
        email: ""

    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = () => {
        const whatsappMessage = `
Hi, I want Deluxe Char Dham Package.

Name: ${formData.userName}
Phone: ${formData.phoneNumber}
Preferred Month: ${formData.email}
    `;

        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappLink, "_blank");
        onClose();
    };
    return (
        <ModelWrapper show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <LogoImage src={logo} />
                <Modal.Title>Request Itinerary</Modal.Title>
            </Modal.Header>

            <ModalBody>
                <FormWrapper autoComplete='off'>
                    <input type='text' className="form-control mb-2" name="userName" value={formData.userName} placeholder="Your Name" onChange={handleChange} required />
                    <input type='tel' className="form-control mb-2" name="phoneNumber" value={formData.phoneNumber} pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="Phone Number" onChange={handleChange} required />
                    <input type='email' className="form-control mb-2" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
                </FormWrapper>
            </ModalBody>

            <Modal.Footer>
                <CloseBtn variant="secondary" onClick={onClose}>
                    Close
                </CloseBtn>
                <WhatsAppBtn variant="primary" onClick={handleSubmit} target='_blank'>
                    Submit on Whatsapp
                </WhatsAppBtn>
            </Modal.Footer>
        </ModelWrapper>
    );
}
