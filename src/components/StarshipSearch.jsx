import { useState } from 'react'

const StarshipSearch = (props) => {

    const [formData, setFormData] = useState('')

    // Function that captures input and updates local state
   
    const handleChange = (event) => {
        setFormData(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleSearch(formData)
    }
    
    
    
    
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Search for starship: </label>
                <input
                type="text"
                onChange={handleChange}
                />
            </form>
        </>
    )
}

export default StarshipSearch