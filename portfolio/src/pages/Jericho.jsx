import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import jericho from '../assets/jericho.png'
import {BsArrowUpRight} from 'react-icons/bs'


const Jericho = () => {
  return (
    <div className='py-10 px-3 h-[100vh] relative'>
    {<Link to='/'>
      <button><img src={back} className='w-[50px]'/></button>
    </Link>}
    <h1>
      VISION SCAPE
    </h1>
    <p className='py-5 text-[13px]'>
    At Vision scape, we are passionate creators of spaces that inspire, innovate, and elevate the human experience. With a commitment to exceptional design and a dedication to our clients' visions, we have established ourselves as a leading architectural firm that is redefining the landscape of architectural excellence.
    </p>
    <div className='mt-3'>
      <img src={jericho}/>
    </div>
    <div className='mt-20'>
      <p className='text-[1.5rem]'>Tools</p>
      <p className='text-gray-400'>
        React , Tailwind css, Github, Gsap
      </p>
    </div>
    
    <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
      <div className='flex flex-col gap-5'>
        <p>Frontend Development</p>
        <a href="https://visionscape-architects.vercel.app">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
        </a>
       
      </div>
    </div>
  </div>
  )
}

export default Jericho