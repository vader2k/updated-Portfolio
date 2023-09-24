import React from 'react'
import {About,Navbar, Contact, Hero, Work, Writing, Footer, Experince} from '../components'


const Home = () => {
  return (
    <div>
        <div>
        <Navbar/>
        <Hero/>
        <About/>
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