import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const FormPopup = ({ show, onClose }) => {
    const phone = 918770872054
    const [formData, setFormData] = useState({
        userName: "",
        phoneNumber: "",
        preferredMonth: ""

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
Preferred Month: ${formData.preferredMonth}
    `;

        const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappLink, "_blank");
        onClose();
    };
    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Request Itinerary</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <form>
                    <input className="form-control mb-2" name="userName" value={formData.userName} placeholder="Your Name" onChange={handleChange} />
                    <input className="form-control mb-2" name="phoneNumber" value={formData.phoneNumber} placeholder="Phone Number" onChange={handleChange} />
                    <input className="form-control mb-2" name="preferredMonth" value={formData.preferredMonth} placeholder="Preferred month" onChange={handleChange} />
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit on Whatsapp
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
