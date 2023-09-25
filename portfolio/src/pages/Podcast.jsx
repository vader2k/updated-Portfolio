import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import podcast from '../assets/podcast.png'
import {BsArrowUpRight} from 'react-icons/bs'

const Podcast = () => {
  return (
    <>
    <div className='py-10 px-3 h-[100vh] relative works md:hidden'>
    {<Link to='/'>
      <button><img src={back} className='w-[50px]'/></button>
    </Link>}
    <h1>
      Great Music Great Talks
    </h1>
    <p className='py-5 text-[13px]'>
    Welcome to Great music great talks, where the world of audio storytelling comes to life. We are a passionate community of podcast enthusiasts and creators dedicated to amplifying voices, sharing stories, and fostering connections through the power of sound.
    </p>
    <div className='mt-3'>
      <img src={podcast}/>
    </div>
    <div className='mt-10'>
      <p className='text-[1.5rem]'>Tools</p>
      <p className='text-gray-400'>
        React , Tailwind css, Github, 
      </p>
    </div>
    
    <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
      <div className='flex flex-col gap-5'>
        <p>Frontend Development</p>
        <a href="https:/great-music.vercel.app">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
        </a>
      </div>
    </div>
  </div>

  <div className='py-10 px-3 h-[100vh] relative works hidden pages'>
    <div className='w-[80%] m-auto mt-32 gap-5 flex items-center justify-center '>
      <div className='flex-1'>
        {<Link to='/'>
          <button><img src={back} className='w-[120px]'/></button>
        </Link>}
        <h1>
          Great Music Great Talks
        </h1>
        <p className='py-5 text-[20px]'>
        Welcome to Great music great talks, where the world of audio storytelling comes to life. We are a passionate community of podcast enthusiasts and creators dedicated to amplifying voices, sharing stories, and fostering connections through the power of sound.
        </p>
      </div>
      <div className='flex-1'> <div className='mt-3'>
      <img src={podcast}/>
    </div></div>
    </div>

    <div className='mt-5 w-[80%] m-auto'>
      <p className='text-[1.5rem]'>Tools</p>
      <p className='text-gray-400'>
        React , Tailwind css, Github, 
      </p>
    </div>
    
    <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
      <div className='flex flex-col gap-5'>
        <p>Frontend Development</p>
        <a href="https:/great-music.vercel.app">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
        </a>
      </div>
    </div>
  </div>
    </>

  )
}

export default Podcast