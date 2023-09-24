import React from 'react'
import {GiSevenPointedStar} from 'react-icons/gi'
import {TabsComponent} from './index'


const Experience = () => {
  return (
    <div className='px-3 py-10' id='experience'>
      <div>
        <div className='flex items-center'>
        <GiSevenPointedStar className='text-[2rem] text-golden star'/>
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