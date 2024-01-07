import React, { useState, useRef, useEffect } from 'react'
import {useCart, useDispatchCart} from './ContexReducer';


export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const optionKey = Object.keys(options);
  const [qty, setQty]= useState(1);
  const [size, setSize]=useState("");

  const handleAddToCart = async()=>{
        await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size});
        console.log(data);

  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=> {
      setSize(priceRef.current.value);
  });
  return (
    <div>
        <div>
        <div className="card mt-3" style={{ "width": "18rem" }}>
          <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"160px", objectFit : "fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <p className="card-text">Some quick example text to build on the card.</p>
            <div className='container'>
              <select className='m-2 h-100 rounded' onChange={(e)=>(setQty(e.target.value))}>
                {
                  Array.from(Array(6), (e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })
                }
              </select>
              <select className='m-2 h-100 rounded' ref={priceRef} onChange={(e)=>(setSize(e.target.value))}>
                {
                  optionKey.map(data=>{
                    return (<option key={data} value={data}>{data}</option>)
                  })
                }
              </select>
              <div className='d-inline '>₹. {finalPrice}/-</div>
            </div>
                <hr></hr>
                <button className={'btn btn-success justify-center ms-2'} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
  )
}
