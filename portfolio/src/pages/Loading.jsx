import React,{useState, useEffect} from 'react'

const Loading = () => {
  const [showParagraph1, setShowparagraph1] = useState(true);
  const [showParagraph2, setShowparagraph2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(()=> {
      setShowparagraph1(false);
      setShowparagraph2(true);
    },2000)

    const timeout2 = setTimeout(()=> {
      setShowparagraph2(false);
      setShowparagraph1(true);
    },4000)

    return() =>{
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    }
  },[])
    return (
    <div className='bg-[#131313]'>
      <div className='flex items-center justify-center box-border w-full h-[100vh] px-10 para-holder'>
        {
          showParagraph1 && <p className='text-golden text-[1.2rem] font-Abril loading '>Through out the heavens and the earth</p>
        }
        {
          showParagraph2 && <p className='text-golden text-[1.2rem] font-Abril loading '>I alone am the honored one </p>
        }
      </div>
    </div>
  )
}

export default Loading