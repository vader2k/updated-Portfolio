import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import bank from '../assets/hoobank.png'
import {BsArrowUpRight} from 'react-icons/bs'

const Hoobanks = () => {
  return (
    <div className='py-10 px-3 h-[100vh] relative works'>
    {<Link to='/'>
      <button><img src={back} className='w-[50px]'/></button>
    </Link>}
    <h1>
      HOOBANK
    </h1>
    <p className='py-5 text-[13px]'>
      Landing page website for hoobank
    </p>
    <div className='mt-3'>
      <img src={bank}/>
    </div>
    <div className='mt-20'>
      <p className='text-[1.5rem]'>Tools</p>
      <p className='text-gray-400'>
        React , Tailwind css, Github
      </p>
    </div>
    
    <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
      <div className='flex flex-col gap-5'>
        <p>Frontend Development</p>
        <a href="https://hugoo-bank-app.vercel.app">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
        </a>
        
      </div>
    </div>
  </div>
  )
}

export default Hoobanks