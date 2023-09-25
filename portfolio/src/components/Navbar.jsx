import {HiMiniBars3BottomLeft} from 'react-icons/hi2'
import {AiOutlineClose} from 'react-icons/ai'
import {FiHexagon} from 'react-icons/fi'
import {navbar} from '../constants'
import React,{useState} from 'react'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='items-center justify-between py-5 px-5 h-[80px] sm:flex hidden bg-[#131313] sticky top-0 left-0 z-[99999]'>
        <div className='relative cursor-pointer'>
          <div>
            <FiHexagon className='text-golden text-[3rem] '/>
          </div>
          <div className='text-golden absolute top-[15%] left-[35%] text-[1.5rem] font-bold'>
              V
          </div>
        </div>
        <div className='flex gap-10 items-center'>
          {
            navbar.map(({id, name ,path},index) =>(
              <li key={id} className={`font-poppins font-normal cursor-pointer text-[16px] list-none ${index === navbar.length -1 ?'mr-0':'mr-10'}`}>
                <a href={`#${name.id}`}>
                  {name}
                </a>
              </li>
            ))
          }
          <a href="https://docs.google.com/document/d/1u77out_Srn5qkwXgBo-l66618edQwWEJ2LO381OpwqE/edit">
          <button className='text-[16px] border border-golden p-3'>Resume</button>
          </a>
          
        </div>
    </div>

    <div className='items-center justify-between py-5 px-5 h-[80px] sm:hidden flex bg-[#131313]  border-none sticky top-0'>
        <div className='relative cursor-pointer'>
          <div>
            <FiHexagon className='text-golden text-[3rem] '/>
          </div>
          <div className='text-golden absolute top-[15%] left-[35%] text-[1.5rem] font-bold'>
              V
          </div>
        </div>

          <div className=''>
            {
              toggle? <AiOutlineClose className='text-golden text-[2.5rem] duration-100 ' onClick={()=> setToggle((prev)=>(!prev))}/> : <HiMiniBars3BottomLeft className='text-golden text-[2.5rem] duration-100' onClick={()=> setToggle((prev)=>(!prev))}/>
            }

          <div className={`${toggle ? 'flex' : 'hidden'} bg-[#131313]  absolute top- right-0  w-[75%] h-[100%] z-[90] nav-items`}>
            <ul className='list-none text-center py-36 px-24 bg-[#131313] z-40 h-[100vh]'>
              {navbar.map((nav, index) =>(
                <li key={nav.id} className={`cursor-pointer text-[20px]  ${index === navbar.length -1 ?'mb-0':'mb-16'} text-white`} onClick={()=> setToggle((prev)=>(!prev))}>
                  <a href={`#${nav.id}`}>
                    {nav.name}
                  </a>
                </li>
              ))}
              <a href="https://docs.google.com/document/d/1u77out_Srn5qkwXgBo-l66618edQwWEJ2LO381OpwqE/edit">
                <button className='text-[16px] border border-golden p-5 text-golden mt-20'>Resume</button>
              </a>
              
            </ul>
          </div>
          </div>
    </div>
    </>


    
  )
}

export default Navbar