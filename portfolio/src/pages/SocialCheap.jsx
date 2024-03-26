import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import Socialpic from '../assets/socialcheap.png'
import {BsArrowUpRight} from 'react-icons/bs'

const SocialCheap = () => {
  return (
<>
      <div className='py-10 px-3 h-[100vh] relative works md:hidden'>
      {<Link to='/'>
        <button><img src={back} className='w-[50px]'/></button>
      </Link>}
      <h1>
        SOCIAL CHEAP
      </h1>
      <p className='py-5 text-[13px]'>
        Socialcheap is an online platform that one can buy online virtual numbers for secure and private registration on various site, service and app.
      </p>
      <div className='mt-3'>
        <img src={Socialpic}/>
      </div>
      <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
        <div className='flex flex-col gap-5'>
          <p>Frontend Development</p>
          <a href="https://socialcheap.shop/">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
          </a>
        </div>
      </div>
    </div>

    <div className='py-10 px-3 h-[100vh] relative works pages hidden'>
      <div className='w-[80%] m-auto mt-32 gap-5 flex items-center '>
        <div className='flex-1'>
          {<Link to='/'>
          <button><img src={back} className='w-[120px]'/></button>
        </Link>}
        <h1>
          SOCIAL CHEAP
        </h1>
        <p className='py-5 text-[20px]'>
        Socialcheap is a leading online platform that empowers you to take control of your online privacy. We offer a variety of virtual phone numbers, allowing you to securely and privately register on websites, services, and apps. Whether you're signing up for social media platforms, protecting your personal information from data breaches, or simply seeking anonymity online, Socialcheap has the solution for you.
        </p>
      </div>
        <div className='flex-1'>
        <div className='mt-3'>
        <img src={Socialpic}/>
          </div>
        </div>
      </div>


      <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
        <div className='flex flex-col gap-5'>
          <p>Frontend Development</p>
          <a href="https://socialcheap.shop/">
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default SocialCheap