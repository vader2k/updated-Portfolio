import React from 'react'
import{DiJavascript} from 'react-icons/di'
import{AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJquery, BiLogoReact, BiLogoTailwindCss, BiLogoWordpress, BiLogoBootstrap} from 'react-icons/bi'
import {RiSupabaseFill} from 'react-icons/ri'
import {PiFramerLogoFill} from 'react-icons/pi'


const Tools = () => {
  return (
    <div className='py-14 px-3'>
      <div className=' h-[100px] w-[350px] overflow-x-auto'>
        <div className='flex gap-5 w-[1200px] overflow-x-auto hover:text-golden'>
        <DiJavascript className='text-[4rem]'/> <AiFillGithub className='text-[4rem]'/> <AiFillHtml5 className='text-[4rem]'/> <BiLogoCss3 className='text-[4rem]'/> <BiLogoJquery className='text-[4rem]'/> <BiLogoReact className='text-[4rem]'/> <BiLogoBootstrap className='text-[4rem]'/> <BiLogoWordpress className='text-[4rem]'/> <BiLogoBootstrap className='text-[4rem]'/> <BiLogoTailwindCss className='text-[4rem]'/>
        <RiSupabaseFill className='text-[4rem]'/><PiFramerLogoFill className='text-[4rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Tools