import health from '../assets/health.png'
import bank from '../assets/hoobank.png'
import jericho from '../assets/jericho.png'
import podcast from '../assets/podcast.png'
import medicare from '../assets/medicare.png'
import { Link} from 'react-router-dom'
import star from '../assets/star.png'

const Work = () => {
  return (
    <div className='px-3 py-10' id='works'>
          <div className='flex items-center'>
          <img src={star} className='w-[2rem] star'/>
        <h3 className='px-1'>Works</h3>
        </div>

      <div className='flex flex-col gap-3 w-[85%] m-auto py-5 sm:hidden'>
        <Link to='health'>
        <div className='img-container relative inline-block'>
                <img className='block w-[100%] h-auto' src={health}/>
                <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
          </div>
        </Link>
        <Link to='hoobanks'>
        <div className='img-container relative inline-block'>

          <img className='block w-[100%] h-auto' src={bank}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>

        </div>
        </Link>

        <Link to='jericho'>
        <div className='img-container relative inline-block'>
                <img className='block w-[100%] h-auto' src={jericho}/>
                <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
        </Link>

        <Link to='social'>
        <div className='img-container relative inline-block'>
            <img className='block w-[100%] h-auto' src={medicare}/>
            <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'>
            </div>
        </div>
        </Link>

        <Link to='podcast'>
        <div className='img-container relative inline-block'>
            <img className='block w-[100%] h-auto' src={podcast}/>
            <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.5] work-img'></div>
        </div>
        </Link>
      </div>





      <div className='sm:flex flex-col gap-3 w-[85%] m-auto py-5 hidden '>
        <div className='flex justify-between gap-3 items-center'>
          <div className='flex-1'> 
          <p className='text-[2rem] font-Abril'>HEALTHSTARKS</p>
          </div>
          <div className='flex-1'>
          <Link to='health'>
        <div className='img-container relative inline-block'>
            <img className='block w-[100%] h-auto' src={health}/>
            <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.7] work-img'></div>
          </div>
        </Link>
          </div>
        </div>

        <div className='flex flex-row-reverse justify-between gap-3 items-center'>
          <div className='flex-1'> <p className='text-[2rem] font-Abril '>HOOBANK</p></div>
          <div className='flex-1'>
          <Link to='hoobanks'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={bank}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.7] work-img'></div>
        </div>
        </Link>
          </div>
        </div>

        <div className='flex  justify-between gap-3 items-center'>
          <div className='flex-1'>
          <p className='text-[2rem] font-Abril'>VISIONSCAPE</p>
          </div>
          <div className='flex-1'>
          <Link to='jericho'>
        <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={jericho}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.7] work-img'></div>
        </div>
        </Link>
          </div>

        </div>

        <div className='flex flex-row-reverse justify-between gap-3 items-center'>
          <div className='flex-1'>
            <p className='text-[2rem] font-Abril'>MediCare</p>
          </div>
          <div className='flex-1'>
          <Link to='medicare'>
          <div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={medicare}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.7] work-img'></div>
        </div>
        </Link>
          </div>

        </div>

        <div className='flex  justify-between gap-3 items-center'>
          <div className='flex-1'>
          <p className='text-[2rem] font-Abril'>GREAT MUSIC GREAT TALKS</p>
          </div>
          <div className='flex-1'>
          <Link to='podcast'>
        < div className='img-container relative inline-block'>
          <img className='block w-[100%] h-auto' src={podcast}/>
          <div className='color absolute top-0 left-0 w-[100%] h-[100%] bg-golden opacity-[0.7] work-img'></div>
        </div>
        </Link>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Work