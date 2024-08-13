import React from 'react'
import Achiev from '../components/Achiev'
import Footer from '../components/Footer'
import Hom from '../components/Hom'
import Navbar from '../components/Navbar'

function Home() {
  return (
   <>
   <div className='flex flex-col '>
   <Navbar></Navbar>
    <Hom></Hom>
    <Achiev/>
   <Footer></Footer>
   </div>
  
   

   </>
  )
}

export default Home
