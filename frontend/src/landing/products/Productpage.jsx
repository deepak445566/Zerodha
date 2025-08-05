import React from 'react'
 
import Leftimage from './Leftimage'
import Rightimage from './Rightimage'
import Universe from './Universe'
import Hero from './Hero'

function Productpage() {
  return (
  <>
  <Hero/>
  <Leftimage  imageURL="media/images/products-kite.png"
  productname="Kite"
  productdes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
  tryDemo=""
  learnmore=""
  googleplay=""
  appstore=""/>
  <Rightimage
   imageURL="media/images/products-console.png"
  productname="Console"
  productdes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
  learnmore=""
  
  />
  <Leftimage  imageURL="media/images/products-coin.png"
  productname="Coin"
  productdes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
  tryDemo=""
  learnmore=""
  googleplay=""
  appstore=""/>
 
 <Rightimage
   imageURL="media/images/landing (1).svg"
  productname="Kite Connect API"
  productdes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
  learnmore=""
  
  />


   <Leftimage  imageURL="media/images/products-kite.png"
  productname="Varsity mobile"
  productdes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
  tryDemo=""
  learnmore=""
  googleplay=""
  appstore=""/>

  <Universe/>
  </>
  )
}

export default Productpage