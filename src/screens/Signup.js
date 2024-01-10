import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import {baseURL} from  '../lib/index.js';
//import { baseURL } from '../../backend/models/User.js';

export default function Signup() {

    const [credentials, setCredentials] = useState({name:"", email:"", password:"", geolocation:""});
    const navigate = useNavigate();
   

    const handleSubmit = async(event) => {
        event.preventDefault();
        const response = await fetch(`${baseURL}/api/createuser`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
            }
            );
            
        const responseJSON = await response.json();

        if(!responseJSON.success){
            alert("Entered credentials fails validation");
        }
        else{
            navigate("/login")
        }
        }
        const onChange=(event)=>{
            setCredentials({...credentials, [event.target.name]:event.target.value});
    }
    return (
        <div className="mt-5 container">

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="geolocation" className="form-label">Address</label>
                    <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
                </div>

                <button type="submit" className="m-3 btn btn-primary" to="/login">Submit</button>
                <Link className="m-3 btn btn-danger" to="/login">Already User</Link>
            </form>
        </div>
    )
}
