import React from 'react'
import {TabsComponent} from './index'
import star from '../assets/star.png'

const Experience = () => {
  return (
    <div className='px-3 py-28' id='experience'>
      <div>
        <div className='flex items-center'>
        <img src={star} className='w-[2rem] star'/>
        <h3 className='px-1'>Experience</h3>
        </div>

        <div className='pb-10 py-5'>
          <TabsComponent/>
        </div>
      </div>
    </div>
  )
}

export default Experience