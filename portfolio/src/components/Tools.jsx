import React from 'react'
import{DiJavascript} from 'react-icons/di'
import{AiFillHtml5, AiFillGithub} from 'react-icons/ai'
import {BiLogoCss3, BiLogoJquery, BiLogoReact, BiLogoTailwindCss, BiLogoWordpress, BiLogoBootstrap} from 'react-icons/bi'
import {RiSupabaseFill} from 'react-icons/ri'
import {PiFramerLogoFill} from 'react-icons/pi'


const Tools = () => {
  return (
    <div className='py-14 px-3'>
      <div className='  w-[380px] overflow-x-auto wraper'>
        <div className='flex gap-5 w-[850px] overflow-x-auto hover:text-golden'>
        <DiJavascript className='text-[3.5rem]'/> <AiFillGithub className='text-[3.5rem]'/> <AiFillHtml5 className='text-[3.5rem]'/> <BiLogoCss3 className='text-[3.5rem]'/> <BiLogoJquery className='text-[3.5rem]'/> <BiLogoReact className='text-[3.5rem]'/> <BiLogoBootstrap className='text-[3.5rem]'/> <BiLogoWordpress className='text-[3.5rem]'/> <BiLogoBootstrap className='text-[3.5rem]'/> <BiLogoTailwindCss className='text-[3.5rem]'/>
        <RiSupabaseFill className='text-[3.5rem]'/><PiFramerLogoFill className='text-[3.5rem]'/>
        </div>
      </div>
    </div>
  )
}

export default Tools