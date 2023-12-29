import React from 'react'

export default function card(props) {
  const options = props.options;
  const optionKey = Object.keys(options);
  return (
    <div>
        <div>
        <div className="card mt-3" style={{ "width": "18rem" }}>
          <img src={props.imgSrc} className="card-img-top" alt="..." style={{height:"160px", objectFit : "fill"}}/>
          <div className="card-body">
            <h5 className="card-title">{props.foodName}</h5>
            <p className="card-text">Some quick example text to build on the card.</p>
            <div className='container'>
              <select className='m-2 h-100 rounded'>
                {
                  Array.from(Array(6), (e,i)=>{
                    return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                    )
                  })
                }
              </select>
              <select className='m-2 h-100 rounded'>
                {
                  optionKey.map(data=>{
                    return (<option key={data} value={data}>{data}</option>)
                  })
                }
              </select>
              <div className='d-inline '>Total Price</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
