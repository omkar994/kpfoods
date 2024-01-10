import React, { useState } from 'react';
import {baseURL} from  '../lib/index.js';


export default function Fooditm() {
    const [foodDetails, setFoodDetails] = useState({name:"", img:"", description:""});

    const handleSubmit= async(event)=>{
        event.preventDefault();
        const response = await fetch(`${baseURL}/api/createfooitm`,
                {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({name:foodDetails.name, img:foodDetails.img, description:foodDetails.description})
                }
        );
        const responseJSON = await response.json();
        if(!responseJSON.success){
            alert("Food item not created");
        }

        // const onChange=(event)=>{
        //     setFoodDetails({...foodDetails,[foodDetails.target.name]:foodDetails.target.value});
        // }

    }
       const onChange=(event)=>{
             setFoodDetails({...foodDetails,[event.target.name]:event.target.value});
         }
    return (
        <div className="mt-5 container">
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={foodDetails.name} onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image Link</label>
                    <input type="text" className="form-control" name='img' value={foodDetails.img} onChange={onChange} />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" name='description' value={foodDetails.description} onChange={onChange} />
                </div>

                <button type="submit" className="m-3 btn btn-primary">Submit</button>

            </form>

        </div>
    )
}
