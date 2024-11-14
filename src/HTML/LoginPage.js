import React from 'react'
import { useState } from 'react';
export default function LoginPage() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneno: "",
        subject: "",
        message: "",
        preferred_contact_method: ""
    });
const handleChange = (event)=>{

    const{name,value} = event.target;
    setData(prevData=>({
        ...prevData,
        [name]: value
    }))
}

const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(data)

}
  return (
    <div>
       <h1>Contact Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    placeholder="Name"
                /><br/>
                <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input
                    type="number"
                    name="phoneno"
                    value={data.phoneno}
                    onChange={handleChange}
                    placeholder="Phone Number"
                /><br/>
                <input
                    type="text"
                    name="subject"
                    value={data.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                />
                <textarea
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    rows="5"
                    cols="50"
                    placeholder="Message"
                /><br/>
                <button type="submit">Submit</button>
            </form>
              
    </div>
  )
}
