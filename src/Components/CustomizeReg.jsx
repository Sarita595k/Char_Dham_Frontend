import { useState, useEffect } from 'react'
import { SubHeading } from "./SubHeading"
import styled from 'styled-components'

const Div = styled.div`
width:100%;
display:flex;
`

const FormWrapper = styled.form`
padding:clamp(1.2rem,2vw,4rem);

 input[type="text"],
  input[type="tel"],
  input[type="email"],
  input[type="number"]{
font-size:clamp(1rem, 1.6vw, 1.7rem);
padding:clamp(.7rem,1.6vw,1.6rem);
// margin-top:clamp(1rem,1.6vw,2rem);
border:.1rem solid black;
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
width:20%;
margin-top:clamp(2rem,1.6vw,2.5rem);
padding:clamp(.7rem,1.6vw,1.8rem);
border:none;
font-size:clamp(1.2rem,1.6vw,1.9rem);
// border-radius:.9rem;
color:#4A2C2A;
font-weight:500;
background-color:#A3A333;
transition:all .5s ease-in-out; 

&:hover{
background-color:#4A2C2A;
color:#ffffff;
}
`
const CustomizeReg = () => {

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
    const [details, setDetails] = useState({
        name: "",
        email: "",
        mobileNumber: ""
    })

    // const handleChange = (event) => {
    //     const { name, value } = event.target
    //     setDetails((prev) => ({
    //         ...prev,
    //         [name]: value
    //     }))
    //     console.log(details.name, details.email, details.mobileNumber)
    // }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     setDetails({
    //         name: "",
    //         email: "",
    //         mobileNumber: ""
    //     })

    // }
    return (
        <>
            {/* subheading called  */}
            <SubHeading subHeading="customize your holiday package with our travel experts" />
            <Div>
                <FormWrapper autoComplete='off' onSubmit={handleSubmit}>
                    {errorMessage && <h4 style={{ color: '#ff4d4d' }}>{errorMessage}</h4>}
                    {showSuccess && <h4 style={{ color: '#2ecc71' }}>Form submitted successfully!</h4>}
                    <input type='text' className="form-control mb-2" name="username" value={formData.username} placeholder="Your Name" onChange={handleChange} required />
                    <input type='email' className="form-control mb-2" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
                    <input type="text" className="form-control mb-2" name="placesToVisit" value={formData.placesToVisit} placeholder='city' required onChange={handleChange} />
                    <input type='tel' className="form-control mb-2" name="phoneNumber" value={formData.phoneNumber} pattern="[6-9]{1}[0-9]{9}" maxLength="10" placeholder="Phone Number" onChange={handleChange} required />
                    <Button>Submit</Button>
                </FormWrapper>
            </Div>
        </>
    )
}

export default CustomizeReg