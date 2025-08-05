import React from "react";

function Leftimage({
  imageURL,
  productname,
  productdes,
  tryDemo,
  learnmore,
  googleplay,
  appstore
}) {
  return <>
  <div className="container border-bottom mt-5">
    <div className="row ">
      <div className="col-5 p-5">
        <img src={imageURL}/>
      </div>
      <div className="col-2"></div>
      <div className="col-5 p-5 mt-5 " >
        <h1>{productname}</h1>
        <p>{productdes}</p>
        <div >
        <a href={tryDemo}>Try Demo</a>
          <a href={learnmore} >Learn More</a></div>
          <div className="mt-3">
            <a href={googleplay}><img src="media/images/google-play-badge.svg"/></a>
            <a href={appstore}><img src="media/images/appstore-badge.svg" style={{marginLeft:"50px"}}/></a>
            </div>
      </div>
    </div>
  </div>
  
  
  </>;
}

export default Leftimage;
