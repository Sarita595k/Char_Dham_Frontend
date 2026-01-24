import { useState } from 'react';
import styled from 'styled-components';

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
const FormForDetails = () => {
    const [formData, setFormData] = useState({
        userName: "",
        email: "",
        phoneNumber: "",
        placesToVisit: "",
        numberOfAdults: "",
        numberOfChildren: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = () => {
    };
    return (
        <FormWrapper autoComplete='off'>
            <input type='text' className="form-control mb-2" name="userName" value={formData.userName} placeholder="Your Name" onChange={handleChange} required />
            <input type='email' className="form-control mb-2" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
            <input type="text" className="form-control mb-2" name="placesToVisit" id="placesToVisit" placeholder='Place to visit/Query' />
            <input type='tel' className="form-control mb-2" name="phoneNumber" value={formData.phoneNumber} pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="Phone Number" onChange={handleChange} required />
            <input type="number" className="form-control mb-2" name="numberOfAdults" id="numberOfAdults" placeholder='number of adults' />
            <input type="number" className="form-control mb-2" name="NumberOfChildren" id="numberOfChildren" placeholder='number of children' />

        </FormWrapper>
    );
}
export default FormForDetails