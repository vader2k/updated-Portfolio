import DateTimeDisplay from '../hooks/DateTimeDisplay'
import star from '../assets/star.png'
const Hero = () => {
  return (
    <div className="py-5 px-3 h-[100vh] sm:mt-40">
      <div className='flex ml-28 mb-24 relative z-20 sm:ml-[20rem] md:ml-[40rem] hero-date'>
        <div className='absolute left-[-18px] top-[8px]'>
          <img src={star} className='w-[2rem] star'/>
        </div>
      <div>
        <DateTimeDisplay/>
      </div>
      </div>
      <div className="leading-[2.7rem] sm:leading-[3.5rem]">
        <p className="font-Abril text-golden py-3 sm:text-[2rem]">Creative</p>
        <h1 className='hero-h1'>DESIGNER <span className="text-[1rem] sm:text-[2rem] text-golden">&</span></h1>
        <h1 className='hero-h1'>DEVELOPER</h1>
      </div>
      <p className='flex flex-col py-20 sm:mt-10 sm:text-[1.6rem] font-Raleway line sm:ml-[100px] p-fade'>
        I am a passionate frontend web developer with a deep appreciation for creating immersive digital experiences.
        I specialize in bringing ideas to life through elegant & responsive web solutions.
      </p>

    </div>
  )
  
}

export default Hero
