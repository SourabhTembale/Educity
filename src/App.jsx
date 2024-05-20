import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

const[playState,setPlayState]= useState(true);


  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='OUR PROGRAM' title='What We Offer !!'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subtitle='CONTACT US' title='GET IN TOUCH !!'/>
        <Contact/>
        <Footer/>
      </div>
       {/* <VideoPlayer playState={playState} setPlayState={setPlayState}/>  */}
    </div>
  )
}

export default App
