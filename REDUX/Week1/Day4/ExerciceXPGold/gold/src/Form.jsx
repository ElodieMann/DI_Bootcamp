import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addContact, removeContact } from './redux/contact'

const Form = () => {
    const [name, setName] = useState('')
    const contacts = useSelector((state) => state.contact.contacts)
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addContact(name))
        setName('')
    }

    const handleDelete = (index) => {
        dispatch(removeContact(index))
    }
    return (
        <div>
            <h2>Add Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}

                />
                <input 
                type="submit"
                value="send"
                />
            </form>

            <hr/>
            <ul>
                {contacts.map((contact, index) => {
                    return(
                        <li key={index}>
                        <h1>{contact}</h1>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Form