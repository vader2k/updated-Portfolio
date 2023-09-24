import React from 'react'
import article from '../assets/article.jpg'


const Writing = () => {
  return (
    <div className='px-3 py-10'>
        <div className='relative'>
            
            <h3 className='px-3'>Writing</h3>
        </div>

        <div className='py-5 px-3 flex flex-col gap-5 '>
            <div className='flex items-center gap-4'>
                <div><img src={article} className='w-[80px]'/></div>
                <div>
                    <p className='text-[13px] text-gray-400'>2023</p>
                    <p className='hover:text-golden max-w-[200px]'>Understanding Keyboard Events In JavaScript </p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div><img src={article} className='w-[80px]'/></div>
                <div>
                    <p className='text-[13px] text-gray-400'>2023</p>
                    <p className='hover:text-golden max-w-[200px]'>How To Manipulate Arrays Using Array Methods in JavaScript  </p>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div><img src={article} className='w-[80px]'/></div>
                <div>
                    <p className='text-[13px] text-gray-400'>2023</p>
                    <p className='hover:text-golden max-w-[200px]'>Understanding Loops In JavaScript</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Writing