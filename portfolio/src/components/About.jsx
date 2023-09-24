import React from 'react'
import me from '../assets/portfolio.jpg'
import arrow from  '../assets/vaderarror.png'
import {BiRightArrow} from 'react-icons/bi'

const About = () => {
  return (
    <div className='px-3' id='about'>
      <h1 className='text-[2rem] flex justify-end pr-5'>HELLO. I AM DANIEL</h1>
      <p className='flex justify-end font-Abril text-golden pr-5 pb-5'>Odukwe Daniel</p>
      <p className='flex justify-end pl-10 pr-5 text-left'>
        I enjoy creating things that lives on the internet. I am a frontend web developer with 2yrs+ experience and also a technical writer. I have published few articles tendered towards beginers since my articles are based on problems i faced and how i overcame them. I have had the priviledge of working at Tethral technologies, a startup, a large corporation and an online training institution. My main focus these days are building more accessible & problem solving produts for a variety of clients.
      </p>
      <p className='flex justify-end pl-10 pr-5 text-justify py-5'>
        Here are a few technologies i have been working with recently;
      </p>
      <div className='flex flex-wrap  justify-between py-5 px-10 text-[13px]'>
        <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>JaveScript (ES6+)</div>
        <div  className='flex items-center gap-5'><BiRightArrow className='text-golden'/>React</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Wordpress</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Tailwind css</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Bootstrap</div>
        </div>
        <div className='flex flex-col gap-3'>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>JQuery</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Github</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Material UI</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Sass</div>
        <div className='flex items-center gap-5'><BiRightArrow className='text-golden'/>Supabase</div>
        </div>

        <div>
          <img src={me} alt='vader' className='h-[250px] ml-14 my-10'/>
          <p className='relative text-[1rem] text-golden font-Abril'>Vader <img src={arrow} className='h-[50px] absolute top-[-30px] left-[30px]'/></p>
        </div>
       

      </div>
    </div>
  )
}

export default About