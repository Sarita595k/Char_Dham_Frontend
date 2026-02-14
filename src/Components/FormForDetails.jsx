import { useState } from 'react';
import styled from 'styled-components';
import { SubHeading } from './SubHeading';
import { useEffect } from 'react';

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
  input[type="email"],
  input[type="number"]{
font-size:clamp(1.2rem, 1.6vw, 1.7rem);
padding:clamp(.7rem,1.6vw,1.6rem);
margin-top:clamp(1rem,1.6vw,2rem);
}
 .form-control {
    border-radius: 0.6rem;
    border: 1px solid #7e7545;
  }
    input{
    &::placeholder{
    text-transform:capitalize;
    }}
`

const Button = styled.button`
width:80%;
margin-top:clamp(2rem,1.6vw,2.5rem);
padding:clamp(.7rem,1.6vw,1.8rem);
border:none;
font-size:clamp(1.4rem,1.6vw,1.9rem);
border-radius:.9rem;
color:#4A2C2A;
font-weight:600;
background-color:#A3A333;

transition:all .5s ease-in-out; 

&:hover{
background-color:#4A2C2A;
color:#ffffff;
}
`

const FormForDetails = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        placesToVisit: "",
        numberOfAdults: "",
        numberOfChildren: ""
    })
    const [errorMessage, getErrorMessage] = useState("")
    const [showSuccess, setShowSuccess] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => setShowSuccess(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess]);
    const handleSubmit = async (event) => {
        event.preventDefault()
        getErrorMessage("")
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/data`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    numberOfAdults: Number(formData.numberOfAdults),
                    numberOfChildren: Number(formData.numberOfChildren)
                })
            })
            const result = await response.json()
            if (response.ok) {
                setShowSuccess(true)
                setFormData({
                    username: "",
                    email: "",
                    phoneNumber: "",
                    placesToVisit: "",
                    numberOfAdults: "",
                    numberOfChildren: ""
                })
            } else {
                getErrorMessage(result.error)
            }
        } catch (err) {
            getErrorMessage("Connection failed.Please try again later.")
        }

    };
    return (
        <Div>
            <SubHeading subHeading={"fill out the form for any enquiry and get best travel deals! "} style={{ color: "white", padding: "2rem 2rem 0rem" }} />
            <FormWrapper autoComplete='off' onSubmit={handleSubmit}>
                {errorMessage && <h4 style={{ color: '#ff4d4d' }}>{errorMessage}</h4>}
                {showSuccess && <h4 style={{ color: '#2ecc71' }}>Form submitted successfully!</h4>}
                <input type='text' className="form-control mb-2" name="username" value={formData.username} placeholder="Your Name" onChange={handleChange} required />
                <input type='email' className="form-control mb-2" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
                <input type="text" className="form-control mb-2" name="placesToVisit" value={formData.placesToVisit} placeholder='city' required onChange={handleChange} />
                <input type='tel' className="form-control mb-2" name="phoneNumber" value={formData.phoneNumber} pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="Phone Number" onChange={handleChange} required />
                <input type="number" className="form-control mb-2" name="numberOfAdults" value={formData.numberOfAdults} placeholder='number of adults' required onChange={handleChange} />
                <input type="number" className="form-control mb-2" name="numberOfChildren" value={formData.numberOfChildren} placeholder='number of children' required onChange={handleChange} />
                <Button>Submit</Button>
            </FormWrapper>
        </Div>
    );
}
export default FormForDetails