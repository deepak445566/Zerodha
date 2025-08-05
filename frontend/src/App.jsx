import React from 'react'
import HomePage from './landing/home/HomePage'
import { Routes,Route } from 'react-router-dom'
import Signup from './landing/signup/Signup'
import AboutPage from './landing/about/AboutPage'
import Productpage from './landing/products/Productpage'

import Supportpage from './landing/support/Supportpage'
import Navbar from './landing/Navbar'
import Footer from './landing/Footer'
import Pricingpage from './landing/pricing/Pricingpage'
import Login from './landing/signup/login'

function App() {
  return (
 <>
   <Navbar/>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
   <Route path="/signup" element={<Signup/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
     <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/products" element={<Productpage/>}></Route>
    <Route path="/pricing" element={<Pricingpage/>}></Route>
     <Route path="/support" element={<Supportpage/>}></Route>
</Routes>
 <Footer/>
 </>
  )
}

export default App