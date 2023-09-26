import React from 'react'
import me from '../assets/portfolio.jpg'
import arrow from  '../assets/vaderarror.png'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // When 20% of the element is in view
  });
  return (
      <>
      <div className='px-3 md:hidden' id='about'>
      <div>
        <motion.div
            ref={ref}      
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }} >
          <h3 className=' flex justify-end pr-5'>HELLO. I AM DANIEL</h3>
        </motion.div>

        <motion.div
                ref={ref}      
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 2 }} 
          >
          <p className='flex justify-end font-Abril text-golden pr-5 pb-5'>Odukwe Daniel</p>
          <p className='flex justify-end pl-10 pr-5 text-left line sm:text-[1.5rem]'>
            I enjoy creating things that lives on the internet. I am a frontend web developer with 2yrs+ experience and also a technical writer. I have published few articles tendered towards beginers since my articles are based on problems i faced and how i overcame them. I have had the priviledge of working at Tethral technologies, a startup, a large corporation and an online training institution. My main focus these days are building more accessible & problem solving produts for a variety of clients.
          </p>
        </motion.div>
      </div>
        <div className='md:flex-1 md:w-full'>
          <div>
            <img src={me} alt='vader' className='h-[250px] ml-14 my-10 rounded-full'/>
            <p className='relative text-[1rem] text-golden font-Abril'>Vader <img src={arrow} className='h-[50px] absolute top-[-30px] left-[30px]'/></p>
          </div>
        </div>
      </div>

      <div className='px-3 hidden lg:flex gap-10' id='about'>
      <div className='flex-[2]'>
        <h3 className=' flex justify-end pr-5 text-[5rem]'>HELLO. I AM DANIEL</h3>
        <p className='flex justify-end font-Abril text-golden pr-5 pb-5 text-[2rem]'>Odukwe Daniel</p>
        <p className='flex justify-end pl-10 pr-5 text-left line sm:text-[1.5rem]'>
          I enjoy creating things that lives on the internet. I am a frontend web developer with 2yrs+ experience and also a technical writer. I have published few articles tendered towards beginers since my articles are based on problems i faced and how i overcame them. I have had the priviledge of working at Tethral technologies, a startup, a large corporation and an online training institution. My main focus these days are building more accessible & problem solving produts for a variety of clients.
        </p>
      </div>
        <div className='flex-1'>
          <div>
            <img src={me} alt='vader' className='h-[400px] ml-14 my-10 rounded-full'/>
            <p className='relative text-[1rem] text-golden font-Abril'>Vader <img src={arrow} className='h-[50px] absolute top-[-30px] left-[30px]'/></p>
          </div>
        </div>
      </div>

      </>
  )
}

export default About