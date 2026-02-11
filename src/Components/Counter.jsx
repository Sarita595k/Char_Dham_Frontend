import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Counter = () => {
    const [input, setInput] = useState("")
    const [message, setShowMessage] = useState("Guest")

    const handleChange = (event) => {
        const value = event.target.value
        if (value.trim() != "") {
            setInput(value)
        } else {
            setInput("Guest")
        }
    }

    const handleSubmit = (event) => {
        if (input.trim() == "") {
            setShowMessage("Guest")
        } else {
            setShowMessage(input)
        }
        event.preventDefault()
        setInput("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="input" value={input} onChange={handleChange} />
                <button>Submit</button>
            </form>
            <h1>hello {message}</h1>
        </div>
    )
}

export default Counter