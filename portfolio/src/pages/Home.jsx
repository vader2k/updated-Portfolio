import React from 'react'
import {About,Navbar, Contact, Hero, Work, Writing, Footer,Tools, Experince} from '../components'


const Home = () => {
  return (
    <div>
        <div>
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