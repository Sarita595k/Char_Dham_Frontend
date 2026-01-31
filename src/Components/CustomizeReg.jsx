import React, { useState } from 'react'
import { SubHeading } from "./SubHeading"
const CustomizeReg = () => {
    const [details, setDetails] = useState({
        name: "",
        email: "",
        mobileNumber: ""
    })
    return (
        <div>
            <SubHeading subHeading="customize your holiday package with our travel experts" />
            <form>
                <input type="text" name="name" value={details.name} placeholder='Enter your name' />
                <input type="email" name="email" value={details.email} placeholder='enter your email' />
                <input type="tel" name="mobileNumber" value={details.mobileNumber} placeholder='enter your mobile number' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CustomizeReg