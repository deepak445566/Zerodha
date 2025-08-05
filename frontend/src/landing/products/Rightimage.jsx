import React from 'react'

function Rightimage({ imageURL,
  productname,
  productdes,
  learnmore
 }) {
  return (
  <>
    <div className="container border-bottom mt-5">
    <div className="row ">
      <div className="col-4 p-5 mt-5 " >
        <h1>{productname}</h1>
        <p>{productdes}</p>
       
          <a href={learnmore} style={{marginLeft:"50px"}}>Learn More</a></div>
         
   
      <div className="col-1"></div>
       <div className="col-6 ">
        <img src={imageURL}/>
      </div>
     
    </div>
  </div>
  
  </>
  )
}

export default Rightimage