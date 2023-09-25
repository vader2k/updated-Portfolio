import DateTimeDisplay from '../hooks/DateTimeDisplay'
import star from '../assets/star.png'
const Hero = () => {
  return (
    <div className="py-32 px-3 h-[100vh] ">
      <div className='flex ml-48 relative z-20'>
        <div className='absolute left-[-18px] top-[8px]'>
          <img src={star} className='w-[2rem] star'/>
        </div>
      <div>
        <DateTimeDisplay/>
      </div>
      </div>
      <div className="leading-[1.7rem]">
        <p className="font-Abril text-golden py-3">Creative</p>
        <h1>DESIGNER <span className="text-[1rem] text-golden">&</span></h1>
        <h1>DEVELOPER</h1>
      </div>
      <div className='flex flex-col py-20 font-Raleway'>
        I am a passionate frontend web developer with a deep appreciation for creating immersive digital experiences.
        I specialize in bringing ideas to life through elegant & responsive web solutions.
      </div>
    </div>
  )
  
}

export default Hero
