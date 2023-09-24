import React from 'react'
import {GiSevenPointedStar} from 'react-icons/gi'
import {BsArrowUpRight} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='py-16 px-3' id='contacts'>
        <div className='relative'>
          <GiSevenPointedStar className='text-[2rem] text-golden absolute top-[30px] left-[300px] star'/>
        <h1 className='px-3 max-w-[400px] leading-[3rem] '>I AM HONORED TO <br></br> WORK WITH <br></br> SPECIAL PEOPLE</h1>
      </div>

      <p className='flex justify-center py-10'>My inbox is always open for any opportunity</p>

      <form className='w-[80%] m-auto flex flex-col gap-5'action="https://formsubmit.co/kingdanny295@email.com" method="POST" >
        <input name='name' className='w-[100%] bg-transparent outline-none border-b border-golden p-3' type='text' placeholder='Enter your name'></input>
        <input name='email' className='w-[100%] bg-transparent outline-none border-b border-golden p-3' type='email' placeholder='Enter your email address'></input>
        <textarea name='texts' className='bg-transparent border-b border-golden p-3 h-[150px]' placeholder='Hi, i think we need a design system for our product at company X, how soon can you hop on to discuss this?'>

        </textarea>

        <button className='flex items-center gap-5 border border-golden p-3 w-[100px] hover:bg-golden hover:text-black hover:border-white'>Shoot <BsArrowUpRight/></button>
      </form>
    </div>
  )
}

export default Contact