import React from 'react'
import {GiSevenPointedStar} from 'react-icons/gi'
import health from '../assets/health.png'
import bank from '../assets/hoobank.png'
import jericho from '../assets/jericho.png'
import podcast from '../assets/podcast.png'
import social from '../assets/social.png'
import { Link, Navigate } from 'react-router-dom'


const Work = () => {
  const nagivation = Navigate
  return (
    <div className='px-3 py-10' id='works'>
          <div className='flex items-center'>
        <GiSevenPointedStar className='text-[2rem] text-golden star'/>
        <h3 className='px-1'>Works</h3>
        </div>


      <div className='flex flex-col gap-3 w-[85%] m-auto py-5'>
        <Link to='health'>
        <div className='img-container relative inline-block'>
            <img className='block w-[100%] h-auto' src={health}/>
            <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
          </div>
        </Link>
        <Link to='hoobanks'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={bank}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
        </Link>

        <Link to='jericho'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={jericho}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
        </Link>

        <Link to='social'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={social}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
        </Link>

        <Link to='podcast'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={podcast}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
        </Link>
      </div>
    </div>

  )
}

export default Work