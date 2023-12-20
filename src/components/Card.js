import React from 'react'

export default function card() {
  return (
    <div>
        <div>
        <div className="card mt-3" style={{ "width": "18rem" }}>
          <img src="https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?w=740&t=st=1703081741~exp=1703082341~hmac=150c45e2a8ded38e0174255b8985abd8f9ec01eaaf02520870cf3ee70283dff9" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
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
                <option value="half"> Half</option>
                <option value="full"> Full</option>
              </select>
              <div className='d-inline '>Total Price</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
