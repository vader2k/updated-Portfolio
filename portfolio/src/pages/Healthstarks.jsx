import { Link } from 'react-router-dom'
import back from '../assets/back.svg'
import health from '../assets/health.png'
import {BsArrowUpRight} from 'react-icons/bs'
const Healthstarks = () => {
  return (
    <div className='py-10 px-3 h-[100vh] relative'>
      {<Link to='/'>
        <button><img src={back} className='w-[50px]'/></button>
      </Link>}
      <h1>
        HEALTHSTARKS
      </h1>
      <p className='py-5 text-[13px]'>
        Healthstarks is dedicated to fostering knowledge, facilitating collaboration, and promoting wellness within a vibrant and supportive health-conscious community. Our platform empowers individuals to ask questions, seek answers, and develop a thriving network of like-minded individuals and experts, all in the pursuit of better health and well-being.
      </p>
      <div className='mt-3'>
        <img src={health}/>
      </div>
      <div className='mt-32 border-t border-golden py-3 w-[90%] m-auto absolute bottom-[20px]'>
        <div className='flex flex-col gap-5'>
          <p>Frontend Development</p>
          <button className='flex items-center gap-5'>see case <BsArrowUpRight className='text-golden'/> </button>
        </div>
      </div>
    </div>
  )
}

export default Healthstarks