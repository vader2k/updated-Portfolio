import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import medicare from '../assets/medicare.png'
import {BsArrowUpRight} from 'react-icons/bs'

const MediCare = () => {
  return (
    <>
        <div className='py-10 px-3 h-[100vh] relative works md:hidden'>
            {<Link to='/'>
                <button><img src={back} className='w-[50px]'/></button>
            </Link>}
            <h1>
                MediCare
            </h1>
            <p className='py-5 text-[13px]'>
                A health care website where people can meet doctors and book apponintment at their own convenience.
            </p>
            <div className='mt-3'>
                <img src={medicare}/>
            </div>
            <div className='mt-20'>
            <p className='text-[1.5rem]'>Tools</p>
            <p className='text-gray-400'>
                React , Tailwind css, Github,
            </p>
            </div>
            
            <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
            <div className='flex flex-col gap-5'>
                <p>Frontend Development</p>
                <a href="https://vaderhospital.vercel.app/">
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
                    MediCare
                </h1>
                <p className='py-5 text-[20px]'>
                    A healthcare application i made to bridge the gap between patient and doctors.
                </p>
                </div>
                <div className='flex-1'>
                    <div className='mt-3'>
                    <img src={medicare}/>
                    </div>
                </div>
            </div>


            <div className='mt-20 w-[80%] m-auto'>
            <p className='text-[1.5rem]'>Tools</p>
            <p className='text-gray-400'>
                React , Tailwind css, Github
            </p>
            </div>
            
            <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
            <div className='flex flex-col gap-5'>
                <p>Frontend Development</p>
                <a href="https://vaderhospital.vercel.app/">
                <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
                </a>
            </div>
            </div>
        </div>
    </>
  )
}

export default MediCare
