import React from 'react'

function Stats() {
  return (
   <>

   <div className="container p-5 mb-5 ">
    <div className="row">
   

      <div className="col-6 p-5"   style={{ width: "50%", }}>
        <h1 className='fs-4'>Customer-first always</h1>
        <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
         <h1 className='fs-4'>No spam or gimmicks</h1>
        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
         <h1 className='fs-4'>The Zerodha universe</h1>
        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
         <h1 className='fs-4'>Do better with money</h1>
        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
      </div>
       <div className="col-6">
  <img
    src="media/images/ecosystem.png"
    style={{ width: "100%", marginRight: "90px" }}
  />
</div>
      <div>
        <img src='media/images/press-logos.png' style={{marginLeft:"10vw",marginTop:"8vh"}}/>
      </div>
    </div>
   </div>
   </>
  )
}

export default Stats