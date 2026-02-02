import { useState } from 'react'
import { SubHeading } from "./SubHeading"
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
        <div>
            {/* subheading called  */}
            <SubHeading subHeading="customize your holiday package with our travel experts" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={details.name} placeholder='Enter your name' onChange={handleChange} />
                <input type="email" name="email" value={details.email} placeholder='enter your email' onChange={handleChange} />
                <input type="tel" name="mobileNumber" value={details.mobileNumber} placeholder='enter your mobile number' onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CustomizeReg