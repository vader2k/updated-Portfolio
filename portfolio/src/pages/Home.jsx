import React from 'react'
import {About,Navbar, Hero, Work, Writing,Tools, Experince,Contact,Footer} from '../components'


const Home = () => {
  return (
    <div>
        <div className='sm:w-[90%] sm:m-auto w-[100%]'>
        <Navbar/>
        <Hero/>
        <About/>
        <Tools/>
        <Experince/>
        <Work/>
        <Writing/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home