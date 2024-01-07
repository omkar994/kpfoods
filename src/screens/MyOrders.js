import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer';

export default function MyOrders() {
    const [order, setOrder] = useState([]);

    const loadOrderData = async () => {
        let loggedInUserId = localStorage.getItem("userEmail");
        //console.log("email",loggedInUserId);

        let response = await fetch("http://localhost:5000/api/myorders",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: loggedInUserId })
            });

        response = await response.json();
        // console.log("JSON",response);
         response = Array(response);
          console.log("ARRAY",response[0].myOrders.order_data[0]);
        setOrder(response);

    }

    useEffect(() => {
        loadOrderData();
    }, []);
    return (
        <>
            <div><Navbar /></div>
            { <div className='container'>
                {
                    order.map((data) => {
                        return (
                            data.order.order_data.map((item) => {
                                return (
                                    item.map((arrayData) => {
                                        <div class="card mt-3" style={{ "width": "18rem" }}>
                                            <img src="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZyaWVkJTIwcmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" style={{ height: "160px", objectFit: "fill" }} />
                                            <div class="card-body">
                                                <ul class="list-group list-group-flush">
                                                    <li class="list-group-item">{arrayData.name}</li>
                                                    <li class="list-group-item">Quantity</li>
                                                    <li class="list-group-item">Price</li>
                                                </ul>
                                            </div>
                                        </div>
                                    })
                                )
                            })
                        )
                    })
                }

            </div> }
            <div><Footer /></div>
        </>
    )
}
