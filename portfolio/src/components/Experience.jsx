import React from 'react'
import{GiSpikes} from 'react-icons/gi'
import {TabsComponent} from './index'


const Experience = () => {
  return (
    <div className='px-3 py-10'>
      <div className='relative'>
        <GiSpikes className='text-[2rem] text-golden absolute top-[-8px] left-[-5px]'/>
        <h3 className='px-3'>Experience</h3>
        <div className='pb-10 py-5'>
          <TabsComponent/>
        </div>
      </div>
    </div>
  )
}

export default Experience