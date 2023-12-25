import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:5000/api/login",
      {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email:credentials.email, password:credentials.password})
      });

      const responseJSON = await response.json();

      if(!responseJSON.success){
        alert("invalid user or pass");
      }
      else{
        navigate("/");
      }
  }

  const onChange = (event)=>{
    setCredentials({...credentials, [event.target.name]:event.target.value});
  }
  return (
    <div className="mt-5 container">

      <form onSubmit={handleSubmit}>


        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} />
        </div>

        <button type="Login" className="m-3 btn btn-primary">Submit</button>

      </form>
    </div>
  )
}
