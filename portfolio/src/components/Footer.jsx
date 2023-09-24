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
          <a href="https://github.com/vader2k">
          <LuGithub className='text-[1.5rem] hover:text-golden'/> 
          </a>
          <a href="https://instagram.com/kvngn?igshid=OGQ5ZDc2ODK2ZA==">
          <AiOutlineInstagram className='text-[1.5rem] hover:text-golden'/>
          </a>
          <a href="https://twitter.com/kingdanny295">
          <FiTwitter className='text-[1.5rem] hover:text-golden'/>
          </a>
          <a href="https://linkedin.com/in/odukwe-daniel-09920a286">
          <RiLinkedinLine className='text-[1.5rem] hover:text-golden'/> 
          </a>
          <a href="https://hashnode.com/@KingVader">
          <FaHashnode className='text-[1.5rem] hover:text-golden'/>
          </a>
        
        </div>
        <div className='py-3 text-center'>Designed & built by Odukwe daniel</div>
    </div>
  )
}

export default Footer