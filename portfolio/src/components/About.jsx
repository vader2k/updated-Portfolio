import React from 'react'
import me from '../assets/portfolio.jpg'
import arrow from  '../assets/vaderarror.png'
import {BiRightArrow} from 'react-icons/bi'

const About = () => {
  return (
    <div className='px-3' id='about'>
      <h1 className='text-[2rem] flex justify-end pr-5'>HELLO. I AM DANIEL</h1>
      <p className='flex justify-end font-Abril text-golden pr-5 pb-5'>Odukwe Daniel</p>
      <p className='flex justify-end pl-10 pr-5 text-left line'>
        I enjoy creating things that lives on the internet. I am a frontend web developer with 2yrs+ experience and also a technical writer. I have published few articles tendered towards beginers since my articles are based on problems i faced and how i overcame them. I have had the priviledge of working at Tethral technologies, a startup, a large corporation and an online training institution. My main focus these days are building more accessible & problem solving produts for a variety of clients.
      </p>
        <div>
          <img src={me} alt='vader' className='h-[250px] ml-14 my-10 rounded-full'/>
          <p className='relative text-[1rem] text-golden font-Abril'>Vader <img src={arrow} className='h-[50px] absolute top-[-30px] left-[30px]'/></p>
        </div>
       

      </div>
  )
}

export default About