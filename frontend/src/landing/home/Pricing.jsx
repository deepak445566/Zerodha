import React from 'react'

function Pricing() {
  return (
 <>
 <div className="container mb-5">
  <div className="row">
    <div className="col-6 p-5">
      <h1 className='mb-3 fs-4'>
        Unbeatable pricing
      </h1>
      <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <a href='' style={{textDecoration:"none"}}>See Pricing<i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
    </div>
  
     <div className="col-6 mb-5 ">
      <div className="row " style={{marginTop:"10vh"}}>
        <div className="col">
         <img src='media/images/pricing-eq.svg'/>
        </div>
        <div className="col">
            <img src='media/images/pricing-eq.svg'/>
        </div>
          <div className="col">
            <img src='media/images/pricing-eq.svg'/>
        </div>

      </div>
     </div>
  </div>
 </div>
 
 </>
  )
}

export default Pricing