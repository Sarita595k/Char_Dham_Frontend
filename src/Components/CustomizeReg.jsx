import { useState } from 'react'
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
    const [details, setDetails] = useState({
        name: "",
        email: "",
        mobileNumber: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setDetails((prev) => ({
            ...prev,
            [name]: value
        }))
        console.log(details.name, details.email, details.mobileNumber)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setDetails({
            name: "",
            email: "",
            mobileNumber: ""
        })

    }
    return (
        <>
            {/* subheading called  */}
            <SubHeading subHeading="customize your holiday package with our travel experts" />
            <Div>
                <FormWrapper onSubmit={handleSubmit}>
                    <input type="text" name="name" value={details.name} placeholder='Enter your name' onChange={handleChange} />
                    <input type="email" name="email" value={details.email} placeholder='enter your email' onChange={handleChange} />
                    <input type="tel" name="mobileNumber" value={details.mobileNumber} placeholder='enter your mobile number' onChange={handleChange} />
                    <Button>Submit</Button>
                </FormWrapper>
            </Div>
        </>
    )
}

export default CustomizeReg