import React from 'react'
import Abo from '../components/Abo'
import Footer from '../components/Footer'
import Image_slider from '../components/Image_slider.js'
import Navbar from '../components/Navbar'

function About() {
  return (
   <>
    <Navbar></Navbar>
    <Image_slider/>
    <Abo></Abo>
    <Footer></Footer>
   </>
  )
}

export default About
