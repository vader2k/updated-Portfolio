import React from 'react'
import{GiSpikes} from 'react-icons/gi'
import health from '../assets/health.png'
import bank from '../assets/hoobank.png'
import jericho from '../assets/jericho.png'
import podcast from '../assets/podcast.png'
import social from '../assets/social.png'

const Work = () => {
  return (
    <div className='px-3 py-10'>
      <div className='relative'>
        <GiSpikes className='text-[2rem] text-golden absolute top-[-8px] left-[-5px]'/>
        <h3 className='px-3'>Selected cases</h3>
      </div>

      <div className='flex flex-col gap-3 w-[85%] m-auto py-5'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={health}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>

        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={bank}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>

        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={jericho}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>

        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={social}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>

        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={podcast}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
      </div>
    </div>

  )
}

export default Work