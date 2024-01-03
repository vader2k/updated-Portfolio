import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import anon from '../assets/anon.png'
import {BsArrowUpRight} from 'react-icons/bs'

const AnonStore = () => {
  return (
    <>
    <div className='py-10 px-3 h-[100vh] relative works md:hidden'>
        {<Link to='/'>
            <button><img src={back} className='w-[50px]'/></button>
        </Link>}
        <h1>
            Anon Store
        </h1>
        <p className='py-5 text-[13px]'>
            An E-commerce website made with html, css and vanilla js.
        </p>
        <div className='mt-3'>
            <img src={anon}/>
            </div>
            <div className='mt-20'>
            <p className='text-[1.5rem]'>Tools</p>
            <p className='text-gray-400'>
                Html, css, Javascript, Github
            </p>
        </div>
        
        <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
            <div className='flex flex-col gap-5'>
                <p>Frontend Development</p>
                <a href="https://anon-stores.vercel.app/">
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
                Anon Store
            </h1>
            <p className='py-5 text-[20px]'>
                An e-commerce store made with Html, css and javaScript.
            </p>
        </div>
        <div className='flex-1'>
            <div className='mt-3'>
              <img src={anon}/>
            </div>
        </div>
      </div>


    <div className='mt-20 w-[80%] m-auto'>
      <p className='text-[1.5rem]'>Tools</p>
      <p className='text-gray-400'>
        Html, Css, Javascript, Github
      </p>
    </div>
    
    <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
      <div className='flex flex-col gap-5'>
        <p>Frontend Development</p>
        <a href="https://anon-stores.vercel.app/">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
        </a>
      </div>
    </div>
    </div>
    </>
  )
}

export default AnonStore
