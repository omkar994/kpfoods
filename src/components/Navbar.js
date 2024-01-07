import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContexReducer';


export default function Navbar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login");
    };

    const [cartView, setCartView]=useState(false);
    let data = useCart();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1" to="/">KPfoods</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse me-auto mt-2" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item">
                                <Link className="nav-link active fs-2" aria-current="page" to="/">Home</Link>
                            </li>


                            {localStorage.getItem("authToken")
                                ? (<li className="nav-link">
                                    <Link className="nav-link" to="/myorders">My Orders</Link>
                                </li>) : ""}


                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/createfooitm">Add new item</Link>
                            </li> */}
                        </ul>
                        {
                            !localStorage.getItem("authToken")
                                ? (<div>
                                    <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                    <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
                                </div>
                                ) : (<div>
                                    <div className="btn bg-white text-success mx-1" onClick={()=>setCartView(true)}>My Cart{" "}<Badge pill bg="danger">{data.length}</Badge></div>
                                    {
                                        cartView?<Modal onClose={()=>setCartView(false)}><Cart></Cart></Modal>:null
                                    }
                                    <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>Logout</div>
                                </div>

                                )
                        }


                    </div>
                </div>
            </nav>
        </div>
    )
}
