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
          I find my passion in creating digital experiences on the web. As a frontend developer with over two years of professional experience, coupled with my skills as a technical writer, I've been able to share my knowledge through articles geared towards beginnings. These articles are born from the challenges i've faced and the solutions i've discovered along the way.
       My journey has taken me through diverse environments, including startups, large corporations, and online training institutions like <span className='text-golden'>Tethral Technologies</span>.Today, my primary focus revolves around creating accessible and innovaive solutions that solve real-world problems for a wide range of clients".
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
        I find my passion in creating digital experiences on the web. As a frontend developer with over two years of professional experience, coupled with my skills as a technical writer, I've been able to share my knowledge through articles geared towards beginnings. These articles are born from the challenges i've faced and the solutions i've discovered along the way.
       My journey has taken me through diverse environments, including startups, large corporations, and online training institutions like <span className='text-golden'>Tethral Technologies</span>.Today, my primary focus revolves around creating accessible and innovaive solutions that solve real-world problems for a wide range of clients".
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