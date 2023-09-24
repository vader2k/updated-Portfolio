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
                    <a href="https://www.showwcase.com/show/34387/understanding-keyboard-events-in-javascript">
                    <p className='hover:text-golden max-w-[200px]'>Understanding Keyboard Events In JavaScript </p>
                    </a>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div><img src={article} className='w-[80px]'/></div>
                <div>
                    <p className='text-[13px] text-gray-400'>2023</p>
                    <a href="https://kingvader.hashnode.dev/how-to-manipulate-arrays-using-array-methods-in-javascript">
                    <p className='hover:text-golden max-w-[200px]'>How To Manipulate Arrays Using Array Methods in JavaScript  </p> 
                    </a>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div><img src={article} className='w-[80px]'/></div>
                <div>
                    <p className='text-[13px] text-gray-400'>2023</p>
                    <a href="https://www.showwcase.com/show/34525/understanding-loops-in-javascript">
                    <p className='hover:text-golden max-w-[200px]'>Understanding Loops In JavaScript</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Writing