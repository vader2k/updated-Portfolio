import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import sum from '../assets/summarizer.png'
import {BsArrowUpRight} from 'react-icons/bs'

const Summarizer = () => {
  return (
    <>
      <div className='py-10 px-3 h-[100vh] relative works md:hidden'>
      {<Link to='/'>
        <button><img src={back} className='w-[50px]'/></button>
      </Link>}
      <h1>
        ARTICLE SUMMARIZER
      </h1>
      <p className='py-5 text-[13px]'>
        An AI article summarizer that returns the summary of any article you provide the link to.
      </p>
      <div className='mt-3'>
        <img src={sum}/>
      </div>
      <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
        <div className='flex flex-col gap-5'>
          <p>Frontend Development</p>
          <a href="https://v-summarizer.netlify.app/">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
          </a>
        </div>
      </div>
    </div>

    <div className='py-10 px-3 h-[100vh] relative works pages hidden'>
      <div className='w-[80%] m-auto mt-32 gap-5 flex items-center '>
        <div className='flex-1'>
          {<Link to='/'>
          <button><img src={back} className='w-[120px]'/></button>
        </Link>}
        <h1>
          ARTICLE SUMMARIZER
        </h1>
        <p className='py-5 text-[20px]'>
        AI article summarizers emerge as powerful tools, helping you quickly grasp the essence of lengthy articles by condensing them into a concise and informative format. These tools leverage natural language processing (NLP) techniques to analyze text and extract key points, saving you valuable time and effort.
        </p>
      </div>
        <div className='flex-1'>
        <div className='mt-3'>
        <img src={sum}/>
          </div>
        </div>
      </div>


      <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
        <div className='flex flex-col gap-5'>
          <p>Frontend Development</p>
          <a href="https://v-summarizer.netlify.app/">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Summarizer