import { useState } from 'react';
import styled from 'styled-components';
import { SubHeading } from './SubHeading';

const Div = styled.div`
width:clamp(80%, 45vw,90%);
margin:auto;
background-image:  linear-gradient(
      rgba(126, 69, 85,1),
      rgba(68, 35, 59,0.9)
    );
    
`
const FormWrapper = styled.form`
padding:clamp(2rem,2vw,4rem);
 input[type="text"],
  input[type="tel"],
  input[type="email"]{
font-size:clamp(1.2rem, 1.6vw, 1.7rem);
padding:clamp(.7rem,1.6vw,1.6rem);
margin-top:clamp(1rem,1.6vw,2rem);
}
 .form-control {
    border-radius: 0.6rem;
    border: 1px solid #7e7545;
  }
`

const Button = styled.button`
width:80%;
margin-top:clamp(2rem,1.6vw,2.5rem);
padding:clamp(.7rem,1.6vw,1.8rem);
border:none;
font-size:clamp(1.4rem,1.6vw,1.9rem);
border-radius:.9rem;
color:#7E4555;
font-weight:600;
background-color:#dbce13;
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
        <Div>
            <SubHeading subHeading={"fill out the form for any enquiry and get best travel deals! "} style={{ color: "white", padding: "2rem 2rem 0rem" }} />
            <FormWrapper autoComplete='off'>
                <input type='text' className="form-control mb-2" name="userName" value={formData.userName} placeholder="Your Name" onChange={handleChange} required />
                <input type='email' className="form-control mb-2" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
                <input type="text" className="form-control mb-2" name="placesToVisit" id="placesToVisit" placeholder='Place to visit/Query' required />
                <input type='tel' className="form-control mb-2" name="phoneNumber" value={formData.phoneNumber} pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="Phone Number" onChange={handleChange} required />
                <input type="number" className="form-control mb-2" name="numberOfAdults" id="numberOfAdults" placeholder='number of adults' required />
                <input type="number" className="form-control mb-2" name="NumberOfChildren" id="numberOfChildren" placeholder='number of children' required />
                <Button type='submit'>Submit</Button>
            </FormWrapper>
        </Div>
    );
}
export default FormForDetails