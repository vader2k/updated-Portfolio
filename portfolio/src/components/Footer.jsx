import React from 'react'
import {LuGithub} from 'react-icons/lu'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {RiLinkedinLine} from 'react-icons/ri'
import {FaHashnode} from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='py-10 px-3'>
        <div className='flex items-center justify-center gap-6 py-3'>
            <LuGithub className='text-[1.5rem] hover:text-golden'/> <AiOutlineInstagram className='text-[1.5rem] hover:text-golden'/> <FiTwitter className='text-[1.5rem] hover:text-golden'/> <RiLinkedinLine className='text-[1.5rem] hover:text-golden'/> <FaHashnode className='text-[1.5rem] hover:text-golden'/>
        </div>
        <div className='py-3 text-center'>Designed & built by Odukwe daniel</div>
    </div>
  )
}

export default Footer