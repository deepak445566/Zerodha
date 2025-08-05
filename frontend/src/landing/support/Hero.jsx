import React from 'react'

function Hero() {
  return (
   <div className="container">
    <div className="row mt-5 mb-5">
      <div className="col-4">
        <h1>Support Portal</h1>
      </div>
      <div className="col-6"></div>
      <div className="col-2 mt-3">
        <button className='btn btn-primary'>My Ticket</button>
      </div>
    </div>
    <div className="row">
      <input type='text' placeholder='How To Open Demant Account' style={{height:"3rem" ,backgroundColor:"white",}}/>
    </div>
   </div>
  )
}

export default Hero